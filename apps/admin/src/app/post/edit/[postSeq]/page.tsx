'use client';

import { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/navigation';

import { css } from '@emotion/react';

import { zodResolver } from '@hookform/resolvers/zod';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import {
  Input,
  TextArea,
  FileUploadLabel,
  Header,
  FormCategory,
  FileCard,
  FormTitleLength,
  FormErrorMessage,
  FormTitleLengthOver,
} from 'admin/components';
import { usePreventClose } from 'admin/hooks';
import { categoryPath, fileExtension, postFormSchema } from 'admin/shared';
import * as S from 'admin/styles/page/write';
import type { PostFormType } from 'admin/types';

import { usePatchPost } from 'api/admin';
import { useGetPostDetail } from 'api/client';

import { Button } from 'ui';

import type { FileInfoType, CategoryQueryStringType } from 'types';

interface EditPageProps {
  params: { postSeq: number };
}

export default function EditPage({ params: { postSeq } }: EditPageProps) {
  const [category, setCategory] = useState<CategoryQueryStringType>('NOTICE');
  const [files, setFiles] = useState<File[]>([]);
  const [prevFiles, setPrevFiles] = useState<FileInfoType[]>();
  const [deleteFileUrl, setDeleteFileUrl] = useState<string[]>([]);
  const fileInput = useRef<HTMLInputElement>(null);

  usePreventClose();

  const { replace, back } = useRouter();
  const { mutate, isSuccess, isError } = usePatchPost(postSeq);
  const { data } = useGetPostDetail(postSeq);

  const isGallery = category === 'EVENT_GALLERY';
  const galleryEditDisabled = isGallery && !prevFiles?.length && !files.length;

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<PostFormType>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      title: data?.postTitle,
      content: data?.postContent,
    },
  });

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
    setFiles((prevState) => prevState.filter((file) => file.name !== fileName));
    setPrevFiles((prevState) =>
      prevState?.filter((file) => file.fileName !== fileName)
    );
    fileUrl && setDeleteFileUrl((prevArray) => [...prevArray, fileUrl]);
  };

  const onSubmit: SubmitHandler<PostFormType> = (data) => {
    const content = {
      postTitle: data.title,
      postContent: data.content,
      category,
      deleteFileUrl,
    };

    const formData = new FormData();

    formData.append(
      'content',
      new Blob([JSON.stringify(content)], { type: 'application/json' })
    );

    files.forEach((file) => formData.append('file', file));

    mutate(formData);
  };

  if (isSuccess) {
    toast.success('게시물 수정이 완료되었어요.');
    replace(categoryPath[category]);
  }

  if (isError) {
    toast.error('게시물 수정이 실패되었어요.');
  }

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
              <FormTitleLength control={control} />
            </div>
            <FormTitleLengthOver control={control} />
            {errors.title && (
              <FormErrorMessage>{`* ${errors.title.message}`}</FormErrorMessage>
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
              <FormErrorMessage>{`* ${errors.content.message}`}</FormErrorMessage>
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
                    accept={fileExtension}
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
                    accept={fileExtension}
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
              disabled={galleryEditDisabled}
            >
              완료
            </Button>
          </S.BtnWrap>
        </S.FormWrap>
      </S.WritePageWrap>
    </>
  );
}
