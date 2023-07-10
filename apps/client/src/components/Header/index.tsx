import { useEffect, useState } from 'react';

import Link from 'next/link';

import { css, useTheme } from '@emotion/react';

import { HamburgerIcon, HeaderGSMLogo } from 'client/assets';
import { HamburgerMenu } from 'client/components';
import { useGetWindowWidth } from 'client/hooks';

import * as S from './style';

type SegmentType = '' | 'about' | 'list';

interface HeaderProps {
  segment: SegmentType;
  isBackgroundWhite?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  segment,
  isBackgroundWhite = true,
}) => {
  const [isHamburgerMenuShow, setIsHamburgerMenuShow] =
    useState<boolean>(false);

  const theme = useTheme();
  const width = useGetWindowWidth();

  const isMobile = width <= 600;

  useEffect(() => {
    if (!isMobile) setIsHamburgerMenuShow(false);
  }, [isMobile]);

  const selectStyle = (href: SegmentType) =>
    segment === href &&
    css`
      font-weight: 700;
    `;

  return (
    <S.Header
      css={
        isBackgroundWhite &&
        css`
          background: ${theme.color.white};
        `
      }
    >
      <S.HeaderInner>
        <h1>
          <S.LogoLink href='/'>
            <HeaderGSMLogo isBackgroundWhite={isBackgroundWhite} />
          </S.LogoLink>
        </h1>
        {isMobile ? (
          <S.HamburgerButton onClick={() => setIsHamburgerMenuShow(true)}>
            <HamburgerIcon isBackgroundWhite={isBackgroundWhite} />
          </S.HamburgerButton>
        ) : (
          <S.GlobalNav
            css={css`
              color: ${isBackgroundWhite
                ? theme.color.gray['080']
                : theme.color.white};
            `}
          >
            <Link css={selectStyle('')} href='/'>
              홈
            </Link>
            <Link css={selectStyle('list')} href='/list/notice'>
              학교소식
            </Link>
            <Link css={selectStyle('about')} href='/about'>
              학교소개
            </Link>
            <a href='https://hellogsm.kr'>입학</a>
          </S.GlobalNav>
        )}
      </S.HeaderInner>
      {isMobile && (
        <HamburgerMenu
          isHamburgerMenuShow={isHamburgerMenuShow}
          closeHamburgerMenu={() => setIsHamburgerMenuShow(false)}
          segment={segment}
        />
      )}
    </S.Header>
  );
};

export default Header;
