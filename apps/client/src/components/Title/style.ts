import styled from '@emotion/styled';

export const TitleContainer = styled.div`
  position: relative;
  display: inline-block;

  .border {
    line-height: 74px;
    -webkit-text-stroke: 1px #003365; /* 웹킷 기반 브라우저 (Chrome, Safari) */
    text-stroke: 1px #003365; /* 일반적인 사용법 */
    color: white;
    font-weight: 700;
    font-size: 61.7254px;
    line-height: 74px;
  }

  .title {
    font-size: 28px;
    line-height: 41px;
    font-weight: 600;
  }

  .h1 {
    font-size: 48px;
    line-height: 71px;
    font-weight: 700;
  }
`;
