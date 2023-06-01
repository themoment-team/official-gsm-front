import styled from "@emotion/styled";

export const Category = styled.div<{ width?: string }>`
  width: ${({ width }) => (width ? width : "67.5rem[")};
  height: 4.25rem;
  display: flex;
  align-items: center;
  padding-left: 2.5rem;
  border-radius: ${({ width }) =>
    width === "36.125rem"
      ? "0.625rem"
      : "1.25rem"}; //게시글 작성페이지에서는 border-radius가 10px입니다.
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
