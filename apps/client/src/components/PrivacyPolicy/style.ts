import styled from '@emotion/styled';

export const SectionWrap = styled.div`
  margin: 5rem 24.75rem 7.5rem 24.75rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.gray['090']};
  font-size: 2.125rem;
  font-weight: 600;
  line-height: 3.125rem;
  margin-bottom: 3.5rem;
  padding-left: 0.5rem;
`;

export const IntroTitle = styled.h2`
  color: ${({ theme }) => theme.color.gray['090']};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.25rem;
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

export const MiniTitle = styled(SubTitle)<{ isPadding?: boolean }>`
  color: ${({ theme }) => theme.color.gray['070']};
  display: flex;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-bottom: ${({ isPadding }) => isPadding && '0.5rem'};
  > span {
    padding-right: 0.5rem;
  }
`;

export const PolicyContentWrap = styled.div`
  width: 78.0625rem;
  height: 417.5rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-left: 0.5rem;
`;

export const ContentBoxTemplate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IntroContentBox = styled(ContentBoxTemplate)`
  gap: 0.5rem;
`;

export const PolicyContentBox = styled(ContentBoxTemplate)`
  gap: 0.25rem;
`;

export const BulletItemWrap = styled.div`
  padding-left: 1.25rem;

  > p {
    padding-left: 1.625rem;
  }

  div {
    padding-bottom: 0.5rem;
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
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    padding-left: 0.75rem;
  }
`;
