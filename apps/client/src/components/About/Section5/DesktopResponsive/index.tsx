import { useEffect, useRef, useState } from 'react';

import { css, useTheme } from '@emotion/react';

import {
  SectionTitle,
  AboutTitle,
  SubTitle,
  MajorCard,
} from 'client/components';
import { majorArray } from 'client/components/About/Section5/majorArray';
import { sectionHeight } from 'client/components/About/Section5/sectionHeight';
import {
  useGetScrollHeight,
  useGetWindowScrollHeight,
  useGetWindowWidth,
} from 'client/hooks';
import type { MajorType } from 'client/types';

import * as S from './style';

const DesktopResponsive = () => {
  const [selectedMajor, setSelectedMajor] = useState<MajorType>('SW');
  const theme = useTheme();

  const majorScroll = useRef<HTMLDivElement>(null);
  const scrollHeight = useGetScrollHeight(majorScroll);
  const centerAverage =
    sectionHeight.contentSectionHeightPx - sectionHeight.scrollSectionHeightPx;

  const windowScrollHeight = useGetWindowScrollHeight();
  const width = useGetWindowWidth();

  useEffect(() => {
    if (width < 1440 || scrollHeight === undefined) return;

    if (scrollHeight < centerAverage / 3) {
      setSelectedMajor('SW');
    } else if (scrollHeight < (centerAverage / 3) * 2) {
      setSelectedMajor('IOT');
    } else {
      setSelectedMajor('AI');
    }
  }, [scrollHeight, centerAverage, width]);

  return (
    <S.ScrollSection
      ref={majorScroll}
      css={
        width >= 1440 &&
        windowScrollHeight >= 3800 &&
        windowScrollHeight <= 4000
          ? css`
              overflow: scroll;
            `
          : css`
              overflow: hidden;
            `
      }
    >
      <S.MajorLayout>
        <S.StickySection>
          <S.MajorSection>
            <S.TitleSection>
              <SectionTitle textAlign='left'>
                <AboutTitle pointColor='sky' right='27%'>
                  창의 융합력을 갖춘 <br />
                  글로벌 소프트웨어 학과 소개
                </AboutTitle>
                <SubTitle>
                  체계적인 교육과정을 제공하는 소프트웨어 학과
                </SubTitle>
              </SectionTitle>
              <S.MajorSelect>
                <S.Line />
                <S.MajorContainer>
                  {majorArray.map(({ major, name }) => (
                    <S.MajorName
                      onClick={() => {
                        setSelectedMajor(major);
                        switch (major) {
                          case 'SW':
                            return majorScroll.current?.scrollTo(0, 250);
                          case 'IOT':
                            return majorScroll.current?.scrollTo(0, 750);
                          case 'AI':
                            return majorScroll.current?.scrollTo(0, 1250);
                        }
                      }}
                      key={major}
                      css={css`
                        color: ${selectedMajor === major
                          ? theme.color.primary.navy
                          : theme.color.sub.gray};
                        transition: color 0.5s;

                        &::before {
                          border: ${selectedMajor === major
                            ? `0.5rem solid ${theme.color.primary.navy}`
                            : `0.25rem solid ${theme.color.sub.gray}`};
                          transition: border 0.5s;
                        }
                      `}
                    >
                      {name}
                    </S.MajorName>
                  ))}
                </S.MajorContainer>
              </S.MajorSelect>
            </S.TitleSection>
            <MajorCard major={selectedMajor} />
          </S.MajorSection>
        </S.StickySection>
      </S.MajorLayout>
    </S.ScrollSection>
  );
};

export default DesktopResponsive;
