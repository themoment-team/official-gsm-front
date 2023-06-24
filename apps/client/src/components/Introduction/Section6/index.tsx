import { css, useTheme } from '@emotion/react';

import { SubTitle, IntroductionTitle, SectionTitle } from 'client/components';

import * as S from './style';

const Section6 = () => {
  const theme = useTheme();
  return (
    <S.Layout>
      <SectionTitle>
        <IntroductionTitle pointColor='lime'>
          꿈 끼 업(UP) 고(GO) 특색사업
        </IntroductionTitle>
        <SubTitle>꿈˙끼˙업(UP)˙고(GO)</SubTitle>
      </SectionTitle>
      <S.BusinessLayout>
        <S.Business>
          <S.ImgWrapper />
          <S.Title
            css={css`
              color: ${theme.color.primary['sky']};
              background-color: ${theme.color.primary['sky']}2A;
            `}
          >
            마음의 확장
          </S.Title>
          <S.SubTitle>인성, 독서, 인문학 활동</S.SubTitle>
        </S.Business>

        <S.Business>
          <S.ImgWrapper />
          <S.Title
            css={css`
              color: ${theme.color.primary['lime']};
              background-color: ${theme.color.primary['lime']}2A;
            `}
          >
            시야의 확장
          </S.Title>
          <S.SubTitle>국내외 IT 기업탐방 활동</S.SubTitle>
        </S.Business>
        <S.Business>
          <S.ImgWrapper />
          <S.Title
            css={css`
              color: ${theme.color.primary['navy']};
              background-color: ${theme.color.primary['navy']}2A;
            `}
          >
            체력의 확장
          </S.Title>
          <S.SubTitle>뉴스포츠, 해양스포츠 활동</S.SubTitle>
        </S.Business>
      </S.BusinessLayout>
    </S.Layout>
  );
};

export default Section6;
