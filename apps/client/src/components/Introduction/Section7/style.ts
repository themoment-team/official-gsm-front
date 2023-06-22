import styled from '@emotion/styled';

export const Box = styled.div`
  height: 26.0625rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  left: 21.25rem;
  top: 11.25rem;
`;

export const Layout = styled.div`
  width: 100vw;
  height: 48.125rem;
  background-color: ${({ theme }) => theme.color.primary.navy};
`;

export const IconWrap = styled.div`
  width: 3.3125rem;
  display: flex;
  gap: 2.0625rem;
  margin: 0 0 0 auto;
  position: relative;
  right: 38.375rem;
  svg {
    cursor: pointer;
  }
`;

export const IdealTalentLayout = styled.div`
  display: flex;
  height: 21.125rem;
  overflow: hidden;
  align-items: center;
  position: relative;
  right: 1.875rem;
`;

export const UpperBox = styled.div`
  height: 30.125rem;
  width: 100vw;
  left: 0rem;
  top: 0rem;
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 0rem 0rem 0rem 12.5rem;
`;

export const Slide = styled.div`
  transition: transform 0.3s ease-in-out;
  width: 0rem;
  :nth-of-type(1) {
    color: ${({ theme }) => theme.color.primary.navy};
  }
  :nth-of-type(2) {
    color: ${({ theme }) => theme.color.primary.sky};
  }
  :nth-of-type(3) {
    color: ${({ theme }) => theme.color.primary.navy};
  }
  :nth-of-type(4) {
    color: ${({ theme }) => theme.color.primary.sky};
  }
`;

export const IdealTalent = styled.div`
  padding: 2rem 2.5rem;
  width: 27.8125rem;
  height: 13.625rem;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0rem 0.25rem 2.5rem rgba(0, 0, 0, 0.06);
  border-radius: 1.875rem;
  margin-left: 1.875rem;
`;
