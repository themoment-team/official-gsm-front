import styled from '@emotion/styled';

export const HamburgerBackground = styled.div<{
  isHamburgerMenuShow: boolean;
}>`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 0;
  display: ${({ isHamburgerMenuShow }) =>
    isHamburgerMenuShow ? 'block' : 'none'};
`;

export const HamburgerMenu = styled.div<{
  isHamburgerMenuShow: boolean;
}>`
  width: 28.75rem;
  height: 100vh;
  position: absolute;
  right: 0;
  background: ${({ theme }) => theme.color.white};
  z-index: 1;
  padding-top: 5rem;
  padding-left: 3.13rem;
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out;
  transform: ${({ isHamburgerMenuShow }) =>
    isHamburgerMenuShow && 'translateX(0)'};
`;

export const HamburgerNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  color: ${({ theme }) => theme.color.gray['050']};
  position: relative;
  z-index: 2;

  a {
    ${({ theme }) => theme.typo.h2};
    flex-grow: 0;
    font-weight: 700;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  z-index: 3;

  & > svg {
    display: block;
  }
`;
