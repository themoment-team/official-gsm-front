import styled from "@emotion/styled";

export const Category = styled.div`
  width: 67.5rem;
  height: 4.25rem;
  display: flex;
  align-items: center;
  padding-left: 2.5rem;
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

export const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 5.3125rem;
`;

export const Path = styled.div<{ isActive?: boolean }>`
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#a4a4a4")};
`;
