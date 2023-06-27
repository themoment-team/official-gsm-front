import Image from 'next/image';

import { css } from '@emotion/react';

import * as S from './style';

const CurriculumArray = [
  {
    isSmall: true,
    bgColor: '#0033651A',
    color: '#003365',
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
    bgColor: '#F8FADB',
    color: '#C8CE2B',
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
    bgColor: '#7ACDF433',
    color: '#7ACDF4',
    title: '산업수요 변화에 맞춘',
    subTitle: '현장실무능력 향상',
    cardPosition: {
      right: '4.1875rem',
    },
    img: {
      src: 'GlobeIcon',
      width: 360,
      height: 252,
    },
  },
  {
    isSmall: true,
    bgColor: '#FF98771A',
    color: '#FF9877',
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
    {CurriculumArray.map((index, id) => (
      <S.CardTemplate
        key={id}
        // isSmall={index.isSmall}
        // bgColor={index.bgColor}
        css={css`
          width: ${index.isSmall ? '30.9375rem' : '44.6875rem'};
          background-color: ${index.bgColor};
        `}
      >
        <S.CardTitle
          css={css`
            color: ${index.color};

            span {
              color: ${index.color};
              opacity: 60%;
            }
          `}
        >
          {index.title}
          <br />
          <span>{index.subTitle}</span>
        </S.CardTitle>
        <S.CardImg
          css={css`
            bottom: 0;
            right: ${index.cardPosition.right};
          `}
        >
          <Image
            src={`/images/about/section4/${index.img.src}.png`}
            width={index.img.width}
            height={index.img.height}
            alt='교육과정 이미지'
          />
        </S.CardImg>
      </S.CardTemplate>
    ))}
  </S.SectionCardWrapper>
);

export default CurriculumCards;
