import { SubTitle, IntroductionTitle, SectionTitle } from 'client/components';
import type { BusinessCardItemType } from 'client/types/introduce';

import BusinessCard from './BusinessCard';
import * as S from './style';

const Section6 = () => {
  const BusinessCardItem: BusinessCardItemType[] = [
    {
      title: '마음의 확장',
      subTitle: '인성, 독서, 인문학 활동',
      color: 'sky',
    },
    {
      title: '시야의 확장',
      subTitle: '국내외 IT 기업탐방 활동',
      color: 'lime',
    },
    {
      title: '체력의 확장',
      subTitle: '뉴스포츠, 해양스포츠 활동',
      color: 'navy',
    },
  ];

  return (
    <S.Layout>
      <SectionTitle>
        <IntroductionTitle pointColor='lime'>
          꿈 끼 업(UP) 고(GO) 특색사업
        </IntroductionTitle>
        <SubTitle>꿈˙끼˙업(UP)˙고(GO)</SubTitle>
      </SectionTitle>
      <S.BusinessLayout>
        {BusinessCardItem.map((v, index) => (
          <BusinessCard {...v} key={index} />
        ))}
      </S.BusinessLayout>
    </S.Layout>
  );
};

export default Section6;
