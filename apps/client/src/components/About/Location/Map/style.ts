import styled from '@emotion/styled';

export const CustomOverlay = styled.div`
  position: absolute;
  bottom: 5rem;
  right: -11.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Default = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  background: ${({ theme }) => theme.color.white};
  border-radius: 3.125rem;
  width: 22.4375rem;
  height: 3.5rem;
  align-items: center;
  justify-content: space-around;
`;

export const ContentBox = styled.div`
  width: 13rem;
  height: 5.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #424242;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 1rem solid ${({ theme }) => theme.color.white};
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  margin: 0 auto;
`;

export const Title = styled.div`
  color: #424242;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
`;

export const MarkerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: #7acdf4;
  border-radius: 100%;
`;

export const Chevron = styled.div`
  cursor: pointer;
`;

export const Next = styled.div`
  width: 21.375rem;
  height: 12.5rem;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Triangle2 = styled.div`
  position: relative;
  top: 0.9375rem;
  width: 0;
  height: 0;
  border-top: 1rem solid ${({ theme }) => theme.color.white};
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
`;

export const Box = styled.div`
  padding: 1rem;
  width: 21.375rem;
  height: 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Close = styled.div`
  display: flex;
  position: absolute;
  right: 0.8125rem;
`;

export const IconBox = styled.div`
  width: 4.5rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const LocationBtn = styled.div`
  display: flex;
  width: 5.3125rem;
  height: 2.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.color.primary.navy};
  border-radius: 0.5rem;
  color: var(--white, #fff);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background: rgba(0, 51, 101, 0.12);
`;

export const Address = styled.div`
  font-size: 0.875rem;
`;

export const Number = styled.div`
  color: ${({ theme }) => theme.color.sub.blue};
`;

export const BottomBox = styled.div`
  position: relative;
  bottom: 0;
  height: 2.25rem;
  display: flex;
  justify-content: space-between;
`;
