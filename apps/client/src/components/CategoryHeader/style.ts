import styled from '@emotion/styled';

export const CategoryHeaderWrapper = styled.div`
  width: 77.5rem;
  height: 2.5625rem;
  display: flex;
  justify-content: space-between;
`;

export const SeeMoreWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SeeMoreText = styled.h5`
  ${({ theme: { typo } }) => typo.h5}
  color: ${({ theme: { color } }) => color.gray['070']};
  font-weight: 400;
`;

export const ChevronIconWrapper = styled.div`
  margin: 0 0.5625rem;
`;
