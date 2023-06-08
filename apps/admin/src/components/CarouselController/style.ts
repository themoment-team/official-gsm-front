import styled from '@emotion/styled';

export const CarouselWrapper = styled.div`
  width: 40.6256rem;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  margin-right: 1.5rem;
`;

export const IMGOuterWrapper = styled.div`
  position: relative;
`;

export const IMGContainer = styled.div`
  position: absolute;
`;

export const MoveContainer = styled.div`
  display: flex;
  position: relative;
`;

export const IMGWrapper = styled.div`
  border-radius: 0.625rem;
  z-index: -1;
  opacity: 0;

  overflow: hidden;
  position: relative;
  img {
    object-fit: cover;
  }
`;

export const CarouselBar = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5625rem 0;
  justify-content: center;
`;

export const DotWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2.3125rem;
`;

export const Dot = styled.div`
  width: 0.3125rem;
  height: 0.3125rem;
  background: #9e9e9e;
  border-radius: 0.25rem;
  margin: 0 0.1875rem;

  transition: all 0.3s;
`;

export const CursorWrapper = styled.div`
  cursor: pointer;
`;
