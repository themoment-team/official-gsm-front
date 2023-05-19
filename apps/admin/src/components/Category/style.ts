import styled from "@emotion/styled";

export const Category = styled.div`
  height: 68px;
  width: 1080px;
  border-radius: 20px;
  background: rgba(5, 5, 5, 1);
  display: flex;
  align-items: center;
  padding-left: 40px;
`;

export const MenuWrap = styled.div`
  height: 20px;
  width: 285px;
  left: 40px;
  top: 24px;
`;
export const Menu = styled.button`
  width: 85px;
  height: 20px;
  padding-right: 24px;
  color: rgba(164, 164, 164, 1);
  :focus {
    color: rgba(255, 255, 255, 1);
  }
`;
export const Dot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 1);
`;
