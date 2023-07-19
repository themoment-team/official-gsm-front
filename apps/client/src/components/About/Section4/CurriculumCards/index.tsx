/** @jsxImportSource @emotion/react */

'use client';

import type { ImgHTMLAttributes } from 'react';


import Image from 'next/image';

import * as S from './style';

const CardImgSrcArr: string[] = [
  'MountainIcon',
  'PieChartIcon',
  'GlobalIcon',
  'RocketIcon',
];

const CurriculumCards = () => (
  <S.SectionCardWrapper>
    <S.Card1>
      <S.CardTitle fontColor='#003365'>
        AI 시대를 선도할
        <br />
        <span>GSM 교육과정 운영</span>
      </S.CardTitle>
      <S.Card1Img>
        <Image
          src={`/images/about/section4/${CardImgSrcArr[0]}.png`}
          alt='교육과정 이미지'
          fill
        />
      </S.Card1Img>
    </S.Card1>
    <S.Card2>
      <S.CardTitle fontColor='#C8CE2B'>
        직업군에 최적화된
        <br />
        <span>취업역량 강화</span>
      </S.CardTitle>
      <S.Card2Img>
        <Image
          src={`/images/about/section4/${CardImgSrcArr[1]}.png`}
          alt='교육과정 이미지'
          fill
        />
      </S.Card2Img>
    </S.Card2>
    <S.Card3>
      <S.CardTitle fontColor='#7ACDF4'>
        산업수요 변화에 맞춘
        <br />
        <span>현장실무능력 향상</span>
      </S.CardTitle>
      <S.Card3Img>
        <Image
          src={`/images/about/section4/${CardImgSrcArr[2]}.png`}
          alt='교육과정 이미지'
          fill
        />
      </S.Card3Img>
    </S.Card3>
    <S.Card4>
      <S.CardTitle fontColor='#FF9877'>
        자율성과 자기 주도성으로
        <br />
        <span>학습 능력 신장</span>
      </S.CardTitle>
      <S.Card4Img>
        <Image
          src={`/images/about/section4/${CardImgSrcArr[3]}.png`}
          alt='교육과정 이미지'
          fill
        />
      </S.Card4Img>
    </S.Card4>
  </S.SectionCardWrapper>
);

export default CurriculumCards;
