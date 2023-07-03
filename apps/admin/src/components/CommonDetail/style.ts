import styled from '@emotion/styled';

export const CommonDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  white-space: pre-wrap;
`;

export const Title = styled.h1`
  width: 40.625rem;
  font-weight: 700;
  font-size: 2.125rem;
  line-height: 3.125rem;
  color: #050505;
  word-break: break-all;
`;

export const Horizon = styled.div`
  width: 40.625rem;
  height: 0.0625rem;
  background: #eeeeee;
  margin: 1rem 0;
`;

export const Content = styled.p`
  width: 40.625rem;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #212121;
  word-break: break-all;
`;

export const FileTitle = styled.h2`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #050505;
  margin-bottom: 1rem;
`;

export const FileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
