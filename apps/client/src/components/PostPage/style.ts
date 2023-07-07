import styled from '@emotion/styled';

export const PostPage = styled.div`
  padding: 60px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.white};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Line = styled.div`
  width: 800px;
  height: 1px;
  background: ${({ theme }) => theme.color.gray['050']};
`;
