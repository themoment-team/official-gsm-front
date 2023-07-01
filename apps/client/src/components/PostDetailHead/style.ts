import styled from '@emotion/styled';

export const DetailWrapper = styled.div`
  width: 50rem;
  height: 11.6875rem;
  display: flex;
  padding: 3.75rem;
  flex-direction: column;
`;

export const CategoryText = styled.p`
  font-weight: 600;
  margin-bottom: 1rem;
  ${({ theme }) => theme.typo.body1}
  color: ${({ theme }) => theme.color.primary.navy};
`;

export const Title = styled.h1`
  width: 50rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  ${({ theme }) => theme.typo.title}
  color: ${({ theme }) => theme.color.black};
`;
