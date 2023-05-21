import styled from "@emotion/styled";

export const Category = styled.div`
  height: 4.25rem;
  width: 67.5rem;
  display: flex;
  align-items: center;
  padding-left: 2.5rem;
  border-radius: 1.25rem;
  background: #050505;
`;

export const MenuWrap = styled.div`
  height: 1.25rem;
  width: 17.8125rem;
`;
export const Menu = styled.button`
  height: 1.25rem;
  width: 5.3125rem;
  padding-right: 1.5rem;
`;

export const Path = styled.div<{ isActive?: boolean }>`
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#a4a4a4")};
`;
