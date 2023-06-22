import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100vw;
  display: flex;
  padding: 180px 340px;
  gap: 10px;
  height: 1138px;
  background: #f5f9fb;
`;

export const DepartmentSelect = styled.div`
  margin-top: 54px;
  display: flex;
  gap: 12px;
  width: 392px;
  height: 176px;

  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

export const DotContainer = styled.div`
  position: relative;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`;

export const Line = styled.div`
  position: absolute;
  width: 0px;
  height: 100%;
  border: 2px solid #cdd5e2;
  top: 0px;
  left: 50%;
  margin: 0;
  z-index: -1;
  transform: translateX(-50%);
`;

export const SelectDot = styled.div`
  width: 32px;
  height: 32px;

  background: #ffffff;
  border: 8px solid #003365;
  border-radius: 50%;
  cursor: pointer;
`;

export const SelectDotTest = styled.div`
  width: 32px;
  height: 32px;
  left: 340px;
  top: 495px;

  /* white */

  background: #ffffff;
  /* subGray */

  border: 4px solid #cdd5e2;
  border-radius: 50%;

  cursor: pointer;
`;

export const Department = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    cursor: pointer;
  }
`;

export const DepartmentCard = styled.div`
  width: 630px;
  height: 100%;
  background-color: red;

  /* white */

  /* background: #ffffff; */
  border-radius: 30px;
`;
