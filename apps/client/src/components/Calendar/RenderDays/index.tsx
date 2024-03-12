import React from 'react';

import * as S from './style';

export const RenderDays: React.FC = () => {
  const days = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];

  return (
    <S.WeekBox>
      {days.map((day, index) => (
        <S.Week key={index}>{day}</S.Week>
      ))}
    </S.WeekBox>
  );
};
