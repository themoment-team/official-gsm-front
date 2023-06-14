import {
  IntroductionTitle,
  SectionTitle,
  SubTitle,
  EducationDirection,
} from 'client/components';
import type { EducationDirectionType } from 'client/types/introduce';

import * as I from 'assets';

import * as S from './style';

const EducationDirectionItem: EducationDirectionType[] = [
  {
    icon: <I.FutureIcon />,
    title: (
      <>
        미래를 여는 <br />
        체계적인 SW 교육
      </>
    ),
    subTitle: [
      '기초 기본교육에 충실한 자기주도적 학습력 신장',
      '산업수요 맞춤형 교육과정 운영',
    ],
  },
  {
    icon: <I.ImaginationIcon />,
    title: (
      <>
        상상력과 창의력이 <br /> 발현되는 학교
      </>
    ),
    subTitle: [
      '문화 감수성 프로그램 운영',
      '외국어 교육 강화 및 체험 교육 강화',
    ],
  },
  {
    icon: <I.DreamIcon />,
    title: (
      <>
        원하는대로 <br />
        꿈이 실현되는 학생
      </>
    ),
    subTitle: [
      '창의 융합력 사고 함양을 위한 인문학 교육',
      '학교참여문화 형성을 통한 토론 교육',
    ],
  },
];

const Section3 = () => (
  <S.Layout>
    <SectionTitle>
      <IntroductionTitle pointColor='sky' pointPosition='top'>
        학교가 추구하는 교육 방향
      </IntroductionTitle>
      <SubTitle>창의 융합력을 갖춘 글로벌 소프트웨어 마이스터 육성</SubTitle>
    </SectionTitle>
    <S.EducationDirectionLayout>
      {EducationDirectionItem.map((item, index) => (
        <EducationDirection key={index} {...item} />
      ))}
    </S.EducationDirectionLayout>
  </S.Layout>
);

export default Section3;
