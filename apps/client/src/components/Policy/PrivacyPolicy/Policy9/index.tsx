import { BulletItem } from 'client/components';

import * as S from './style';

const Policy9 = () => (
  <S.PolicyContentBox>
    <S.PolicyTitle>제 9조 (개인정보 안정성 확보조치)</S.PolicyTitle>
    <S.SubTitle>
      <span>1.&nbsp;</span>
      광주소프트웨어마이스터고등학교는 원칙적으로 개인정보 처리목적이 달성된
      개인정보는 지체 없이 파기합니다. 다만, 다른 법령에 따라 보존하여야 하는
      경우에는 그러하지 않을 수 있습니다. 파기의 절차, 기한 및 방법은 다음과
      같습니다.
    </S.SubTitle>
    <S.BulletItemWrap>
      <BulletItem isSmall={true}>
        개인정보 취급 직원의 최소화 및 교육 개인정보를 취급하는 직원은 반드시
        필요한 인원에 한하여 지정 관리하고 있으며, 취급직원을 대상으로 안전한
        관리를 위한 교육을 실시하고 있습니다.
      </BulletItem>
      <BulletItem isSmall={true}>
        개인정보에 대한 접근 제한 개인정보를 처리하는 개인정보처리시스템에 대한
        접근권한의 부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 위한
        필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단
        접근을 통제하고 있습니다.
      </BulletItem>
      <BulletItem isSmall={true}>
        접속기록의 보관 개인정보처리시스템에 접속한 기록을 최소 6개월 이상
        보관하고 있습니다.
      </BulletItem>
      <BulletItem isSmall={true}>
        개인정보의 암호화 개인정보는 암호화 등을 통해 안전하게 저장 및 관리되고
        있습니다. 또한 중요한 데이터는 저장 및 전송 시 암호화하여 사용하는 등의
        별도 보안기능을 사용하고 있습니다.
      </BulletItem>
      <BulletItem isSmall={true}>
        보안프로그램 설치 및 주기적 점검 갱신 해킹이나 컴퓨터 바이러스 등에 의한
        개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고, 주기적인
        갱신·점검하고 있습니다.
      </BulletItem>
      <BulletItem isSmall={true}>
        비인가자에 대한 출입 통제 개인정보를 보관하고 있는 개인정보처리시스템의
        물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고
        있습니다.
      </BulletItem>
    </S.BulletItemWrap>
  </S.PolicyContentBox>
);

export default Policy9;
