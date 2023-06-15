import styled from '@emotion/styled';

export const ExampleDiv = styled.div`
  display: flex;
  &:nth-child(odd) {
    .newsletterCardWrapper {
      background: rgba(122, 205, 244, 0.1);
    }
    .dateCircle {
      background-color: ${({ theme: { color } }) => color.primary.sky};
    }
    h1 {
      color: ${({ theme: { color } }) => color.sub.blue};
    }
  }

  &:nth-child(even) {
    background: rgba(178, 228, 73, 0.1);
    div div {
      background-color: ${({ theme: { color } }) => color.primary.lime};
    }
    h1 {
      color: #73962b;
    }
  }
`;

export const NewsletterCardWrapper = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;
  width: 24.8125rem;
  height: 11.25rem;
  border-radius: 1.25rem;
  cursor: pointer;
`;

export const DateWrapper = styled.div`
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DateCircle = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  opacity: 0.8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DateText = styled.h1`
  text-align: center;
  font-weight: 600;
  ${({ theme: { typo } }) => typo.title};
`;

export const YearMonth = styled.p`
  text-align: center;
  font-weight: 400;
  ${({ theme: { typo } }) => typo.body2};
  color: ${({ theme: { color } }) => color.sub.blue};
`;

export const TextWrapper = styled.div`
  height: 7.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h4`
  font-weight: 600;
  ${({ theme: { typo } }) => typo.h4}
  color: ${({ theme: { color } }) => color.gray['090']};
`;

export const Preview = styled.h4`
  font-weight: 400;
  ${({ theme: { typo } }) => typo.body1}
  color: ${({ theme: { color } }) => color.gray['080']};
`;
