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

  & > div:nth-of-type(odd) {
    background: rgba(122, 205, 244, 0.1);
    .dateCircle {
      background-color: ${({ theme: { color } }) => color.primary.sky};
      color: ${({ theme: { color } }) => color.sub.blue};
    }
  }

  & > div:nth-of-type(even) {
    background: rgba(178, 228, 73, 0.1);
    .dateCircle {
      background-color: ${({ theme: { color } }) => color.primary.lime};
      color: #73962b;
    }
  }
`;
