import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const ImageWrapper = styled.div`
  width: 50rem;
  height: 30.375rem;
  overflow: hidden;
  position: relative;
  img {
    object-fit: cover;
  }
`;

export const ContentText = styled.p`
  ${({ theme }) => theme.typo.body1}
  color: ${({ theme }) => theme.color.gray['090']};
  font-weight: 400;
  width: 50rem;
  word-break: break-all;
  white-space: pre-wrap;
`;
