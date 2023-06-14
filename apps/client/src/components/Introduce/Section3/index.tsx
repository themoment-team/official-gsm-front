import { IntroductionTitle, SectionTitle, SubTitle } from 'client/components';

import * as S from './style';

const Section3 = () => (
  <S.Layout>
    <SectionTitle>
      <IntroductionTitle pointColor='sky' pointPosition='top'>
        학교가 추구하는 교육 방향
      </IntroductionTitle>
      <SubTitle>창의 융합력을 갖춘 글로벌 소프트웨어 마이스터 육성</SubTitle>
    </SectionTitle>
  </S.Layout>
);

export default Section3;
