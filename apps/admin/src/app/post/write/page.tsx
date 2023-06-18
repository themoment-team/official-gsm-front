'use client';

import { useRef, useState, useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Input,
  TextArea,
  Category,
  UploadButton,
  Header,
  FileCard,
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
  const [files, setFiles] = useState<File[]>([]);

  const handleCancel = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const {
    register,

    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  // const onSubmit: SubmitHandler<FormValues> = (data) => {
  //   // eslint-disable-next-line no-console

  //   const contents = {
  //     title: data.title,
  //     content: data.content,
  //     files: files,
  //     // 나중에 통신코드 작성
  //     // file:
  //   };
  //   console.log(contents);
  // };

  const postFile = () => {
    setFiles([...files, ...Array.from(fileInput.current?.files as FileList)]);
  };

  const fileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInput.current?.click();
  };

  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
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
      <Header hasNotification={false} name={'정문정'} />
      <S.WritePageWrap>
        <S.WriteTitle>게시물 생성</S.WriteTitle>
        <S.FormWrap /*onSubmit={handleSubmit(onSubmit)} */>
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
            {files[0] ? (
              <div>
                <S.FileTitleWrapper>
                  <S.FormItemTitle>첨부 파일</S.FormItemTitle>
                  <UploadButton onClick={handleClick} />
                  <input
                    type='file'
                    onChange={postFile}
                    ref={fileInput}
                    style={{ display: 'none' }}
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
                  <UploadButton onClick={handleClick} />
                  <input
                    type='file'
                    onChange={postFile}
                    ref={fileInput}
                    style={{ display: 'none' }}
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
