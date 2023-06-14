'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Input,
  TextArea,
  Category,
  UploadButton,
  Header,
} from 'admin/components';
import * as S from 'admin/styles/page/write';

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

type FormValues = z.infer<typeof schema>;

export default function WritePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.info(data);
  };

  return (
    <>
      <Header hasNotification={false} name={'정문정'} />
      <S.WritePageWrap>
        <S.WriteTitle>게시물 생성</S.WriteTitle>
        <S.FormWrap onSubmit={handleSubmit(onSubmit)}>
          <div>
            <S.FormItemTitle>카테고리</S.FormItemTitle>
            <Category width='36.125rem' category='notice' />
          </div>
          <div>
            <S.FormItemTitle>제목</S.FormItemTitle>
            <Input
              placeholder='제목을 입력해주세요.'
              width='36.125rem'
              height='2.75rem'
              borderRadius='0.625rem'
              isError={errors.title ? true : false}
              {...register('title')}
            />
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
            <S.FormItemTitle>첨부 파일</S.FormItemTitle>
            <S.UploadBox>
              <S.UploadTitle>
                첫번째 등록하신 이미지는 썸네일 역할을 합니다.
              </S.UploadTitle>
              <UploadButton />
            </S.UploadBox>
          </div>
          <S.BtnWrap>
            <S.CancelBtn>취소</S.CancelBtn>
            <Button width='22.5625rem'>완료</Button>
          </S.BtnWrap>
        </S.FormWrap>
      </S.WritePageWrap>
    </>
  );
}
