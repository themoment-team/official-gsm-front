import styled from '@emotion/styled';

export const Background = styled.div`
  position: absolute;
  bottom: -1.19rem;
  right: -4.13rem;
  width: 24.125rem;
  height: 40.6875rem;
  z-index: 0;
`;

export const Ball = styled.div`
  border-radius: 100%;
  position: absolute;
  filter: blur(6.25rem);
`;

export const Ball1 = styled(Ball)`
  width: 16.5rem;
  height: 16.5rem;
  background: rgba(107, 182, 255, 0.59);
  left: 6.94rem;
`;

export const Ball2 = styled(Ball)`
  width: 11.6875rem;
  height: 11.75rem;
  background: #fcffab;
  top: 12.88rem;
  left: 0;
`;

export const Ball3 = styled(Ball)`
  width: 17.875rem;
  height: 17.9375rem;
  background: #a8e3ff;
  filter: blur(7.8125rem);
  top: 22.75rem;
  left: 6.25rem;
`;
