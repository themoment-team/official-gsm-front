import Image from 'next/image';

import * as I from 'client/assets';
import { IntroductionTitle } from 'client/components';

import * as S from './style';

const Section4 = () => (
  <S.SectionWrapper>
    <S.SectionContentWraper>
      <S.SectionTitleWrap>
        <IntroductionTitle
          pointColor='lime'
          pointSize='18px'
          pointPosition='top'
        >
          소프트웨어 인재 양성을 위한 교육 과정
        </IntroductionTitle>
        <S.SectionSubTitle>
          스스로 삶의 힘을 키우고 상생의정신을 함양하는 학교
        </S.SectionSubTitle>
      </S.SectionTitleWrap>
      <S.SectionCardWrapper>
        <S.SmallCard bgColor='#0033651A'>
          <S.CardTitle color='#003365'>
            AI 시대를 선도할
            <br />
            <span>GSM 교육과정 운영</span>
          </S.CardTitle>
          <S.CardImg top='127px' right='35px'>
            <Image src={I.MounTainIcon} alt='dd' width={234} height={220} />
          </S.CardImg>
        </S.SmallCard>
        <S.BigCardTemplate bgColor='#F8FADB'>
          <S.CardTitle color='#C8CE2B'>
            직업군에 최적화된
            <br />
            <span>취업역량 강화</span>
          </S.CardTitle>
          <S.CardImg top='68px' right='35px'>
            <Image src={I.PieChartIcon} alt='dd' />
          </S.CardImg>
        </S.BigCardTemplate>
        <S.BigCardTemplate bgColor='#7ACDF433'>
          <S.CardTitle color='#7ACDF4'>
            산업수요 변화에 맞춘
            <br />
            <span>현장실무능력 향상</span>
          </S.CardTitle>
          <S.CardImg top='95px' right='67px'>
            <Image src={I.GlobeIcon} alt='dd' width={360} height={252} />
          </S.CardImg>
        </S.BigCardTemplate>
        <S.SmallCard bgColor='#FF98771A'>
          <S.CardTitle color='#FF9877'>
            자율성과 자기 주도성으로
            <br />
            <span>학습 능력 신장</span>
          </S.CardTitle>
          <S.CardImg top='127px' right='0px'>
            <Image src={I.RocketIcon} alt='dd' width={240} height={220} />
          </S.CardImg>
        </S.SmallCard>
      </S.SectionCardWrapper>
    </S.SectionContentWraper>
  </S.SectionWrapper>
);

export default Section4;
