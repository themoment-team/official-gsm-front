'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { css } from '@emotion/react';

import { zodResolver } from '@hookform/resolvers/zod';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Input,
  TextArea,
  Header,
  FormCategory,
  FileDrop,
} from 'admin/components';
import * as S from 'admin/styles/page/write';

import { usePostWritePost } from 'api/admin';
import type { PostCategoryType } from 'api/client';

import { Button } from 'ui';

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

interface WritePageProps {
  searchParams: {
    category: PostCategoryType;
  };
}

export default function WritePage({
  searchParams: { category },
}: WritePageProps) {
  const [files, setFiles] = useState<File[]>([]);

  const { replace, back } = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormType>({ resolver: zodResolver(schema) });

  const { mutate, isSuccess } = usePostWritePost();

  if (!category || !categoryQueryStrings.includes(category)) {
    replace('/post/write?category=NOTICE');
  }

  // useEffect(() => {
  //   (() => {
  //     window.addEventListener('beforeunload', preventClose);
  //   })();

  //   return () => {
  //     window.removeEventListener('beforeunload', preventClose);
  //   };
  // }, []);

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
            <FileDrop file={files} setFiles={setFiles} />
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
