import {
  IntroductionTitle,
  SubTitle,
  SectionTitle,
  CurriculumCards,
} from 'client/components';

import * as S from './style';

const Section4 = () => (
  <S.SectionWrapper>
    <S.SectionContentWrapper>
      <SectionTitle>
        <IntroductionTitle
          pointColor='lime'
          pointSize='1.125rem'
          pointPosition='top'
        >
          소프트웨어 인재 양성을 위한 교육 과정
        </IntroductionTitle>
        <SubTitle>스스로 삶의 힘을 키우고 상생의정신을 함양하는 학교</SubTitle>
      </SectionTitle>
      <CurriculumCards />
    </S.SectionContentWrapper>
  </S.SectionWrapper>
);

export default Section4;
