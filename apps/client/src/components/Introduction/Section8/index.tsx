import { useEffect } from 'react';

import Image from 'next/image';

import { IntroductionTitle, SectionTitle, SubTitle } from 'client/components';

import * as S from './style';

const Section8 = () => {
  useEffect(() => {
    const roller = document.querySelector('.rolling-list') as HTMLElement;
    roller.id = 'roller1';

    const clone = roller.cloneNode(true) as HTMLElement;
    clone.id = 'roller2';
    document.querySelector('.wrap')?.appendChild(clone);

    const roller1 = document.querySelector('#roller1') as HTMLElement;
    const roller2 = document.querySelector('#roller2') as HTMLElement;
    roller1.style.left = '0px';
    roller2.style.left = `${
      (document.querySelector('.rolling-list ul') as HTMLElement).offsetWidth
    }px`;

    roller.classList.add('original');
    clone.classList.add('clone');
  }, []);

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
      <div className='wrap'>
        <div className='rolling-list'>
          <ul>
            <li>
              <div className='image-wrap'>
                <Image
                  src='/img/Untitled.png'
                  alt=''
                  width={400}
                  height={200}
                />
              </div>
              <div className='desc'>
                <strong>First Banner</strong>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br />
                  Neque cumque ratione provident nulla veniam nihil quaerat,
                  illum officiis hic.
                  <br />
                  Laborum in eos possimus, quo ullam nobis nam nemo fuga ipsam?
                </span>
              </div>
            </li>
            <li>
              <div className='image-wrap'>
                <Image
                  src='/img/Untitled1.png'
                  alt=''
                  width={400}
                  height={200}
                />
              </div>
              <div className='desc'>
                <strong>Second Banner</strong>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br />
                  Neque cumque ratione provident nulla veniam nihil quaerat,
                  illum officiis hic.
                  <br />
                  Laborum in eos possimus, quo ullam nobis nam nemo fuga ipsam?
                </span>
              </div>
            </li>
            <li>
              <div className='image-wrap'>
                <Image
                  src='/img/Untitled2.png'
                  alt=''
                  width={300}
                  height={200}
                />
              </div>
              <div className='desc'>
                <strong>Third Banner</strong>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br />
                  Neque cumque ratione provident nulla veniam nihil quaerat,
                  illum officiis hic.
                  <br />
                  Laborum in eos possimus, quo ullam nobis nam nemo fuga ipsam?
                </span>
              </div>
            </li>
            <li>
              <div className='image-wrap'>
                <Image
                  src='/img/Untitled3.png'
                  alt=''
                  width={300}
                  height={200}
                />
              </div>
              <div className='desc'>
                <strong>Fourth Banner</strong>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br />
                  Neque cumque ratione provident nulla veniam nihil quaerat,
                  illum officiis hic.
                  <br />
                  Laborum in eos possimus, quo ullam nobis nam nemo fuga ipsam?
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </S.Layout>
  );
};

export default Section8;
