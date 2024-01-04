import React from 'react';

import { format } from 'date-fns';

import * as I from 'client/assets';

import * as S from './style';

interface RenderHeaderProps {
  currentMonth: Date;
  prevMonth: () => void;
  nextMonth: () => void;
  prevYear: () => void;
  nextYear: () => void;
}

export const RenderHeader: React.FC<RenderHeaderProps> = ({
  currentMonth,
  prevMonth,
  nextMonth,
  prevYear,
  nextYear,
}) => (
  <S.HeaderBox>
    <div onClick={prevYear}>
      <I.DoubleChevron turn={'right'} />
    </div>
    <div onClick={prevMonth}>
      <I.SmallChevron turn={'right'} />
    </div>
    <S.Title>
      {format(currentMonth, 'yyyy')}년 {format(currentMonth, 'M')}월
    </S.Title>
    <div onClick={nextMonth}>
      <I.SmallChevron turn={'left'} />
    </div>
    <div onClick={nextYear}>
      <I.DoubleChevron turn={'left'} />
    </div>
  </S.HeaderBox>
);
