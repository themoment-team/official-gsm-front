import styled from '@emotion/styled';

interface ColorProps {
  date: string;
  dateCircle: string;
  wrapper: string;
}

export const NewsletterCardWrapper = styled.div<{ colors: ColorProps }>`
  display: flex;
  padding: 2rem;
  gap: 2rem;
  width: 24.8125rem;
  height: 11.25rem;
  background: ${({ colors }) => colors.wrapper};
  border-radius: 1.25rem;
  cursor: pointer;
`;

export const DateWrapper = styled.div`
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DateCircle = styled.div<{ colors: ColorProps }>`
  width: 3.75rem;
  height: 3.75rem;
  background: ${({ colors }) => colors.dateCircle};
  opacity: 0.8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DateText = styled.h1<{ colors: ColorProps }>`
  text-align: center;
  font-weight: 600;
  font-size: ${({ theme: { typo } }) => typo.title.fontSize};
  line-height: ${({ theme: { typo } }) => typo.title.lineHeight};
  color: ${({ colors }) => colors.date};
`;

export const YearMonth = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: ${({ theme: { typo } }) => typo.body2.fontSize};
  line-height: ${({ theme: { typo } }) => typo.body2.fontSize};
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
  font-size: ${({ theme: { typo } }) => typo.h4.fontSize};
  line-height: ${({ theme: { typo } }) => typo.h4.fontSize};
  color: ${({ theme: { color } }) => color.gray['090']};
`;

export const Preview = styled.h4`
  font-weight: 400;
  font-size: ${({ theme: { typo } }) => typo.body1.fontSize};
  line-height: ${({ theme: { typo } }) => typo.body1.fontSize};
  color: ${({ theme: { color } }) => color.gray['080']};
`;
