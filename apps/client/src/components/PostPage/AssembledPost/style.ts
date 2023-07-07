import styled from '@emotion/styled';

export const PostPage = styled.div`
  width: 57.5rem;
  padding: 3.75rem;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.color.white};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const FileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Line = styled.div`
  width: 50rem;
  height: 0.0625rem;
  background: ${({ theme }) => theme.color.gray['050']};
`;
