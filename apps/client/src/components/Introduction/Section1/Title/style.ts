import styled from '@emotion/styled';

export const TitleWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 1.375rem;
  position: absolute;
  top: 15.1875rem;
  left: 50%;
  transform: translateX(-50%);
`;

const Title = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary.navy};
  position: relative;
  display: flex;
  gap: 0.625rem;
  align-items: flex-end;
`;

export const FirstTitle = styled(Title)`
  -webkit-text-stroke: 0.063rem ${({ theme }) => theme.color.primary.navy}; /* 웹킷 기반 브라우저 (Chrome, Safari) */
  color: transparent;
  font-family: initial;
  font-size: 3.8578rem;

  div {
    position: relative;
    bottom: 0.625rem;
  }
  position: relative;
  animation: leftFadeInOut 1.5s ease-in-out forwards;
  opacity: 0;
  @keyframes leftFadeInOut {
    0% {
      left: -6.25rem;
    }
    100% {
      opacity: 1;
      left: 0;
    }
  }
`;

export const SecondTitle = styled(Title)`
  text-align: right;
  font-size: 3.2975rem;
  justify-content: end;
  position: relative;
  animation: rightFadeInOut 1.5s ease-in-out forwards;
  animation-delay: 1s;
  opacity: 0;
  @keyframes rightFadeInOut {
    0% {
      right: -6.25rem;
    }
    100% {
      opacity: 1;
      right: 0;
    }
  }
`;

export const ThirdTitle = styled(Title)`
  font-size: 3.5019rem;
  position: relative;
  animation: leftFadeInOut 1.5s ease-in-out forwards;
  animation-delay: 2s;
  opacity: 0;
  @keyframes leftFadeInOut {
    0% {
      left: -6.25rem;
    }
    100% {
      opacity: 1;
      left: 0;
    }
  }
`;

export const Point = styled.div`
  width: 0.7063rem;
  height: 0.7063rem;
  border-radius: 100%;
  background: ${({ theme }) => theme.color.primary.lime};
`;

export const EnglishSchoolName = styled.p`
  color: ${({ theme }) => theme.color.primary.navy};
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  position: relative;
  animation: FadeInOut 1.5s ease-in-out forwards;
  animation-delay: 3s;
  opacity: 0;
  @keyframes FadeInOut {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
