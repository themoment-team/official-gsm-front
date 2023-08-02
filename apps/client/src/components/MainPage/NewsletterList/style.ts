import styled from '@emotion/styled';

export const MainpageNewsletterList = styled.div`
  margin-top: 3.75rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;
`;

export const NewsletterList = styled.div`
  display: flex;
  gap: 1.5rem;

  & > a:nth-of-type(odd) {
    background: rgba(122, 205, 244, 0.1);
    .dateCircle {
      background-color: ${({ theme: { color } }) => color.primary.sky};
      color: ${({ theme: { color } }) => color.sub.blue};
    }
  }

  & > a:nth-of-type(even) {
    background: rgba(178, 228, 73, 0.1);
    .dateCircle {
      background-color: ${({ theme: { color } }) => color.primary.lime};
      color: #73962b;
    }
  }

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
    justify-content: space-between;
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: calc(100vw - 7.5rem);
    flex-direction: column;
    align-items: center;
  }
`;
