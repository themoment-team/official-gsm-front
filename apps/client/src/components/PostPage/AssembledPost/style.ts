import styled from '@emotion/styled';

export const BackGround = styled.div`
  background: ${({ theme }) => theme.color.background};
  padding: 5rem 0 7.5rem 0;
  display: flex;
  justify-content: center;
`;

export const PostPage = styled.div`
  width: 57.5rem;
  padding: 3.75rem;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2.5rem 0;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['050']};
  border-width: 0.0625rem 0;
  margin: 1.8125rem 0 2.5rem 0;
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
