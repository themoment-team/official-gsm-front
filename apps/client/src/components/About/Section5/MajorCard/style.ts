import styled from '@emotion/styled';

export const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 39.375rem;
  height: 48.625rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 1.875rem;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    margin-left: 11.875rem;
  }

  @media (max-width: 800px) {
    width: 26.25rem;
    height: 100%;
    margin-left: 0;
    margin-right: 2.5rem;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 15.625rem;

  img {
    object-fit: cover;
    border-top-left-radius: 1.875rem;
    border-top-right-radius: 1.875rem;
  }
`;

export const ContentSection = styled.div`
  padding: 2rem 2rem 2.5rem;
  height: 80%;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.typo.h2};
  color: ${({ theme }) => theme.color.primary.navy};
  font-weight: 700;
  margin-bottom: 0.5rem;

  @media ${({ theme }) => theme.breakPoint['600']} {
    ${({ theme }) => theme.typo.h3};
  }
`;

export const Content = styled.div`
  ${({ theme }) => theme.typo.h4};
  color: ${({ theme }) => theme.color.gray['090']};
  margin-bottom: 1.25rem;

  @media ${({ theme }) => theme.breakPoint['1024']} {
    margin: 0;
  }
`;

export const HashTagSection = styled.div`
  display: flex;
  gap: 0.625rem;
  height: 2.5625rem;
`;

export const HashTag = styled.div`
  ${({ theme }) => theme.typo.h4};
  padding: 0.375rem 0.75rem;
  border-radius: 6.25rem;
  font-weight: 600;
`;

export const Line = styled.div`
  border: 0.0313rem solid #e7e7e7;
  margin: 2.5rem 0;
`;

export const KeywordSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Keyword = styled.div`
  ${({ theme }) => theme.typo.h5};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 10.625rem;
  height: 10.625rem;
  border-radius: 50%;
  font-weight: 600;
  color: ${({ theme }) => theme.color.primary.navy};
  background-color: ${({ theme }) => theme.color.white};
  border: 0.0625rem solid rgba(0, 51, 101, 0.6);
`;
