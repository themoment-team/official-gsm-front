import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImageWrapper = styled.div`
  width: 800px;
  height: 486px;
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
  width: 800px;
  word-break: break-all;
`;
