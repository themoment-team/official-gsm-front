import styled from '@emotion/styled';

export const DetailWrapper = styled.div`
  display: flex;
  padding: 3.75rem;
  flex-direction: column;
  gap: 2.5rem;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.color.white};
`;

export const CategoryText = styled.p`
  font-weight: 600;
  ${({ theme }) => theme.typo.body1}
  color: ${({ theme }) => theme.color.primary.navy};
`;

export const Title = styled.h1`
  font-family: Pretendard;
  font-weight: 600;
  ${({ theme }) => theme.typo.title}
  color: ${({ theme }) => theme.color.black};
`;
