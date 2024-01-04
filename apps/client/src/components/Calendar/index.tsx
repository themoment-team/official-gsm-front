import React, { useState } from 'react';

import { addMonths, subMonths, subYears, addYears } from 'date-fns';

import { RenderCells } from './RenderCells';
import { RenderDays } from './RenderDays';
import { RenderHeader } from './RenderHeader';
import * as S from './style';

export const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevYear = () => {
    setCurrentMonth(subYears(currentMonth, 1));
  };

  const nextYear = () => {
    setCurrentMonth(addYears(currentMonth, 1));
  };

  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  return (
    <S.Calendar>
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        prevYear={prevYear}
        nextYear={nextYear}
      />
      <S.ContentBox>
        <S.CalendarBox>
          <RenderDays />
          <RenderCells
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            onDateClick={onDateClick}
          />
        </S.CalendarBox>
      </S.ContentBox>
    </S.Calendar>
  );
};
