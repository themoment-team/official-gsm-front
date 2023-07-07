import styled from '@emotion/styled';

export const CircleWrapper = styled.div`
  position: absolute;
  width: 26rem;
  height: 26rem;
`;

const CircleTemplate = styled.div`
  position: absolute;
  filter: blur(5rem);
`;

export const GradationCircle1 = styled(CircleTemplate)`
  width: 13.9375rem;
  height: 13.9375rem;
  background: #fcffab;
  top: 0;
  left: 1.5625rem;
  z-index: -1;
`;

export const GradationCircle2 = styled(CircleTemplate)`
  width: 13.8125rem;
  height: 13.8125rem;
  background-color: #a8e3ff;
  top: 4.125rem;
  left: 13.75rem;
  z-index: -2;
`;

export const GradationCircle3 = styled(CircleTemplate)`
  width: 19.0625rem;
  height: 19.0625rem;
  background: rgba(107, 182, 255, 0.59);
  top: 7rem;
  left: 0;
  z-index: -3;
`;
