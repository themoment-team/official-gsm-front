import styled from '@emotion/styled';

export const SectionWrap = styled.div`
  margin: 5rem 0 7.5rem 0;
`;

export const ContentWrap = styled.div`
  width: 1248px;
  margin: 0 auto;
  padding-left: 0.5rem;
`;

export const PolicyContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.gray['090']};
  ${({ theme }) => theme.typo.h2}
  font-weight: 600;
  margin-bottom: 3.5rem;
  padding-left: 0.5rem;
`;

export const IntroTitle = styled.h2`
  color: ${({ theme }) => theme.color.gray['090']};
  ${({ theme }) => theme.typo.h3}
  font-weight: 400;
`;

export const PolicyTitle = styled.h2`
  ${({ theme }) => theme.typo.h3}
  color: ${({ theme }) => theme.color.gray['090']};
  font-weight: 600;
  padding-bottom: 4px;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.color.gray['070']};
  ${({ theme }) => theme.typo.h4}
  display: flex;
  font-weight: 400;
  span {
    display: block;
  }
`;

export const MiniTitle = styled(SubTitle)<{ isPadding?: boolean }>`
  color: ${({ theme }) => theme.color.gray['070']};
  ${({ theme }) => theme.typo.body1}
  display: flex;
  padding-bottom: ${({ isPadding }) => isPadding && '2px'};
  > span {
    padding-right: 0.5rem;
  }
`;

export const ContentBoxTemplate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IntroContentBox = styled(ContentBoxTemplate)`
  gap: 0.5rem;
`;

export const PolicyContentBox = styled(ContentBoxTemplate)`
  gap: 4px;
`;

export const BulletItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding-top: 8px;
  padding-left: 20px;

  > p {
    padding-left: 1.625rem;
  }
`;

export const StartDateTitle = styled.p`
  color: ${({ theme }) => theme.color.gray['070']};
  ${({ theme }) => theme.typo.h4}
  font-weight: 600;
  padding: 0.5rem 0 0.25rem 0;
`;

export const DateTitle = styled(StartDateTitle)`
  font-weight: 400;
  padding: 0;
  > span {
    color: ${({ theme }) => theme.color.gray['060']};
    ${({ theme }) => theme.typo.body1}
    font-weight: 600;
    padding-left: 0.75rem;
  }
`;

export const DateTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
