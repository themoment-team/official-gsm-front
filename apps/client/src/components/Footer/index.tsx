'use client';

import Link from 'next/link';

import { FooterGSMLogo } from 'client/assets';
import { useGetWindowWidth } from 'client/hooks';

import * as S from './style';

const Footer = () => {
  const width = useGetWindowWidth();

  return (
    <S.Footer>
      <S.FooterContent>
        <FooterGSMLogo />
        <S.FooterTextWrapper>
          <S.SiteInfo>
            <S.Copyright>
              ©2023 Copyright 광주소프트웨어마이스터고등학교
              {width < 700 ? <br /> : ' '}
              ALL RIGHTS RESERVED.
            </S.Copyright>
            <S.LinkWrapper>
              <Link href='#'>개인정보처리방침</Link>
              <Link href='#'>영상정보처리기기운영·관리방침</Link>
              <Link href='/policy/copyright'>저작권신고 및 보호규정</Link>
              <Link href='/about/location'>찾아오시는 길</Link>
              <a href='https://admin.official.hellogsm.kr/'>관리자</a>
            </S.LinkWrapper>
          </S.SiteInfo>
          <S.SchoolInfo>
            우) 62423 광주광역시 광산구 상무대로 312
            <br />
            교무실 062)949-6800(08:30~16:30) 행정실 062)949-6806(08:30~16:30)
            <br />
            팩스 062)941-7545 당직실 062)949-6899(평일야간, 휴일)
          </S.SchoolInfo>
        </S.FooterTextWrapper>
      </S.FooterContent>
    </S.Footer>
  );
};

export default Footer;
