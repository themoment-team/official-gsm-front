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
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 2.5625rem;
  text-align: center;
  color: ${({ colors }) => colors.date};
`;

export const YearMonth = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  color: #3c8aaf;
`;

export const TextWrapper = styled.div`
  height: 7.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.8125rem;
  color: #212121;
`;

export const Preview = styled.h4`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #424242;
`;
