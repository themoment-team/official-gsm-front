'use client';

import Image from 'next/image';

import * as S from './style';
const images = [
  '/images/about/section8/Corp.png',
  '/images/about/section8/Corp1.png',
  '/images/about/section8/Corp2.png',
  '/images/about/section8/Corp3.png',
  '/images/about/section8/Corp4.png',
  '/images/about/section8/Corp5.png',
  '/images/about/section8/Corp6.png',
];
const images2 = [
  '/images/about/section8/Corp7.png',
  '/images/about/section8/Corp8.png',
  '/images/about/section8/Corp9.png',
  '/images/about/section8/Corp10.png',
  '/images/about/section8/Corp11.png',
  '/images/about/section8/Corp12.png',
  '/images/about/section8/Corp13.png',
];
const images3 = [
  '/images/about/section8/Corp14.png',
  '/images/about/section8/Corp15.png',
  '/images/about/section8/Corp16.png',
  '/images/about/section8/Corp17.png',
  '/images/about/section8/Corp18.png',
  '/images/about/section8/Corp19.png',
  '/images/about/section8/Corp20.png',
];

const Slide = () => (
  <S.SlideContainer>
    <S.SlideWrap>
      <S.Slide className='primary first'>
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`image-${index}`}
            width={600}
            height={70}
          />
        ))}
      </S.Slide>
      <S.Slide className='secondary first'>
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`image-${index}`}
            width={600}
            height={70}
          />
        ))}
      </S.Slide>
    </S.SlideWrap>
    <S.SlideWrap>
      <S.Slide2 className='primary second'>
        {images2.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`image-${index}`}
            width={600}
            height={70}
          />
        ))}
      </S.Slide2>
      <S.Slide2 className='secondary second'>
        {images2.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`image-${index}`}
            width={600}
            height={70}
          />
        ))}
      </S.Slide2>
    </S.SlideWrap>
    <S.SlideWrap>
      <S.Slide className='primary third'>
        {images3.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`image-${index}`}
            width={600}
            height={70}
          />
        ))}
      </S.Slide>
      <S.Slide className='secondary third'>
        {images3.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`image-${index}`}
            width={600}
            height={70}
          />
        ))}
      </S.Slide>
    </S.SlideWrap>
  </S.SlideContainer>
);

export default Slide;
