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
  FileCard,
  FormCategory,
} from 'admin/components';
import * as S from 'admin/styles/page/write';

import { usePostWritePost } from 'api/admin';

import { Button } from 'ui';

import type { CategoryQueryStringType } from 'types';

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

const categoryQueryStrings = Object.keys(categoryPath);

const preventClose = (e: BeforeUnloadEvent) => {
  e.preventDefault();
  e.returnValue = '';
};

interface WritePageProps {
  searchParams: {
    category: CategoryQueryStringType;
  };
}

export default function WritePage({
  searchParams: { category },
}: WritePageProps) {
  const [files, setFiles] = useState<File[]>([]);
  const fileInput = useRef<HTMLInputElement>(null);

  const { replace, back } = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormType>({ resolver: zodResolver(schema) });

  const { mutate, isSuccess, isLoading } = usePostWritePost();

  if (!category || !categoryQueryStrings.includes(category)) {
    replace('/post/write?category=NOTICE');
  }

  useEffect(() => {
    () => window.addEventListener('beforeunload', preventClose);

    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  const handleCancel = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const onSubmit: SubmitHandler<FormType> = (data) => {
    const content = {
      postTitle: data.title,
      postContent: data.content,
      category: category,
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

  const isGallery = category === 'EVENT_GALLERY';
  const gallerySubmitDisabled = isGallery && files.length === 0;

  return (
    <>
      <Header />
      <S.WritePageWrap>
        <S.WriteTitle>게시물 생성</S.WriteTitle>
        <S.FormWrap onSubmit={handleSubmit(onSubmit)}>
          <div>
            <S.FormItemTitle>카테고리</S.FormItemTitle>
            <FormCategory category={category} />
          </div>
          <div>
            <S.FormItemTitle>제목 (필수)</S.FormItemTitle>
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
              <S.LengthTitle>{watch('title')?.length ?? 0}/60</S.LengthTitle>
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
            {files.length > 0 ? (
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
                  {files.map((file) => (
                    <S.FileCardWrapper key={file.name}>
                      <FileCard fileName={file.name} onCancel={handleCancel} />
                    </S.FileCardWrapper>
                  ))}
                </S.FileCardBox>
              </div>
            ) : (
              <>
                <S.FormItemTitle>
                  첨부 파일 {isGallery && '(필수)'}
                </S.FormItemTitle>
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
            <Button
              width='22.5625rem'
              type='submit'
              disabled={gallerySubmitDisabled}
              isLoading={isLoading}
            >
              완료
            </Button>
          </S.BtnWrap>
        </S.FormWrap>
      </S.WritePageWrap>
    </>
  );
}
