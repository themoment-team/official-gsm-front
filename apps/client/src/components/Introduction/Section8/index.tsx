import { IntroductionTitle, SectionTitle, SubTitle } from 'client/components';
import { Slide } from 'client/components';

import * as S from './style';
const Section8 = () => (
  <S.Layout>
    <S.SectionWrap>
      <SectionTitle>
        <IntroductionTitle pointColor='lime'>
          GSM과 함께하는 MOU 기업
        </IntroductionTitle>
        <SubTitle>꿈˙끼˙업(UP)˙고(GO)</SubTitle>
      </SectionTitle>
    </S.SectionWrap>
    <S.Container>
      <Slide />
    </S.Container>
  </S.Layout>
);

export default Section8;
