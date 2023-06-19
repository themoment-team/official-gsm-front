import styled from '@emotion/styled';

export const Section1Page = styled.div`
  width: 100%;
  height: 54.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Section1PageTitleWrap = styled.div`
  width: 30.0625rem;
  height: 26.0625rem;
  position: relative;

  margin-top: 10.125rem;
`;

export const SchoolTitle = styled.h1`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8125rem;
`;

export const CircleTemplate = styled.div`
  position: absolute;
  filter: blur(5rem);
  z-index: 0;
`;

export const Circle = styled(CircleTemplate)`
  left: 2.875rem;
  width: 13.9375rem;
  height: 13.9375rem;

  background: #fcffab;
`;

export const Circle2 = styled(CircleTemplate)`
  width: 13.8125rem;
  height: 13.8125rem;
  background-color: #a8e3ff;
  filter: blur(5rem);
  top: 4.125rem;
  left: 15.0625rem;
  z-index: -1;
`;

export const Circle3 = styled(CircleTemplate)`
  width: 19.0625rem;
  height: 19.0625rem;
  background-color: #6bb6ff96;
  filter: blur(5rem);
  top: 7rem;
  left: 1.3125rem;
  z-index: -1;
`;

export const IntroductionTitleWrap = styled.div`
  padding-top: 5.0625rem;
`;

export const ScrollContentsWrap = styled.div`
  width: 2.3125rem;
  height: 5.4375rem;
  margin-bottom: 2.6875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ScrollTitle = styled.div`
  color: #424242;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.1875rem;
`;
