import { useEffect, useRef } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { IntroductionTitle, SectionTitle, SubTitle } from 'client/components';

import * as S from './style';

const BannerContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const BannerList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  animation: scrollBanner 20s linear infinite;
  @keyframes scrollBanner {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const BannerItem = styled.li`
  flex: 0 0 100%;
  list-style: none;
  width: 300px;
  height: 100px;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
`;

const Section8 = () => {
  const bannerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const bannerList = bannerRef.current;
    let animationFrameId: number;

    const handleAnimation = () => {
      if (bannerList) {
        const firstItem = bannerList.firstElementChild;
        if (firstItem) {
          bannerList.appendChild(firstItem);
          bannerList.style.transform = 'translateX(0)';
        }
      }
      animationFrameId = requestAnimationFrame(handleAnimation);
    };

    animationFrameId = requestAnimationFrame(handleAnimation);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
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
      <S.LogoImgWrap>
        <S.LogoLoop>
          <S.LogoBox>
            <S.Img />
          </S.LogoBox>
        </S.LogoLoop>
      </S.LogoImgWrap>
      <BannerContainer>
        <BannerList ref={bannerRef}>
          <BannerItem>
            <BannerImage src='/path/to/banner1.jpg' alt='Banner 5' />
          </BannerItem>
          <BannerItem
            css={css`
              background-color: navy;
            `}
          >
            <BannerImage src='/path/to/banner2.jpg' alt='Banner 2' />
          </BannerItem>
          <BannerItem>
            <BannerImage src='/path/to/banner2.jpg' alt='Banner 2' />
          </BannerItem>
          <BannerItem>
            <BannerImage src='/path/to/banner2.jpg' alt='Banner 2' />
          </BannerItem>
          <BannerItem>
            <BannerImage src='/path/to/banner2.jpg' alt='Banner 2' />
          </BannerItem>
          {/* Add more banner items as needed */}
        </BannerList>
      </BannerContainer>
    </S.Layout>
  );
};

export default Section8;
