import styled from '@emotion/styled';

export const FileCardWrap = styled.div`
  width: 36.25rem;
  height: 2.5rem;
  background: #f5f5f5;
  border-radius: 0.625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-left: 1rem;
  padding-right: 0.75rem;
`;

export const FileNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Filename = styled.h3`
  color: #9e9e9e;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
`;

export const CancelButton = styled.button`
  height: 1rem;
`;
