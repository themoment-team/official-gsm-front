'use client';

import { useRef, useState, useEffect } from 'react';

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
} from 'admin/components';
import * as S from 'admin/styles/page/write';

import { usePostPostData } from 'api/admin';

import { Button } from 'ui';

export type CategoryType = 'NOTICE' | 'FAMILY_NEWSLETTER' | 'EVENT_GALLERY';

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

const categoryArray = [
  { id: 'NOTICE', label: '공지사항' },
  { id: 'FAMILY_NEWSLETTER', label: '가정통신문' },
  { id: 'EVENT_GALLERY', label: '행사 갤러리' },
] as const;

export default function WritePage() {
  const [category, setCategory] = useState<CategoryType>('NOTICE');
  const [files, setFiles] = useState<File[]>([]);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleCancel = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormType>({ resolver: zodResolver(schema) });

  const { mutate } = usePostPostData();

  const onSubmit: SubmitHandler<FormType> = (data) => {
    const content = {
      postTitle: data.title,
      postContent: data.content,
      category: category,
    };
    // eslint-disable-next-line no-console

    // const postData: PostDataType = {
    //   content,
    //   // file: files,
    // };

    const postFormData = new FormData();

    postFormData.append(
      'content',
      new Blob([JSON.stringify(content)], { type: 'application/json' })
    );

    // postFormData.append('content.postTitle', content.postTitle);
    // postFormData.append('content.postContent', content.postContent);
    // postFormData.append('content.category', content.category);

    mutate(postFormData);
  };

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

  const isActive = (id: CategoryType) => {
    if (id === category) return true;
  };

  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = '';
  };

  useEffect(() => {
    (() => {
      window.addEventListener('beforeunload', preventClose);
    })();

    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  return (
    <>
      <Header />
      <S.WritePageWrap>
        <S.WriteTitle>게시물 생성</S.WriteTitle>
        <S.FormWrap onSubmit={handleSubmit(onSubmit)}>
          <div>
            <S.FormItemTitle>카테고리</S.FormItemTitle>
            <S.Category>
              {categoryArray.map(({ id, label }) => (
                <S.CategoryLabel
                  onClick={() => setCategory(id)}
                  key={label}
                  css={css`
                    color: ${isActive(id) ? '#FFFFFF' : '#a4a4a4'};
                  `}
                >
                  ∙&nbsp;&nbsp;{label}
                </S.CategoryLabel>
              ))}
            </S.Category>
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
                  font-size: 12px;
                  line-height: 18px;
                  position: absolute;
                  right: 16px;
                `}
              >
                {watch('title')?.length ?? 0}/60
              </span>
            </div>
            {watch('title')?.length > 60 ? (
              <S.ErrorMessage>글자수를 초과하였습니다.</S.ErrorMessage>
            ) : (
              ''
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
            <S.CancelBtn>취소</S.CancelBtn>
            <Button width='22.5625rem' type='submit'>
              완료
            </Button>
          </S.BtnWrap>
        </S.FormWrap>
      </S.WritePageWrap>
    </>
  );
}
