import styled from '@emotion/styled';

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
