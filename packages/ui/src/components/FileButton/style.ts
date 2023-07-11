import styled from '@emotion/styled';

export const FileButton = styled.a`
  display: flex;
  width: fit-content;
  height: 2rem;
  align-items: center;
  padding: 0 0.9375rem;
  gap: 0.25rem;
  border-radius: 6.25rem;
  background-color: #f5f5f5;

  &:hover {
    p {
      text-decoration: underline;
    }
  }

  @media ${({ theme }) => theme.breakPoint[1024]} {
    max-width: calc(100vw - 7.5rem);
    overflow: hidden;
  }
`;

export const FileNameText = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #424242;
`;
