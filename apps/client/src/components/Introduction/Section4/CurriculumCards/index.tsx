import type { ImgHTMLAttributes } from 'react';

import Image from 'next/image';

import { css } from '@emotion/react';

import { theme } from 'common';

import * as S from './style';

interface ImageType extends ImgHTMLAttributes<HTMLImageElement> {
  width?: number;
  height?: number;
}

export interface CardType {
  isSmall: boolean;
  bgColor: string;
  color: string;
  title: string;
  subTitle: string;

  cardPosition: {
    right: string;
  };

  img: ImageType;
}

const CurriculumArray: CardType[] = [
  {
    isSmall: true,
    bgColor: `${theme.color.primary.navy}1A`,
    color: `${theme.color.primary.navy}`,
    title: 'AI 시대를 선도할',
    subTitle: 'GSM 교육과정 운영',
    cardPosition: {
      right: '2.1875rem',
    },
    img: {
      src: 'MountainIcon',
      width: 234,
      height: 220,
    },
  },
  {
    isSmall: false,
    bgColor: `${theme.color.sub.yellow}`,
    color: `${theme.color.sub.lime}`,
    title: '직업군에 최적화된',
    subTitle: '취업역량 강화',
    cardPosition: {
      right: '2.1875rem',
    },
    img: {
      src: 'PieChartIcon',
      width: 290,
      height: 260,
    },
  },
  {
    isSmall: false,
    bgColor: `${theme.color.primary.sky}33`,
    color: `${theme.color.primary.sky}`,
    title: '산업수요 변화에 맞춘',
    subTitle: '현장실무능력 향상',
    cardPosition: {
      right: '4.1875rem',
    },
    img: {
      src: 'GlobalIcon',
      width: 360,
      height: 252,
    },
  },
  {
    isSmall: true,
    bgColor: `${theme.color.sub.orange}1A`,
    color: `${theme.color.sub.orange}`,
    title: '자율성과 자기 주도성으로',
    subTitle: '학습 능력 신장',
    cardPosition: {
      right: '0',
    },
    img: {
      src: 'RocketIcon',
      width: 240,
      height: 220,
    },
  },
];

const CurriculumCards = () => (
  <S.SectionCardWrapper>
    {CurriculumArray.map((card, cardIndex) => (
      <S.CardTemplate
        key={cardIndex}
        css={css`
          width: ${card.isSmall ? '30.9375rem' : '44.6875rem'};
          background-color: ${card.bgColor};
        `}
      >
        <S.CardTitle
          css={css`
            color: ${card.color};

            span {
              color: ${card.color};
              opacity: 60%;
            }
          `}
        >
          {card.title}
          <br />
          <span>{card.subTitle}</span>
        </S.CardTitle>
        <S.CardImg
          css={css`
            bottom: 0;
            right: ${card.cardPosition.right};
          `}
        >
          <Image
            src={`/images/about/section4/${card.img.src}.png`}
            width={card.img.width}
            height={card.img.height}
            alt='교육과정 이미지'
          />
        </S.CardImg>
      </S.CardTemplate>
    ))}
  </S.SectionCardWrapper>
);

export default CurriculumCards;
