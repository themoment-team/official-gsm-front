import styled from '@emotion/styled';

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IMGContainer = styled.div`
  transition: all 0.3s;
  position: absolute;
`;

export const MoveContainer = styled.div`
  display: flex;
  position: relative;
`;

export const IMGWrapper = styled.div`
  border-radius: 0.625rem;
  ${({ isCurrent }: { isCurrent?: boolean }) =>
    !isCurrent &&
    `
    display: none;
    `}

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

  ${({ isCurrent }: { isCurrent?: boolean }) =>
    isCurrent &&
    `
    width: 1rem;
    background: #B2E449;
    `}
`;

export const CursorWrapper = styled.div`
  cursor: pointer;
`;
