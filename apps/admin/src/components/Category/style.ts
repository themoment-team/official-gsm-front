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
`;

export const Path = styled.div<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#a4a4a4")};
`;
