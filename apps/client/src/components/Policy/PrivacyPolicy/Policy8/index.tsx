import { BulletItem } from 'client/components';
import * as S from 'client/components/Policy/PrivacyPolicy/style';

const Policy8 = () => (
  <S.PolicyContentBox>
    <S.PolicyTitle>제 8조 (개인정보 파기절차 및 방법)</S.PolicyTitle>
    <S.SubTitle>
      <span>1.&nbsp;</span>
      광주소프트웨어마이스터고등학교는 원칙적으로 개인정보 처리목적이 달성된
      개인정보는 지체 없이 파기합니다. 다만, 다른 법령에 따라 보존하여야 하는
      경우에는 그러하지 않을 수 있습니다. 파기의 절차, 기한 및 방법은 다음과
      같습니다.
    </S.SubTitle>
    <S.BulletItemWrap>
      <BulletItem isSmall={true}>파기절차</BulletItem>
      <S.MiniTitle>
        <span>-</span>
        불필요한 개인정보 및 개인정보파일은 개인정보책임자의 책임 하에 내부방침
        절차에 따라 다음과 같이 처리하고 있습니다.
      </S.MiniTitle>
      <S.MiniTitle>
        <span>-</span>
        개인정보의 파기
      </S.MiniTitle>
      <S.MiniTitle>
        <span>-</span>
        보유기간이 경과한 개인정보는 종료일로부터 지체없이 파기합니다.
      </S.MiniTitle>
      <S.MiniTitle isPadding={true}>
        <span>-</span>
        개인정보파일의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그
        개인정보파일이 불필요하게 되었을 때에는 개인정보의 처리가 불필요한
        것으로 인정되는 날로부터 지체 없이 그 개인정보파일을 파기합니다.
      </S.MiniTitle>
      <BulletItem isSmall={true}>파기방법</BulletItem>
      <S.MiniTitle>
        <span>-</span>
        전자적 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.
      </S.MiniTitle>
      <S.MiniTitle>
        <span>-</span>
        종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
      </S.MiniTitle>
    </S.BulletItemWrap>
  </S.PolicyContentBox>
);

export default Policy8;
