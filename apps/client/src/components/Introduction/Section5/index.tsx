import { useState } from 'react';

import { css } from '@emotion/react';

import {
  SectionTitle,
  IntroductionTitle,
  SubTitle,
  MajorCard,
} from 'client/components';

import * as S from './style';

type MajorType = 'SW' | 'IOT' | 'AI';

interface MajorArrayType {
  Major: MajorType;
  name: string;
}

const Section5 = () => {
  const MajorArray: MajorArrayType[] = [
    { Major: 'SW', name: '소프트웨어 개발과' },
    { Major: 'IOT', name: '스마트 IOT(Internet of Things)' },
    { Major: 'AI', name: '인공 지능(AI)과' },
  ];
  const [selectedMajor, setSelectedMajor] = useState<MajorType>('SW');
  return (
    <S.Layout>
      <div>
        <SectionTitle textAlign='left'>
          <IntroductionTitle pointColor='sky'>
            창의 융합력을 갖춘 <br />
            글로벌 소프트웨어 학과 소개
          </IntroductionTitle>
          <SubTitle>체계적인 교육과정을 제공하는 소프트웨어 학과</SubTitle>
        </SectionTitle>
        <S.MajorSelect>
          <S.DotContainer>
            {MajorArray.map(({ Major }) => (
              <S.SelectDot
                onClick={() => setSelectedMajor(Major)}
                key={Major}
                css={css`
                  border: ${selectedMajor === Major
                    ? '8px solid #003365'
                    : '4px solid #cdd5e2'};
                `}
              />
            ))}
            <S.Line />
          </S.DotContainer>
          <S.Major>
            {MajorArray.map(({ Major, name }) => (
              <p
                onClick={() => setSelectedMajor(Major)}
                key={Major}
                css={css`
                  color: ${selectedMajor === Major ? '#003365 ' : '#cdd5e2'};
                `}
              >
                {name}
              </p>
            ))}
          </S.Major>
        </S.MajorSelect>
      </div>
      <MajorCard />
    </S.Layout>
  );
};

export default Section5;
