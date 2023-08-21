import { BulletItem } from 'client/components';
import * as S from 'client/components/Policy/PrivacyPolicy/style';

import Table900 from './Table900';
import * as T from './style';

interface Props {
  width: number;
}

const Policy6: React.FC<Props> = ({ width }) => {
  const TableTitle = ['열람 요구 접수 처리부서명', '개인정보파일명', '문의처'];

  const TableContent = [
    '행정실/각 학년부',
    '학교생활기록부',
    '행정실062-949-6806\n1학년 062-949-6813\n2학년 062-949-6821\n3학년 062-949-6834',
    '보건실',
    '학생건강기록부',
    '062-949-6820',
    '각 학년부',
    '학부모서비스 이용자 명단',
    '1학년 062-949-6813\n2학년 062-949-6821\n3학년 062-949-6834',
    '인문정보부',
    '홈페이지 회원정보',
    '062-949-6850',
    '행정실',
    '민원사무처리부',
    '062-949-6806',
    '행정실',
    '학교운영위원회 명부',
    '062-949-6804',
    '행정실',
    '스쿨뱅킹(CMS) 정보',
    '062-949-6806',
    '행정실',
    '발전기금 기탁자 명부',
    '062-949-6808',
  ];

  return (
    <S.PolicyContentBox>
      <S.PolicyTitle>
        제 6조 (정보추제의 권리, 의무 및 그 행사방법에 관한 사항)
      </S.PolicyTitle>
      <S.SubTitle>
        <span>1.&nbsp;</span>
        광주소프트웨어마이스터고등학교는 개인정보의 처리 업무를 위탁하는 경우
        다음의 내용이 포함된 문서에 의하여 처리하고 있습니다.
      </S.SubTitle>
      <S.BulletItemWrap>
        <BulletItem isSmall={true}>개인정보 열람요구</BulletItem>
        <BulletItem isSmall={true}>오류 등이 있을 경우 정정 요구</BulletItem>
        <BulletItem isSmall={true}>삭제요구</BulletItem>
        <BulletItem isSmall={true}>처리정지 요구</BulletItem>
      </S.BulletItemWrap>
      <S.SubTitle>
        <span>2.&nbsp;</span>
        제1항에 따른 권리 행사는 개인정보보호법 시행규칙 별지 제8호 서식에 따라
        작성 후 서면 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, 기관은
        이에 대해 지체 없이 조치하겠습니다.
      </S.SubTitle>
      <S.SubTitle>
        <span>3.&nbsp;</span>
        정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는
        정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지
        않겠습니다.
      </S.SubTitle>
      <S.SubTitle>
        <span>4.&nbsp;</span>
        제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등
        대리인을 통하여 하실 수 있습니다. 이 경우 개인정보보호법 시행규칙 별제
        제11호 서식에 따른 위임장을 제출하셔야 합니다.
      </S.SubTitle>
      <S.SubTitle>
        <span>5.&nbsp;</span>
        개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제5항, 제37조
        제2항에 의하여 정보주체의 권리를 제한 할 수 있습니다.
      </S.SubTitle>
      <S.SubTitle>
        <span>6.&nbsp;</span>
        개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로
        명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
      </S.SubTitle>
      <S.SubTitle>
        <span>7.&nbsp;</span>
        정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시
        열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
      </S.SubTitle>
      <S.SubTitle>
        <span>8.&nbsp;</span>
        광주소프트웨어마이스터고등학교에서 보유중인 개인정보파일의 열람,
        정정ㆍ삭제, 처리정지 요구 등을 접수ㆍ처리하는 해당 부서는 다음과
        같습니다.
      </S.SubTitle>
      <S.TableWrap>
        {width > 900 && (
          <T.TableTitle>
            {TableTitle.map((title, index) => (
              <T.TableTitleContent key={index}>{title}</T.TableTitleContent>
            ))}
            <T.TableContent>
              {TableContent.map((content, index) => (
                <T.TableRowContent key={index}>{content}</T.TableRowContent>
              ))}
            </T.TableContent>
          </T.TableTitle>
        )}
        {width < 900 && <Table900 />}
      </S.TableWrap>
    </S.PolicyContentBox>
  );
};

export default Policy6;
