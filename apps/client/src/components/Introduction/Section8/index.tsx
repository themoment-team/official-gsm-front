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
    '/img/Untitled5.png',
  ];
  const images2 = [
    '/img/Untitled6.png',
    '/img/Untitled7.png',
    '/img/Untitled8.png',
    '/img/Untitled9.png',
    '/img/Untitled10.png',
  ];
  const images3 = [
    '/img/Untitled11.png',
    '/img/Untitled12.png',
    '/img/Untitled9.png',
    '/img/Untitled13.png',
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
        <div className='scroll-parent'>
          <div className='scroll-element primary'>
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`image-${index}`}
                width={200}
                height={100}
              />
            ))}
          </div>
          <div className='scroll-element secondary'>
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`image-${index}`}
                width={200}
                height={100}
              />
            ))}
          </div>
        </div>
        <div className='scroll-parent'>
          <div className='scroll-element primary'>
            {images2.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`image-${index}`}
                width={200}
                height={100}
              />
            ))}
          </div>
          <div className='scroll-element secondary'>
            {images2.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`image-${index}`}
                width={200}
                height={100}
              />
            ))}
          </div>
        </div>
        <div className='scroll-parent'>
          <div className='scroll-element primary'>
            {images3.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`image-${index}`}
                width={200}
                height={100}
              />
            ))}
          </div>
          <div className='scroll-element secondary'>
            {images3.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`image-${index}`}
                width={200}
                height={100}
              />
            ))}
          </div>
        </div>
      </S.Container>
    </S.Layout>
  );
};

export default Section8;
