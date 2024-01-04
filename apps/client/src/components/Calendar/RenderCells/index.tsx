'use client';

import React from 'react';

import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameDay,
  addDays,
  parse,
} from 'date-fns';

import * as S from './style';

interface RenderCellsProps {
  currentMonth: Date;
  selectedDate: Date;
  onDateClick: (day: Date) => void;
}

export const RenderCells: React.FC<RenderCellsProps> = ({
  currentMonth,
  selectedDate,
  onDateClick,
}) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows: JSX.Element[] = [];
  let days: JSX.Element[] = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      formattedDate =
        formattedDate.length === 1 ? `0${formattedDate}` : formattedDate;

      days.push(
        <div
          key={formattedDate}
          onClick={() => onDateClick(parse(formattedDate, 'd', new Date()))}
        >
          <S.Day
            remainDays={
              format(currentMonth, 'M') !== format(day, 'M') ? true : false
            }
            isToday={isSameDay(day, selectedDate)}
          >
            {formattedDate}
          </S.Day>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(<S.RowDay key={day.toISOString()}>{days}</S.RowDay>);
    days = [];
  }

  return <S.DayBox className='body'>{rows}</S.DayBox>;
};
