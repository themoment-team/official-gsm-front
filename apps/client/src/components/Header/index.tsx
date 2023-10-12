/** @jsxImportSource @emotion/react */

'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { css, useTheme } from '@emotion/react';

import { HamburgerIcon, HeaderGSMLogo } from 'client/assets';
import { HamburgerMenu } from 'client/components';
import { useScrollToTop } from 'client/hooks';
import { useGetWindowWidth } from 'client/hooks';

import * as S from './style';

type SegmentType = '' | 'about' | 'list';

interface HeaderProps {
  segment: SegmentType;
  isAbovePromotionVideo?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  segment,
  isAbovePromotionVideo = false,
}) => {
  useScrollToTop();

  const [isHamburgerMenuShow, setIsHamburgerMenuShow] =
    useState<boolean>(false);

  const theme = useTheme();

  const windowWidth = useGetWindowWidth();

  const isMobile = windowWidth <= 600;

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
        isAbovePromotionVideo &&
        css`
          background: inherit;
        `
      }
    >
      <S.HeaderInner>
        <h1>
          <S.LogoLink href='/' aria-label='logo'>
            <HeaderGSMLogo isAbovePromotionVideo={isAbovePromotionVideo} />
          </S.LogoLink>
        </h1>
        {isMobile ? (
          <S.HamburgerButton onClick={() => setIsHamburgerMenuShow(true)}>
            <HamburgerIcon isAbovePromotionVideo={isAbovePromotionVideo} />
          </S.HamburgerButton>
        ) : (
          <S.GlobalNav
            css={
              isAbovePromotionVideo &&
              css`
                color: ${theme.color.white};
              `
            }
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
            <a href='https://hellogsm.kr'>입학 접수</a>
            <a
              href='http://gsm.gen.hs.kr/sub/page.php?page_code=entrance_01'
              target='_blank'
              rel='noreferrer noopener'
            >
              입학 안내
            </a>
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
