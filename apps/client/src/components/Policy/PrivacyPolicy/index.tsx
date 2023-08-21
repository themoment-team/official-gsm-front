'use client';

import { BulletItem } from 'client/components';
import { useGetWindowWidth } from 'client/hooks';

import Policy1 from './Policy1';
import Policy10 from './Policy10';
import Policy11 from './Policy11';
import Policy12 from './Policy12';
import Policy2 from './Policy2';
import Policy3 from './Policy3';
import Policy4 from './Policy4';
import Policy5 from './Policy5';
import Policy6 from './Policy6';
import Policy7 from './Policy7';
import Policy8 from './Policy8';
import Policy9 from './Policy9';
import * as S from './style';

const PrivacyPolicy = () => {
  const width = useGetWindowWidth();

  return (
    <S.SectionWrap>
      <S.ContentWrap>
        <S.Title>개인정보처리방침</S.Title>
        <S.PolicyContentWrap>
          <S.IntroContentBox>
            <S.IntroTitle>
              광주소프트웨어마이스터고등학교 홈페이지를 이용하시면서
            </S.IntroTitle>
            <BulletItem isDark={true} isSmall={true}>
              광주소프트웨어마이스터고등학교가 취급하는 모든 개인정보는
              개인정보보호법 등 관련 법령상의 개인정보보호 규정을 준수하여
              이용자의 개인정보보호 및 권익을 보호
              <br />
              하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록
              다음과 같은 처리방침을 두고 있습니다.{' '}
            </BulletItem>
            <BulletItem isDark={true} isSmall={true}>
              이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
              변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일
              전부터 공지사항을 통하여 고<br />
              지할 것입니다.
            </BulletItem>
          </S.IntroContentBox>
          <Policy1 />
          <Policy2 width={width} />
          <Policy3 />
          <Policy4 />
          <Policy5 width={width} />
          <Policy6 width={width} />
          <Policy7 />
          <Policy8 />
          <Policy9 />
          <Policy10 width={width} />
          <Policy11 width={width} />
          <Policy12 />
        </S.PolicyContentWrap>
      </S.ContentWrap>
    </S.SectionWrap>
  );
};

export default PrivacyPolicy;
