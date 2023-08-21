import * as S from 'client/components/Policy/PrivacyPolicy/style';

const DateTitle = [
  '2016. 7. 20. ~ 2017. 2. 28.',
  '2016. 3. 01. ~ 2018. 2. 28.',
  '2016. 3. 01. ~ 2018. 4. 1.',
  '2016. 4. 02. ~ 2019. 3. 19.',
  '2016. 3. 20. ~ 2019. 12. 1.',
];

const Policy12 = () => (
  <S.PolicyContentBox>
    <S.PolicyTitle>제 12조 (개인정보 처리방침의 변경)</S.PolicyTitle>
    <S.SubTitle>
      본 개인정보처리방침은 시행일로부터 적용되며, 이전의 개인정보 처리방침은
      아래에서 확인할 수 있습니다.
    </S.SubTitle>
    <S.StartDateTitle>시행일자 : 2022. 09. 28.</S.StartDateTitle>
    <S.DateTitleWrap>
      {DateTitle.map((title, index) => (
        <S.DateTitle key={index}>
          {title} <span>개인정보처리방침 보기</span>
        </S.DateTitle>
      ))}
    </S.DateTitleWrap>
  </S.PolicyContentBox>
);

export default Policy12;
