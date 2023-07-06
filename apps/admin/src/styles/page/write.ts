import styled from '@emotion/styled';

export const WritePageWrap = styled.div`
  width: 36.125rem;
  margin: 0 auto;
  margin-top: 4.75rem;
`;

export const WriteTitle = styled.h3`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.6875rem;
  color: #212121;
  margin-bottom: 1.5rem;
`;

export const FormWrap = styled.form`
  width: 100%;
  height: 54.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FormItemTitle = styled.p`
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #9e9e9e;
  margin-bottom: 0.5rem;
`;

export const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

export const CancelBtn = styled.button`
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

export const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  color: #f93535;
`;
