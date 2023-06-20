import Link from 'next/link';

import { css, useTheme } from '@emotion/react';

import { GSMColorLogo, GSMWhiteLogo } from 'client/assets';

import * as S from './style';

type SegmentType = '' | 'about';

interface HeaderProps {
  segment: SegmentType;
  isBackgroundWhite: boolean;
}

const Header: React.FC<HeaderProps> = ({ segment, isBackgroundWhite }) => {
  const theme = useTheme();

  const selectStyle = (href: SegmentType) =>
    segment === href &&
    css`
      font-weight: 700;
    `;

  return (
    <S.Header>
      <S.HeaderInner>
        <h1>
          <S.LogoLink href='/'>
            {isBackgroundWhite ? <GSMColorLogo /> : <GSMWhiteLogo />}
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
            학교소식
          </Link>
          <Link css={selectStyle('about')} href='/about'>
            학교소개
          </Link>
          <Link href='https://hellogsm.kr'>입학</Link>
        </S.GlobalNav>
      </S.HeaderInner>
    </S.Header>
  );
};

export default Header;
