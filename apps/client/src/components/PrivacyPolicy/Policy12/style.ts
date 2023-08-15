import styled from '@emotion/styled';

export const PolicyContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const PolicyTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.gray['090']};
  font-weight: 600;
  padding-bottom: 0.25rem;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.color.gray['070']};
  display: flex;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.8125rem;

  span {
    display: block;
  }
`;

export const StartDateTitle = styled.p`
  color: ${({ theme }) => theme.color.gray['070']};
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.8125rem;
  padding: 0.5rem 0 0.25rem 0;
`;

export const DateTitle = styled(StartDateTitle)`
  padding: 0;
  font-weight: 400;

  > span {
    color: ${({ theme }) => theme.color.gray['060']};
    ${({ theme }) => theme.typo.body1};
    font-weight: 600;
    padding-left: 0.75rem;
  }
`;
