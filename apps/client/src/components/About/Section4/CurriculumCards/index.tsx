import type { ImgHTMLAttributes } from 'react';

import Image from 'next/image';

import { css } from '@emotion/react';

import { useGetWindowWidth } from 'client/hooks';

import { theme } from 'common';

import * as S from './style';

interface ImageType extends ImgHTMLAttributes<HTMLImageElement> {
  width: number;
  height: number;
}

interface CardType {
  isSmall: boolean;
  bgColor: string;
  color: string;
  title: string;
  subTitle: string;

  cardPosition: {
    right: string;
  };

  img: ImageType;

  imgResponsive: {
    width1335: number;
    height1335: number;
    width600: number;
    height600: number;
    right1335: string;
    right600: string;
  };
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
    imgResponsive: {
      width1335: 286,
      height1335: 242,
      width600: 217,
      height600: 199,
      right1335: '3.6875rem',
      right600: '1.25rem',
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
    imgResponsive: {
      width1335: 294,
      height1335: 284,
      width600: 224,
      height600: 220,
      right1335: '2.5625rem',
      right600: '1.375rem',
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
    imgResponsive: {
      width1335: 350,
      height1335: 266,
      width600: 275,
      height600: 210,
      right1335: '2.4375rem',
      right600: '1.6875rem',
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
    imgResponsive: {
      width1335: 276,
      height1335: 240,
      width600: 246,
      height600: 214,
      right1335: '1.875rem',
      right600: '0',
    },
  },
];

const CurriculumCards = () => {
  const width = useGetWindowWidth();

  const handleResponsiveImg = (card: CardType) => {
    if (width > 1335) {
      return {
        width: card.img.width,
        height: card.img.height,
        right: card.cardPosition.right,
      };
    } else if (width <= 1335 && width > 600) {
      return {
        width: card.imgResponsive.width1335,
        height: card.imgResponsive.height1335,
        right: card.imgResponsive.right1335,
      };
    } else {
      return {
        width: card.imgResponsive.width600,
        height: card.imgResponsive.height600,
        right: card.imgResponsive.right600,
      };
    }
  };

  return (
    <S.SectionCardWrapper>
      {CurriculumArray.map((card, cardIndex) => (
        <S.CardTemplate
          key={cardIndex}
          css={css`
            width: ${card.isSmall ? '30.9375rem' : '44.6875rem'};

            @media (max-width: 1335px) {
              width: 100%;
            }
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

              @media (max-width: 1335px) {
                right: ${handleResponsiveImg(card).right};
              }
            `}
          >
            <Image
              src={`/images/about/section4/${card.img.src}.png`}
              width={card.img.width}
              height={card.img.height}
              css={css`
                @media (max-width: 1335px) {
                  width: ${handleResponsiveImg(card).width};
                  height: ${handleResponsiveImg(card).height};
                }
              `}
              alt='교육과정 이미지'
            />
          </S.CardImg>
        </S.CardTemplate>
      ))}
    </S.SectionCardWrapper>
  );
};

export default CurriculumCards;
