'use client';

import { CategoryHeader, PopUpCard } from 'client/components';

import * as S from './style';

const popUpList = [
  {
    imgUrl: 'https://cdn.aitimes.kr/news/photo/202303/27617_41603_044.jpg',
    title:
      '2023년 중학생 대상 학교 방문 체험 프로그램 2023년 중학생 학교 방문합니다',
  },
  {
    imgUrl: 'https://cdn.aitimes.kr/news/photo/202303/27617_41603_044.jpg',
    title:
      '2023년 중학생 대상 학교 방문 체험 프로그램 2023년 중학생 학교 방문합니다',
  },
  {
    imgUrl: 'https://cdn.aitimes.kr/news/photo/202303/27617_41603_044.jpg',
    title:
      '2023년 중학생 대상 학교 방문 체험 프로그램 2023년 중학생 학교 방문합니다',
  },
  {
    imgUrl: 'https://cdn.aitimes.kr/news/photo/202303/27617_41603_044.jpg',
    title:
      '2023년 중학생 대상 학교 방문 체험 프로그램 2023년 중학생 학교 방문합니다',
  },
  {
    imgUrl: 'https://cdn.aitimes.kr/news/photo/202303/27617_41603_044.jpg',
    title:
      '2023년 중학생 대상 학교 방문 체험 프로그램 2023년 중학생 학교 방문합니다',
  },
  {
    imgUrl: 'https://cdn.aitimes.kr/news/photo/202303/27617_41603_044.jpg',
    title:
      '2023년 중학생 대상 학교 방문 체험 프로그램 2023년 중학생 학교 방문합니다',
  },
];

const PopUpZone = () => (
  <S.PopUpZoneWrapper>
    <CategoryHeader category='POPUP_ZONE' />
    <S.PopUpList>
      {popUpList.map((popUp, i) => (
        <PopUpCard
          key={i /*추후 유니크한 값으로 변경*/}
          index={i + 1}
          imgUrl={popUp.imgUrl}
          title={popUp.title}
        />
      ))}
    </S.PopUpList>
  </S.PopUpZoneWrapper>
);

export default PopUpZone;
