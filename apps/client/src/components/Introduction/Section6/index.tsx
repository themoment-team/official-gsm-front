import { SubTitle, IntroductionTitle, SectionTitle } from 'client/components';

import * as S from './style';

const Section6 = () => (
  <S.Layout>
    <SectionTitle>
      <IntroductionTitle pointColor='lime'>
        꿈 끼 업(UP) 고(GO) 특색사업
      </IntroductionTitle>
      <SubTitle>꿈˙끼˙업(UP)˙고(GO)</SubTitle>
    </SectionTitle>
    <S.BusinessLayout>
      <S.Business>
        <S.ImgWrapper>img</S.ImgWrapper>
        <S.Title>마음의 확장</S.Title>
        <S.SubTitle>인성, 독서, 인문학 활동</S.SubTitle>
      </S.Business>

      <S.Business>
        <S.ImgWrapper>img</S.ImgWrapper>
        <S.Title>시야의 확장</S.Title>
        <S.SubTitle>국내외 IT 기업탐방 활동</S.SubTitle>
      </S.Business>
      <S.Business>
        <S.ImgWrapper>img</S.ImgWrapper>
        <S.Title>체력의 확장</S.Title>
        <S.SubTitle>뉴스포츠, 해양스포츠 활동</S.SubTitle>
      </S.Business>
    </S.BusinessLayout>
  </S.Layout>
);

export default Section6;
