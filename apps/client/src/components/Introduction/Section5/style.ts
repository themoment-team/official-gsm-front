import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100vw;
  display: flex;
  gap: 6.25rem;
  height: 71.125rem;
  background: #f5f9fb;
  align-items: center;
  justify-content: center;
`;

export const MajorSection = styled.div`
  height: 48.625rem;
`;

export const MajorSelect = styled.div`
  margin-top: 3.375rem;
  display: flex;
  gap: 0.75rem;
  width: 24.5rem;
  height: 11rem;

  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.8125rem;
`;

export const DotContainer = styled.div`
  position: relative;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`;

export const Line = styled.div`
  position: absolute;
  width: 0rem;
  height: 100%;
  border: 0.125rem solid #cdd5e2;
  top: 0rem;
  left: 50%;
  margin: 0;
  z-index: -1;
  transform: translateX(-50%);
`;

export const SelectDot = styled.div`
  width: 2rem;
  height: 2rem;
  background: #ffffff;
  border: 0.5rem solid #003365;
  border-radius: 50%;
  cursor: pointer;
`;

export const Major = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    cursor: pointer;
  }
`;
