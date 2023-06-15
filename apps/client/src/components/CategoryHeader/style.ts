import styled from '@emotion/styled';

export const CategoryHeaderWrapper = styled.div`
  width: 1240px;
  height: 41px;
  display: flex;
  justify-content: space-between;
`;

export const SeeMoreWrapper = styled.div`
  width: 72px;
  display: flex;
  align-items: center;
`;

export const SeeMoreText = styled.h5`
  font-weight: 400;
  ${({ theme: { typo } }) => typo.h5}
  color: ${({ theme: { color } }) => color.gray['070']};
`;
