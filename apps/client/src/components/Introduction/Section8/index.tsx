import Image from 'next/image';

import { IntroductionTitle, SectionTitle, SubTitle } from 'client/components';

import * as S from './style';
const Section8 = () => {
  const images = [
    '/img/Untitled.png',
    '/img/Untitled1.png',
    '/img/Untitled2.png',
    '/img/Untitled3.png',
    '/img/Untitled4.png',
    '/img/Untitled.png',
    '/img/Untitled1.png',
    '/img/Untitled2.png',
    '/img/Untitled3.png',
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
    '/img/Untitled9.png',
    '/img/Untitled13.png',
    '/img/Untitled10.png',
    '/img/Untitled11.png',
    '/img/Untitled12.png',
    '/img/Untitled9.png',
    '/img/Untitled13.png',
    '/img/Untitled10.png',
  ];
  return (
    <S.Layout>
      <S.SectionWrap>
        <SectionTitle>
          <IntroductionTitle pointColor='lime'>
            GSM과 함께하는 MOU 기업
          </IntroductionTitle>
          <SubTitle>꿈˙끼˙업(UP)˙고(GO)</SubTitle>
        </SectionTitle>
      </S.SectionWrap>
      <S.Container>
        <S.ScrollWrap>
          <S.Scroll className='scroll-element primary first'>
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`image-${index}`}
                width={200}
                height={50}
              />
            ))}
          </S.Scroll>
          <S.Scroll className='scroll-element secondary first'>
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`image-${index}`}
                width={200}
                height={50}
              />
            ))}
          </S.Scroll>
        </S.ScrollWrap>
        <S.ScrollWrap>
          <S.Scroll className='scroll-element primary second'>
            {images2.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`image-${index}`}
                width={200}
                height={50}
              />
            ))}
          </S.Scroll>
          <S.Scroll className='scroll-element secondary second'>
            {images2.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`image-${index}`}
                width={200}
                height={50}
              />
            ))}
          </S.Scroll>
        </S.ScrollWrap>
        <S.ScrollWrap>
          <S.Scroll className='scroll-element primary third'>
            {images3.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`image-${index}`}
                width={200}
                height={50}
              />
            ))}
          </S.Scroll>
          <S.Scroll className='scroll-element secondary third'>
            {images3.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`image-${index}`}
                width={200}
                height={50}
              />
            ))}
          </S.Scroll>
        </S.ScrollWrap>
      </S.Container>
    </S.Layout>
  );
};

export default Section8;
