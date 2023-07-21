import styled from '@emotion/styled';

export const CommonDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  white-space: pre-wrap;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.h2};
  font-weight: 700;
  width: 40.625rem;
  color: #050505;
  word-break: break-all;
`;

export const Horizon = styled.div`
  width: 40.625rem;
  height: 0.0625rem;
  background: ${({ theme }) => theme.color.gray['040']};
  margin: 1rem 0;
`;

export const Content = styled.p`
  width: 40.625rem;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.color.gray['090']};
  word-break: break-all;
`;

export const FileTitle = styled.h2`
  ${({ theme }) => theme.typo.body2};
  font-weight: 600;
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

export const DeleteModal = styled.dialog`
  border-radius: 0.625rem;
  border: 0;
  ::backdrop {
    background: rgba(5, 5, 5, 0.4);
  }
`;
