"use client";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Input, TextArea, Category } from "components";
import { PlusIcon } from "assets";

export default function WritePage() {
  const UploadTitleArr = ["배너 사진", "첨부 파일"];
  return (
    <div
      css={css`
        width: 36.125rem;
        margin: 0 auto;
      `}
    >
      <WriteTitle>게시물 생성</WriteTitle>
      <FormWrap>
        <div>
          <FormItemTitle>카테고리</FormItemTitle>
          <Category width="36.125rem" />
        </div>
        <div>
          <FormItemTitle>제목</FormItemTitle>
          <Input
            placeholder="제목을 입력해주세요."
            width="36.125rem"
            height="2.75rem"
          />
        </div>
        <div>
          <FormItemTitle>내용</FormItemTitle>
          <TextArea
            placeholder="내용을 입력해주세요."
            width="36.125rem"
            height="6.75rem"
          />
        </div>
        {UploadTitleArr.map((title, id) => {
          return (
            <div key={id}>
              <FormItemTitle>{title}</FormItemTitle>
              <UploadBox>
                <UploadTitle>여러개 업로드 하실 수 있습니다.</UploadTitle>
                <UploadBtn>
                  <PlusIcon />
                  <span
                    css={css`
                      padding-left: 0.375rem;
                    `}
                  >
                    배너 사진 업로드
                  </span>
                </UploadBtn>
              </UploadBox>
            </div>
          );
        })}
      </FormWrap>
      <BtnWrap>
        <CancelBtn>취소</CancelBtn>
        <CompleteBtn>완료</CompleteBtn>
      </BtnWrap>
    </div>
  );
}

const WriteTitle = styled.h3`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.6875rem;
  color: #212121;
  margin-bottom: 0.75rem;
`;

const FormWrap = styled.form`
  width: 100%;
  height: 54.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormItemTitle = styled.p`
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #9e9e9e;
  margin-bottom: 0.5rem;
`;

const UploadBox = styled.div`
  width: 100%;
  height: 12.3125rem;
  background: #eeeeee;
  border: 0.125rem dashed rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadTitle = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #9e9e9e;
  padding: 2.8125rem 0 1rem 0;
`;

const UploadBtn = styled.button`
  width: 7.6875rem;
  height: 2.125rem;
  background: #050505;
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: #ffffff;
  line-height: 1.125rem;
  font-weight: 600;
`;

const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 3.1875rem;
`;

const CancelBtn = styled.button`
  width: 13.0625rem;
  height: 3.0625rem;
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 1.5rem;
  border: 0.0625rem solid #e0e0e0;
  border-radius: 1.25rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CompleteBtn = styled.button`
  width: 22.5625rem;
  height: 3.0625rem;
  font-weight: 700;
  font-size: 0.9375rem;
  color: #ffffff;
  line-height: 1.5rem;
  background: #050505;
  border-radius: 1.25rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
`;
