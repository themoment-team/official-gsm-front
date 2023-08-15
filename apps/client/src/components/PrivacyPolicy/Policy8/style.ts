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

export const BulletItemWrap = styled.div`
  padding-left: 1.25rem;

  > p {
    padding-left: 1.625rem;
  }

  div {
    padding-bottom: 0.5rem;
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
