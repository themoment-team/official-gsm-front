import styled from '@emotion/styled';

export const PopUpZoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`;

export const PopUpList = styled.div`
  display: grid;
  width: 55.4375rem;
  height: 28.625rem;
  padding: 1.5rem 1.5rem 2.25rem 1.5rem;
  gap: 1rem;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  border-radius: 1.25rem;
  background : ${({ theme }) => theme.color.white};

  /* elevation_blue */
  box-shadow: 0rem 0.25rem 2.5rem 0rem ${({ theme }) => theme.elevation.blue};
`;
