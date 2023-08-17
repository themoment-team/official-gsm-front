import { BulletItem } from 'client/components';

import * as S from './style';

const Policy3 = () => (
  <S.PolicyContentBox>
    <S.PolicyTitle>
      제 3조 (개인정보 자동 수집 장치의 설치,운영 및 거부에 관한 사항)
    </S.PolicyTitle>
    <S.SubTitle>
      <span>1.&nbsp;</span>
      광주소프트웨어마이스터고등학교 홈페이지 이용자에게 서비스를 제공하기 위해
      이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
    </S.SubTitle>
    <S.SubTitle>
      <span>2.&nbsp;</span>
      쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터
      브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에
      저장되기도 합니다.
    </S.SubTitle>
    <S.BulletItemWrap>
      <BulletItem isSmall={true}>
        쿠키의 사용 목적 : 자주 찾는 서비스를 설정할 수 있도록 하여 이용자에게
        최적화된 정보 제공을 위해 사용됩니다.
      </BulletItem>
      <BulletItem isSmall={true}>
        쿠키의 설치·운영 및 거부 : 웹브라우저 상단의 도구 {'>'} 인터넷 옵션
        {'>'} 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부할 수 있습니다.
      </BulletItem>
      <BulletItem isSmall={true}>
        쿠키 저장을 거부할 경우 일부 서비스 이용에 어려움이 발생할 수 있습니다.
      </BulletItem>
    </S.BulletItemWrap>
  </S.PolicyContentBox>
);

export default Policy3;
