import Image from 'next/image';

import * as S from './style';
const Slide = () => {
  const images = [
    '/png/imgs/introduction/section8/MOU.png',
    '/png/imgs/introduction/section8/MOU1.png',
    '/png/imgs/introduction/section8/MOU2.png',
    '/png/imgs/introduction/section8/MOU4.png',
    '/png/imgs/introduction/section8/MOU.png',
    '/png/imgs/introduction/section8/MOU1.png',
    '/png/imgs/introduction/section8/MOU2.png',
    '/png/imgs/introduction/section8/MOU4.png',
  ];
  const images2 = [
    '/png/imgs/introduction/section8/MOU5.png',
    '/png/imgs/introduction/section8/MOU6.png',
    '/png/imgs/introduction/section8/MOU7.png',
    '/png/imgs/introduction/section8/MOU8.png',
    '/png/imgs/introduction/section8/MOU9.png',
    '/png/imgs/introduction/section8/MOU5.png',
    '/png/imgs/introduction/section8/MOU6.png',
    '/png/imgs/introduction/section8/MOU7.png',
    '/png/imgs/introduction/section8/MOU8.png',
    '/png/imgs/introduction/section8/MOU9.png',
  ];
  const images3 = [
    '/png/imgs/introduction/section8/MOU11.png',
    '/png/imgs/introduction/section8/MOU12.png',
    '/png/imgs/introduction/section8/MOU3.png',
    '/png/imgs/introduction/section8/MOU13.png',
    '/png/imgs/introduction/section8/MOU10.png',
    '/png/imgs/introduction/section8/MOU11.png',
    '/png/imgs/introduction/section8/MOU12.png',
    '/png/imgs/introduction/section8/MOU3.png',
    '/png/imgs/introduction/section8/MOU13.png',
    '/png/imgs/introduction/section8/MOU10.png',
  ];
  return (
    <S.Container>
      <S.ScrollWrap>
        <S.Scroll className='primary first'>
          {images.map((src, index) => (
            <Image key={index} src={src} alt={`image-${index}`} fill />
          ))}
        </S.Scroll>
        <S.Scroll className='secondary first'>
          {images.map((src, index) => (
            <Image key={index} src={src} alt={`image-${index}`} fill />
          ))}
        </S.Scroll>
      </S.ScrollWrap>
      <S.ScrollWrap2>
        <S.Scroll2 className='primary second'>
          {images2.map((src, index) => (
            <Image key={index} src={src} alt={`image-${index}`} fill />
          ))}
        </S.Scroll2>
        <S.Scroll2 className='secondary second'>
          {images2.map((src, index) => (
            <Image key={index} src={src} alt={`image-${index}`} fill />
          ))}
        </S.Scroll2>
      </S.ScrollWrap2>
      <S.ScrollWrap>
        <S.Scroll className='primary third'>
          {images3.map((src, index) => (
            <Image key={index} src={src} alt={`image-${index}`} fill />
          ))}
        </S.Scroll>
        <S.Scroll className='secondary third'>
          {images3.map((src, index) => (
            <Image key={index} src={src} alt={`image-${index}`} fill />
          ))}
        </S.Scroll>
      </S.ScrollWrap>
    </S.Container>
  );
};

export default Slide;
