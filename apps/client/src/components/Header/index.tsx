import Link from 'next/link';

import { css, useTheme } from '@emotion/react';

import { GSMLogo } from 'client/assets';

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
  const theme = useTheme();

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
            <GSMLogo isBackgroundWhite={isBackgroundWhite} />
          </S.LogoLink>
        </h1>
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
      </S.HeaderInner>
    </S.Header>
  );
};

export default Header;
