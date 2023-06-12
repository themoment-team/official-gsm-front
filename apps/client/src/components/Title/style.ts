import styled from '@emotion/styled';

export const TitleContainer = styled.div`
  position: relative;
  display: inline-block;

  .border {
    line-height: 4.625rem;
    -webkit-text-stroke: 0.063rem #003365; /* 웹킷 기반 브라우저 (Chrome, Safari) */
    text-stroke: 0.063rem #003365; /* 일반적인 사용법 */
    color: #ffffff;
    font-weight: 700;
    font-size: 3.75rem;
    line-height: 4.625rem;
  }

  .title {
    font-size: 1.75rem;
    line-height: 2.563rem;
    font-weight: 600;
  }

  .h1 {
    font-size: 3rem;
    line-height: 4.438rem;
    font-weight: 700;
  }
`;
