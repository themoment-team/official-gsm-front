import { useState } from 'react';

import { css, useTheme } from '@emotion/react';

import {
  SectionTitle,
  IntroductionTitle,
  SubTitle,
  MajorCard,
} from 'client/components';
import type { MajorType } from 'client/types/introduce';

import * as S from './style';

interface MajorArrayType {
  major: MajorType;
  name: string;
}

const Section5 = () => {
  const majorArray: MajorArrayType[] = [
    { major: 'SW', name: '소프트웨어 개발과' },
    { major: 'IOT', name: '스마트 IOT(Internet of Things)' },
    { major: 'AI', name: '인공 지능(AI)과' },
  ];
  const [selectedMajor, setSelectedMajor] = useState<MajorType>('SW');
  const theme = useTheme();

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
            {majorArray.map(({ major }) => (
              <S.SelectDot
                onClick={() => setSelectedMajor(major)}
                key={major}
                css={css`
                  border: ${selectedMajor === major
                    ? `0.5rem solid ${theme.color.primary.navy}`
                    : `0.25rem solid ${theme.color.sub.gray}`};
                  transition: border 0.5s;
                `}
              />
            ))}
            <S.Line />
          </S.DotContainer>
          <S.Major>
            {majorArray.map(({ major, name }) => (
              <p
                onClick={() => setSelectedMajor(major)}
                key={major}
                css={css`
                  color: ${selectedMajor === major
                    ? theme.color.primary.navy
                    : theme.color.sub.gray};
                  transition: color 0.5s;
                `}
              >
                {name}
              </p>
            ))}
          </S.Major>
        </S.MajorSelect>
      </div>
      <MajorCard major={selectedMajor} />
    </S.Layout>
  );
};

export default Section5;
