import styled from '@emotion/styled';

export const NoiceBannerWrapper = styled.div`
  width: 77.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const SlideContainer = styled.div`
  display: flex;
  position: relative;
  transition: ease-in-out 0.7s;
  gap: 100vw;
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Dots = styled.div`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  top: 12.4375rem;
`;

export const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transition: ease-in-out 0.7s;
  cursor: pointer;
`;
