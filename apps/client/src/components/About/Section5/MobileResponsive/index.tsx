import { MajorCard } from 'client/components';
import AboutTitle from 'client/components/Title/About';
import SectionTitle from 'client/components/Title/SectionTitle';
import SubTitle from 'client/components/Title/SubTitle';
import type { MajorType } from 'client/types';

import * as S from './style';

interface MajorArrayType {
  major: MajorType;
  name: string;
}

const majorArray: MajorArrayType[] = [
  { major: 'SW', name: '소프트웨어 개발과' },
  { major: 'IOT', name: '스마트 IOT(Internet of Things)' },
  { major: 'AI', name: '인공 지능(AI)과' },
];

const MobileResponsive = () => (
  <S.ScrollSection>
    <S.TitleSection>
      <SectionTitle textAlign='left'>
        <AboutTitle pointColor='sky'>
          창의 융합력을 갖춘 <br />
          글로벌 소프트웨어 학과 소개
        </AboutTitle>
        <SubTitle>체계적인 교육과정을 제공하는 소프트웨어 학과</SubTitle>
      </SectionTitle>
      <S.MajorContainer>
        {majorArray.map(({ major, name }) => (
          <div key={name}>
            <MajorCard major={major} />
          </div>
        ))}
      </S.MajorContainer>
    </S.TitleSection>
  </S.ScrollSection>
);

export default MobileResponsive;
