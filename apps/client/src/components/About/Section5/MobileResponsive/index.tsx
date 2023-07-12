import {
  MajorCard,
  SubTitle,
  AboutTitle,
  SectionTitle,
} from 'client/components';
import { majorArray } from 'client/components/About/Section5/majorArray';

import * as S from './style';

const MobileResponsive = () => (
  <S.ScrollSection>
    <S.TitleSection>
      <SectionTitle textAlign='left'>
        <AboutTitle pointColor='sky' right='27%'>
          창의 융합력을 갖춘 <br />
          글로벌 소프트웨어 학과 소개
        </AboutTitle>
        <SubTitle>체계적인 교육과정을 제공하는 소프트웨어 학과</SubTitle>
      </SectionTitle>
      <S.MajorWrap>
        <S.MajorContainer>
          {majorArray.map(({ major, name }) => (
            <div key={name}>
              <MajorCard major={major} />
            </div>
          ))}
        </S.MajorContainer>
      </S.MajorWrap>
    </S.TitleSection>
  </S.ScrollSection>
);

export default MobileResponsive;
