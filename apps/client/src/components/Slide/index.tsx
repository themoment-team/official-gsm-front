import Image from 'next/image';

import * as S from './style';
const Slide = () => {
  const images = [
    '/img/Untitled.png',
    '/img/Untitled1.png',
    '/img/Untitled2.png',
    '/img/Untitled4.png',
    '/img/Untitled.png',
    '/img/Untitled1.png',
    '/img/Untitled2.png',
    '/img/Untitled4.png',
  ];
  const images2 = [
    '/img/Untitled5.png',
    '/img/Untitled6.png',
    '/img/Untitled7.png',
    '/img/Untitled8.png',
    '/img/Untitled9.png',
    '/img/Untitled5.png',
    '/img/Untitled6.png',
    '/img/Untitled7.png',
    '/img/Untitled8.png',
    '/img/Untitled9.png',
  ];
  const images3 = [
    '/img/Untitled11.png',
    '/img/Untitled12.png',
    '/img/Untitled3.png',
    '/img/Untitled13.png',
    '/img/Untitled10.png',
    '/img/Untitled11.png',
    '/img/Untitled12.png',
    '/img/Untitled3.png',
    '/img/Untitled13.png',
    '/img/Untitled10.png',
  ];
  return (
    <div>
      <S.ScrollWrap>
        <S.Scroll className='scroll-element primary first'>
          {images.map((src, index) => (
            <Image key={index} src={src} alt={`image-${index}`} fill />
          ))}
        </S.Scroll>
        <S.Scroll className='scroll-element secondary first'>
          {images.map((src, index) => (
            <Image key={index} src={src} alt={`image-${index}`} fill />
          ))}
        </S.Scroll>
      </S.ScrollWrap>
      <S.ScrollWrap2>
        <S.Scroll2 className='scroll-element primary second'>
          {images2.map((src, index) => (
            <Image key={index} src={src} alt={`image-${index}`} fill />
          ))}
        </S.Scroll2>
        <S.Scroll2 className='scroll-element secondary second'>
          {images2.map((src, index) => (
            <Image key={index} src={src} alt={`image-${index}`} fill />
          ))}
        </S.Scroll2>
      </S.ScrollWrap2>
      <S.ScrollWrap>
        <S.Scroll className='scroll-element primary third'>
          {images3.map((src, index) => (
            <Image key={index} src={src} alt={`image-${index}`} fill />
          ))}
        </S.Scroll>
        <S.Scroll className='scroll-element secondary third'>
          {images3.map((src, index) => (
            <Image key={index} src={src} alt={`image-${index}`} fill />
          ))}
        </S.Scroll>
      </S.ScrollWrap>
    </div>
  );
};

export default Slide;
