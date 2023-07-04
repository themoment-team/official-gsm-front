import styled from '@emotion/styled';

export const PostCard = styled.button`
  ${({ theme }) => theme.typo.h5}
  width: 77.5rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['040']};
  background-color: ${({ theme }) => theme.color.white};
  transition: background-color 0.3s;
  :hover {
    background-color: ${({ theme }) => theme.color.gray['020']};
  }
`;

export const IndexAndTitle = styled.div`
  width: 46.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostIndex = styled.p`
  color: ${({ theme }) => theme.color.gray['070']};
`;

export const PostTitle = styled.p`
  width: 43rem;
  text-align: left;
  color: ${({ theme }) => theme.color.gray['090']};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
