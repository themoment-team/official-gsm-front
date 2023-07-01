import Image from 'next/image';

import * as S from './style';
const images = [
  '/images/about/section8/MOU.png',
  '/images/about/section8/MOU1.png',
  '/images/about/section8/MOU2.png',
  '/images/about/section8/MOU4.png',
  '/images/about/section8/MOU.png',
  '/images/about/section8/MOU1.png',
  '/images/about/section8/MOU2.png',
  '/images/about/section8/MOU4.png',
];
const images2 = [
  '/images/about/section8/MOU5.png',
  '/images/about/section8/MOU6.png',
  '/images/about/section8/MOU7.png',
  '/images/about/section8/MOU8.png',
  '/images/about/section8/MOU9.png',
  '/images/about/section8/MOU5.png',
  '/images/about/section8/MOU6.png',
  '/images/about/section8/MOU7.png',
  '/images/about/section8/MOU8.png',
  '/images/about/section8/MOU9.png',
];
const images3 = [
  '/images/about/section8/MOU11.png',
  '/images/about/section8/MOU12.png',
  '/images/about/section8/MOU3.png',
  '/images/about/section8/MOU13.png',
  '/images/about/section8/MOU10.png',
  '/images/about/section8/MOU11.png',
  '/images/about/section8/MOU12.png',
  '/images/about/section8/MOU3.png',
  '/images/about/section8/MOU13.png',
  '/images/about/section8/MOU10.png',
  '/images/about/section8/MOU3.png',
];

const Slide = () => (
  <S.SlideContainer>
    <S.SlideWrap>
      <S.Slide className='primary first'>
        {images.map((src, index) => (
          <Image key={index} src={src} alt={`image-${index}`} fill />
        ))}
      </S.Slide>
      <S.Slide className='secondary first'>
        {images.map((src, index) => (
          <Image key={index} src={src} alt={`image-${index}`} fill />
        ))}
      </S.Slide>
    </S.SlideWrap>
    <S.SlideWrap>
      <S.Slide2 className='primary second'>
        {images2.map((src, index) => (
          <Image key={index} src={src} alt={`image-${index}`} fill />
        ))}
      </S.Slide2>
      <S.Slide2 className='secondary second'>
        {images2.map((src, index) => (
          <Image key={index} src={src} alt={`image-${index}`} fill />
        ))}
      </S.Slide2>
    </S.SlideWrap>
    <S.SlideWrap>
      <S.Slide className='primary third'>
        {images3.map((src, index) => (
          <Image key={index} src={src} alt={`image-${index}`} fill />
        ))}
      </S.Slide>
      <S.Slide className='secondary third'>
        {images3.map((src, index) => (
          <Image key={index} src={src} alt={`image-${index}`} fill />
        ))}
      </S.Slide>
    </S.SlideWrap>
  </S.SlideContainer>
);

export default Slide;