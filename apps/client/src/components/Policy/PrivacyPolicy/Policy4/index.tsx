import { BulletItem } from 'client/components';
import * as S from 'client/components/Policy/PrivacyPolicy/style';

const Policy4 = () => {
  const BulletItemContent: string[] = [
    '정보주체로부터 별도의 동의를 받는 경우',
    '법률에 특별한 규정이 있는 경우 있습니다.',
    '보주체 또는 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우',
    '통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서 특정 개인을 알아 볼 수 없는 형태로 개인정보를 제공하는 경우',
    '개인정보를 목적 외의 용도로 이용하거나 이를 제3자에게 제공하지 아니하면 다른 법률에서 정하는 소관 업무를 수행할 수 없는 경우로서 보호위원회의 심의·의결을 거친 경우',
    '조약, 그 밖의 국제협정의 이행을 위하여 외국정보 또는 국제기구에 제공하기 위하여 필요한 경우',
    '범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우',
    '법원의 재판업무 수행을 위하여 필요한 경우',
    '형 및 감호, 보호처분의 집행을 위하여 필요한 경우',
  ];

  return (
    <S.PolicyContentBox>
      <S.PolicyTitle>
        제 4조 (개인정보 자동 수집 장치의 설치,운영 및 거부에 관한 사항)
      </S.PolicyTitle>
      <S.SubTitle>
        <span>1.&nbsp;</span>
        광주소프트웨어마이스터고등학교는 원칙적으로 정보주체의 개인정보를
        수집·이용 목적으로 명시한 범위 내에서 처리하며, 다음의 경우를 제외하고는
        정보주체의 사전 동의 없이는 본래의 목적 범위를 초과하여 처리하거나
        제3자에게 제공하지 않습니다.
      </S.SubTitle>
      <S.BulletItemWrap>
        {BulletItemContent.map((i) => (
          <BulletItem key={i} isSmall={true}>
            {i}
          </BulletItem>
        ))}
      </S.BulletItemWrap>
    </S.PolicyContentBox>
  );
};

export default Policy4;
