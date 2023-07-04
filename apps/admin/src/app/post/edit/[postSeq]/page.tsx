'use client';

import { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/navigation';

import { css } from '@emotion/react';

import { zodResolver } from '@hookform/resolvers/zod';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Input,
  TextArea,
  FileUploadLabel,
  Header,
  FormCategory,
  FileCard,
} from 'admin/components';
import * as S from 'admin/styles/page/write';

import { usePatchPost } from 'api/admin';
import type { FileInfoType } from 'api/client';
import { useGetPostDetail, type PostCategoryType } from 'api/client';

import { Button } from 'ui';

interface EditPageProps {
  params: { postSeq: number };
}

const schema = z.object({
  title: z
    .string()
    .min(2, { message: '제목은 2글자 이상 입력해주세요.' })
    .max(60, { message: '제목은 60글자 이하로 입력해주세요.' }),
  content: z
    .string()
    .max(5000, { message: '내용은 5000글자 이하로 입력해주세요.' }),
});

type FormType = z.infer<typeof schema>;

const categoryPath = {
  NOTICE: '/',
  FAMILY_NEWSLETTER: '/newsletter',
  EVENT_GALLERY: '/gallery',
} as const;

const preventClose = (e: BeforeUnloadEvent) => {
  e.preventDefault();
  e.returnValue = '';
};

export default function EditPage({ params: { postSeq } }: EditPageProps) {
  const [category, setCategory] = useState<PostCategoryType>('NOTICE');
  const [files, setFiles] = useState<File[]>([]);
  const [prevFiles, setPrevFiles] = useState<FileInfoType[]>();
  const fileInput = useRef<HTMLInputElement>(null);
  const [deletFileUrl, setDeletFileUrl] = useState<string[]>([]);

  const { replace, back } = useRouter();
  const { mutate, isSuccess } = usePatchPost(postSeq);
  const { data } = useGetPostDetail(postSeq);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: data?.postTitle,
      content: data?.postContent,
    },
  });

  useEffect(() => {
    (() => {
      window.addEventListener('beforeunload', preventClose);
    })();

    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  useEffect(() => {
    reset({
      title: data?.postTitle,
      content: data?.postContent,
    });
  }, [data?.postContent, data?.postTitle, reset]);

  useEffect(() => {
    setCategory(data?.category ?? 'NOTICE');
    setPrevFiles(data?.fileInfo);
  }, [data]);

  const handleCancel = (fileName: string, fileUrl?: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
    setPrevFiles((prevFiles) =>
      prevFiles?.filter((file) => file.fileName !== fileName)
    );
    fileUrl && setDeletFileUrl((prevArray) => [...prevArray, fileUrl]);
  };

  const onSubmit: SubmitHandler<FormType> = (data) => {
    const content = {
      postTitle: data.title,
      postContent: data.content,
      category: category,
      deletFileUrl: deletFileUrl,
    };

    const formData = new FormData();

    formData.append(
      'content',
      new Blob([JSON.stringify(content)], { type: 'application/json' })
    );

    files.forEach((file) => formData.append('file', file));

    mutate(formData);
  };

  if (isSuccess) replace(categoryPath[category]);

  const postFile = () => {
    setFiles(
      fileInput.current?.files?.length
        ? [...files, ...fileInput.current.files].filter(
            (element, index, arr) =>
              index === arr.findIndex((files) => files.name === element.name)
          )
        : files
    );
  };

  return (
    <>
      <Header />
      <S.WritePageWrap>
        <S.WriteTitle>게시물 수정</S.WriteTitle>
        <S.FormWrap onSubmit={handleSubmit(onSubmit)}>
          <div>
            <S.FormItemTitle>카테고리</S.FormItemTitle>
            <FormCategory category={category} setCategory={setCategory} />
          </div>
          <div>
            <S.FormItemTitle>제목</S.FormItemTitle>
            <div
              css={css`
                position: relative;
                display: flex;
                align-items: center;
              `}
            >
              <Input
                placeholder='제목을 입력해주세요.'
                width='36.125rem'
                height='2.75rem'
                borderRadius='0.625rem'
                isError={errors.title ? true : false}
                {...register('title')}
                // onChange={(e) => setInput(e.target.value)}
                maxLength={60}
              />
              <span
                css={css`
                  font-weight: 400;
                  font-size: 0.75rem;
                  line-height: 1.125rem;
                  position: absolute;
                  right: 1rem;
                `}
              >
                {watch('title')?.length ?? 0}/60
              </span>
            </div>
            {watch('title')?.length >= 60 && (
              <S.ErrorMessage>글자수를 초과하였습니다.</S.ErrorMessage>
            )}
            {errors.title && (
              <S.ErrorMessage>{`* ${errors.title.message}`}</S.ErrorMessage>
            )}
          </div>
          <div>
            <S.FormItemTitle>내용</S.FormItemTitle>
            <TextArea
              placeholder='내용을 입력해주세요.'
              width='36.125rem'
              height='6.75rem'
              isError={errors.content ? true : false}
              borderRadius='0.625rem'
              {...register('content')}
            />
            {errors.content && (
              <S.ErrorMessage>{`* ${errors.content.message}`}</S.ErrorMessage>
            )}
          </div>
          <div>
            {(prevFiles && prevFiles.length > 0) ||
            (files && files.length > 0) ? (
              <div>
                <S.FileTitleWrapper>
                  <S.FormItemTitle>첨부 파일</S.FormItemTitle>
                  <FileUploadLabel htmlFor='fileUpload' />
                  <input
                    type='file'
                    id='fileUpload'
                    onChange={postFile}
                    ref={fileInput}
                    hidden
                    multiple
                  />
                </S.FileTitleWrapper>
                <S.FileCardBox>
                  {prevFiles?.map((file) => (
                    <S.FileCardWrapper key={file.fileUrl}>
                      <FileCard
                        onCancel={handleCancel}
                        fileName={file.fileName}
                        fileUrl={file.fileUrl}
                      />
                    </S.FileCardWrapper>
                  ))}
                  {files?.map((file) => (
                    <S.FileCardWrapper key={file.name}>
                      <FileCard fileName={file.name} onCancel={handleCancel} />
                    </S.FileCardWrapper>
                  ))}
                </S.FileCardBox>
              </div>
            ) : (
              <>
                <S.FormItemTitle>첨부 파일</S.FormItemTitle>
                <S.UploadBox>
                  <S.UploadTitle>
                    첫번째 등록하신 이미지는 썸네일 역할을 합니다.
                  </S.UploadTitle>
                  <FileUploadLabel htmlFor='fileUpload' />
                  <input
                    type='file'
                    id='fileUpload'
                    onChange={postFile}
                    ref={fileInput}
                    hidden
                    multiple
                  />
                </S.UploadBox>
              </>
            )}
          </div>
          <S.BtnWrap>
            <S.CancelBtn onClick={back}>취소</S.CancelBtn>
            <Button width='22.5625rem' type='submit'>
              완료
            </Button>
          </S.BtnWrap>
        </S.FormWrap>
      </S.WritePageWrap>
    </>
  );
}
