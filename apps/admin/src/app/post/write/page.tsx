'use client';

import { Input, TextArea, Category } from 'admin/components';
import { PlusIcon } from 'admin/assets';
import * as S from './style';

export default function WritePage() {
  return (
    <S.WritePageWrap>
      <S.WriteTitle>게시물 생성</S.WriteTitle>
      <S.FormWrap>
        <div>
          <S.FormItemTitle>카테고리</S.FormItemTitle>
          <Category width='36.125rem' />
        </div>
        <div>
          <S.FormItemTitle>제목</S.FormItemTitle>
          <Input
            placeholder='제목을 입력해주세요.'
            width='36.125rem'
            height='2.75rem'
          />
        </div>
        <div>
          <S.FormItemTitle>내용</S.FormItemTitle>
          <TextArea
            placeholder='내용을 입력해주세요.'
            width='36.125rem'
            height='6.75rem'
          />
        </div>
        <div>
          <S.FormItemTitle>첨부 파일</S.FormItemTitle>
          <S.UploadBox>
            <S.UploadTitle>여러개 업로드 하실 수 있습니다.</S.UploadTitle>
            <S.UploadBtn>
              <PlusIcon />
              <S.UploadBtnTitle>배너 사진 업로드</S.UploadBtnTitle>
            </S.UploadBtn>
          </S.UploadBox>
        </div>
        <S.BtnWrap>
          <S.CancelBtn>취소</S.CancelBtn>
          <S.CompleteBtn>완료</S.CompleteBtn>
        </S.BtnWrap>
      </S.FormWrap>
    </S.WritePageWrap>
  );
}
