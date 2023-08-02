import styled from '@emotion/styled';

export const PostListHeader = styled.header`
  width: 67.5rem;
  height: 2.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryTitle = styled.h1`
  ${({ theme }) => theme.typo.h4};
  font-weight: 700;
  color: #050505;
`;
