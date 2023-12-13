import styled from '@emotion/styled';

export const PopUpZoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const PopUpList = styled.div`
  display: grid;
  width: 887px;
  height: 458px;
  padding: 24px 24px 36px 24px;
  gap: 16px;

  grid-template-columns: repeat(3, 1fr);
`;
