import Image from 'next/image';

import * as I from 'client/assets';

import * as S from './style';

const CurriculumCards = () => {
  const CurriculumCard = [
    {
      isSmall: true,
      bgColor: '#0033651A',
      color: '#003365',
      title: 'AI 시대를 선도할',
      subTitle: 'GSM 교육과정 운영',
      cardPosition: {
        top: '7.9375rem',
        right: '2.1875rem',
      },
      img: {
        src: I.MounTainIcon,
        width: 234,
        height: 220,
      },
    },
    {
      isSmall: false,
      bgColor: '#F8FADB',
      color: '#C8CE2B',
      title: '직업군에 최적화된',
      subTitle: '취업역량 강화',
      cardPosition: {
        top: '5.4375rem',
        right: '2.1875rem',
      },
      img: {
        src: I.PieChartIcon,
        width: 290,
        height: 260,
      },
    },
    {
      isSmall: false,
      bgColor: '#7ACDF433',
      color: '#7ACDF4',
      title: '산업수요 변화에 맞춘',
      subTitle: '현장실무능력 향상',
      cardPosition: {
        top: '5.9375rem',
        right: '4.1875rem',
      },
      img: {
        src: I.GlobeIcon,
        width: 360,
        height: 252,
      },
    },
    {
      isSmall: true,
      bgColor: '#FF98771A',
      color: '#FF9877',
      title: '자율성과 자기 주도성으로',
      subTitle: '학습 능력 신장',
      cardPosition: {
        top: '7.9375rem',
        right: '0',
      },
      img: {
        src: I.RocketIcon,
        width: 240,
        height: 220,
      },
    },
  ];

  return (
    <S.SectionCardWrapper>
      {CurriculumCard.map((index, id) => (
        <S.CardTemplate
          key={id}
          isSmall={index.isSmall}
          bgColor={index.bgColor}
        >
          <S.CardTitle color={index.color}>
            {index.title}
            <br />
            <span>{index.subTitle}</span>
          </S.CardTitle>
          <S.CardImg
            top={index.cardPosition.top}
            right={index.cardPosition.right}
          >
            <Image
              src={index.img.src}
              width={index.img.width}
              height={index.img.height}
              alt='dd'
            />
          </S.CardImg>
        </S.CardTemplate>
      ))}
    </S.SectionCardWrapper>
  );
};

export default CurriculumCards;