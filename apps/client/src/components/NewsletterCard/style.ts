import styled from '@emotion/styled';

export const NewsletterCardWrapper = styled.div`
  display: flex;
  padding: 32px;
  gap: 32px;
  width: 397px;
  height: 180px;
  background: rgba(122, 205, 244, 0.1);
  border-radius: 20px;
`;

export const DateWrapper = styled.div`
  height: 88px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DateCircle = styled.div`
  width: 60px;
  height: 60px;
  background: #7acdf4;
  opacity: 0.8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DateText = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 41px;
  text-align: center;
  color: #3c8aaf;
`;

export const YearMonth = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #3c8aaf;
`;

export const TextWrapper = styled.div`
  height: 116px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
  color: #212121;
`;

export const Preview = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #424242;
`;
