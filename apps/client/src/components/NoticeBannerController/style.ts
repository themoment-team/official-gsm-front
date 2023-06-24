import styled from '@emotion/styled';

export const NoiceBannerWrapper = styled.div`
  width: 1240px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const MoveContainer = styled.div`
  display: flex;
  position: relative;
  transition: ease-in-out 0.3s;
  gap: 100vw;
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Dots = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 199px;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transition: ease-in-out 0.3s;
  cursor: pointer;
`;
