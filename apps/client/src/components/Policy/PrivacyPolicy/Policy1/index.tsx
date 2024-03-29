import * as S from 'client/components/Policy/PrivacyPolicy/style';

const 개인정보의처리목적 = [
  `광주소프트웨어마이스터고등학교는 대국민 서비스 제공
  및 민원처리, 소관업무 수행 등의 목적으로 필요에 의한 최소한의 개인정보를
  수집하고 있습니다.`,
  `제1항에 대한 사항은 광주소프트웨어마이스터고등학교
  및 각 부서에서 운영하는 소관업무 홈페이지에 게재하여 정보주체가 확인할 수
  있도록 안내를 하고 있습니다.`,
];

const Policy1 = () => (
  <S.PolicyContentBox>
    <S.PolicyTitle>제 1조 (개인정보의 처리 목적)</S.PolicyTitle>
    {개인정보의처리목적.map((description, index) => (
      <S.SubTitle key={index}>
        <span>{index + 1}.&nbsp;</span> {description}
      </S.SubTitle>
    ))}
  </S.PolicyContentBox>
);

export default Policy1;
