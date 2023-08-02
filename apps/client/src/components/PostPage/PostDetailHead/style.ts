import styled from '@emotion/styled';

export const DetailWrapper = styled.div`
  width: 50rem;

  @media ${({ theme }) => theme.breakPoint[1024]} {
    width: calc(100vw - 7.5rem);
  }
`;

export const CategoryText = styled.p`
  ${({ theme }) => theme.typo.body1}
  color: ${({ theme }) => theme.color.primary.navy};
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.title}
  color: ${({ theme }) => theme.color.black};
  width: 50rem;
  font-weight: 600;
  margin-bottom: 0.75rem;

  @media ${({ theme }) => theme.breakPoint[1024]} {
    width: calc(100vw - 7.5rem);
  }
`;
