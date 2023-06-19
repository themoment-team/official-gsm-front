import { useState } from 'react';

import { css } from '@emotion/react';

import {
  IntroductionTitle,
  SectionTitle,
  SubTitle,
  IdealTalent,
} from 'client/components';
import type { IdealTalentType } from 'client/types/idealtalent';

import * as I from 'assets';


import * as S from './style';

const IdealTalentItem: IdealTalentType[] = [
  {
    icon: <></>,
    title: (
      <>
        <div
          css={css`
            color: #003365;
          `}
        >
          #교직원상
        </div>
        <div className='emoji'>🏫</div>
      </>
    ),
    subTitle: [
      '교육활동을 적극적으로 지원하고 함께하는 교직원',
      '학생들의 성장을 도우며 복돋아주는 교직원',
    ],
  },
  {
    icon: <></>,
    title: (
      <>
        <div
          css={css`
            color: #7acdf4;
          `}
        >
          #학생상
        </div>
        <div className='emoji'>🧑🏻‍🎓</div>
      </>
    ),
    subTitle: [
      '자기 주도성을 지니고 배움과 성장에 적극적인 학생',
      '도전을 즐기고 유연한 사고로 소통, 배려하는 학생',
    ],
  },
  {
    icon: <></>,
    title: (
      <>
        <div
          css={css`
            color: #003365;
          `}
        >
          #교사상
        </div>
        <div className='emoji'>👩🏻‍🏫</div>
      </>
    ),
    subTitle: [
      '전문성을 갖고 가르치는 맛과 멋과 흥을 지닌 교사',
      '자발적인 참여로 협업하고 협력하는 교사',
    ],
  },
  {
    icon: <></>,
    title: (
      <>
        <div
          css={css`
            color: #7acdf4;
          `}
        >
          #학부모상
        </div>
        <div className='emoji'>👩🏻‍🏫</div>
      </>
    ),
    subTitle: [
      '자녀의 성장을 보며 적극적인 지지를 보내는 부모님',
      '개방적 사고로 이해하고 기다려 줄 수 있는 학부모',
    ],
  },
];
const Section7 = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % IdealTalentItem.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? IdealTalentItem.length - 1 : prevSlide - 1
    );
  };

  return (
    <S.Layout>
      <S.UpperBox>
        <S.Box>
          <div>
            <SectionTitle textAlign='left'>
              <IntroductionTitle pointColor='sky'>
                GSM이 원하는 학교상
              </IntroductionTitle>
              <SubTitle>소프트웨어 시대를 이끌어 나갈 인재</SubTitle>
            </SectionTitle>
          </div>
          <div>
            <S.IconWrap>
              <div onClick={handlePrevSlide}>
                <I.LeftArrowIcon />
              </div>
              <div onClick={handleNextSlide}>
                <I.RightArrowIcon />
              </div>
            </S.IconWrap>
            <S.IdealTalentLayout>
              {IdealTalentItem.map((item, index) => (
                <S.Slide
                  key={index}
                  css={css`
                    transform: translateX(${(index - currentSlide) * 485}px);
                  `}
                >
                  <S.IdealTalent>
                    <IdealTalent {...item} />
                  </S.IdealTalent>
                </S.Slide>
              ))}
            </S.IdealTalentLayout>
          </div>
        </S.Box>
      </S.UpperBox>
    </S.Layout>
  );
};

export default Section7;
