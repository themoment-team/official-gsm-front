import styled from '@emotion/styled';

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

  ${({ theme: { typo } }) => typo.title};
  text-align: center;
  font-weight: 600;
`;

export const YearMonth = styled.p`
  ${({ theme: { typo } }) => typo.body2};
  color: ${({ theme: { color } }) => color.sub.blue};
  text-align: center;
  font-weight: 400;
`;

export const TextWrapper = styled.div`
  height: 7.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const Title = styled.h4`
  ${({ theme: { typo } }) => typo.h4}
  color: ${({ theme: { color } }) => color.gray['090']};
  font-weight: 600;
`;

export const Preview = styled.h4`
  ${({ theme: { typo } }) => typo.body1}
  color: ${({ theme: { color } }) => color.gray['080']};
  font-weight: 400;
`;
