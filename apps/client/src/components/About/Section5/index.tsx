import { useEffect, useRef, useState } from 'react';

import { css, useTheme } from '@emotion/react';

import {
  SectionTitle,
  AboutTitle,
  SubTitle,
  MajorCard,
} from 'client/components';
import { useGetScrollHeight } from 'client/hooks';
import type { MajorType } from 'client/types';

import { sectionHeight } from './sectionHeight';
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

const Section5 = () => {
  const [selectedMajor, setSelectedMajor] = useState<MajorType>('SW');
  const theme = useTheme();
  const majorScroll = useRef<HTMLDivElement>(null);
  const scrollHeight = useGetScrollHeight(majorScroll);
  const centerAverage =
    sectionHeight.contentSectionHeightPx - sectionHeight.scrollSectionHeightPx;

  useEffect(() => {
    if (scrollHeight !== undefined)
      if (scrollHeight <= centerAverage / 3) {
        setSelectedMajor('SW');
      } else if (
        scrollHeight >= centerAverage / 3 &&
        scrollHeight < (centerAverage / 3) * 2
      ) {
        setSelectedMajor('IOT');
      } else if (scrollHeight <= centerAverage) {
        setSelectedMajor('AI');
      }
  }, [scrollHeight, centerAverage]);

  return (
    <S.ScrollSection ref={majorScroll}>
      <S.MajorLayout>
        <S.StickySection>
          <S.MajorSection>
            <S.TitleSection>
              <SectionTitle textAlign='left'>
                <AboutTitle pointColor='sky'>
                  창의 융합력을 갖춘 <br />
                  글로벌 소프트웨어 학과 소개
                </AboutTitle>
                <SubTitle>
                  체계적인 교육과정을 제공하는 소프트웨어 학과
                </SubTitle>
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
            </S.TitleSection>
            <MajorCard major={selectedMajor} />
          </S.MajorSection>
        </S.StickySection>
      </S.MajorLayout>
    </S.ScrollSection>
  );
};

export default Section5;
