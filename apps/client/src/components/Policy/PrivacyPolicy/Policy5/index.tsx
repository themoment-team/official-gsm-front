import { BulletItem } from 'client/components';
import * as S from 'client/components/Policy/PrivacyPolicy/style';

import Table1440 from './Table1440';
import Table900 from './Table900';
import * as T from './style';

interface Props {
  width: number;
}

const TableTitle = ['위탁하는 업무의 내용', '수탁 업체(명)', '위탁 항목'];

const TableContent = [
  '광주소프트웨어마이스터고등학교\n 홈페이지 유지관리',
  '이름,학년,반,번호\n※ 회원가입시 수집하는 항목',
  '더모먼트',
  '방과후 학교 프로그램운영',
  '이름,학년,반,번호,학생개인연락처,부 또는 모 성함 및 연락처\n※ 위탁시 제공하는 항목',
  '업체명: 더모먼트\n 주소: 광주광역시 광산구 상무대로 312\n전화번호: 062-374-9986',
];

const BulletItemTitle = [
  `위탁업무 수행 목적 외 개인정보의 처리 금지에 관한 사항`,
  `개인정보의 관리적·기술적 보호조치에 관한 사항`,
  `개인정보의 안전관리에 관한 사항`,
];

const Policy5 = ({ width }: Props) => (
  <S.PolicyContentBox>
    <S.PolicyTitle>제 5조 (개인정보의 처리 위탁에 관한 사항)</S.PolicyTitle>
    <S.SubTitle>
      <span>1.&nbsp;</span>
      광주소프트웨어마이스터고등학교는 개인정보의 처리 업무를 위탁하는 경우
      다음의 내용이 포함된 문서에 의하여 처리하고 있습니다.
    </S.SubTitle>
    <S.BulletItemWrap>
      {BulletItemTitle.map((item, index) => (
        <BulletItem key={index} isSmall={true}>
          {item}
        </BulletItem>
      ))}
      <S.MiniTitle>
        <span>-</span>
        위탁업무의 목적 및 범위, 재 위탁 제한에 관한 사항, 개인정보 안전성 확보
        조치에 관한 사항, 위탁업무와 관련하여 보유하고 있는 개인정보의
        관리현황점검 등 감독에 관한 사항, 수탁자가 준수하여야할 의무를 위반한
        경우의 손해배상책임에 관한 사항
      </S.MiniTitle>
    </S.BulletItemWrap>
    <S.TableWrap>
      {width > 1440 ? (
        <T.TableTitle>
          {TableTitle.map((title, index) => (
            <T.TableTitleContent key={index}>{title}</T.TableTitleContent>
          ))}
          <T.TableContent>
            {TableContent.map((i) => (
              <T.TableRowContent key={i}>{i}</T.TableRowContent>
            ))}
          </T.TableContent>
        </T.TableTitle>
      ) : width > 900 ? (
        <Table1440 />
      ) : (
        <Table900 />
      )}
    </S.TableWrap>
  </S.PolicyContentBox>
);

export default Policy5;
