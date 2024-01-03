/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

import * as I from 'client/assets';

import * as S from './style';

interface CalendarProps {}

const getDaysInMonth = (year: number, month: number) => {
  const lastDay = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: lastDay }, (_, i) => i + 1);
};

const getStartDayOfWeek = (year: number, month: number) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const dayOfWeek = firstDayOfMonth.getDay();
  return dayOfWeek === 0 ? 7 : dayOfWeek;
};

const padZero = (num: number) => (num < 10 ? `0${num}` : num);

const week = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar: React.FC<CalendarProps> = ({}) => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const goToPrevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevYear) =>
      currentMonth === 0 ? prevYear - 1 : prevYear
    );
  };

  const goToNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear((prevYear) =>
      currentMonth === 11 ? prevYear + 1 : prevYear
    );
  };

  const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
  const startDayOfWeek = getStartDayOfWeek(currentYear, currentMonth);

  // Calculate remaining days in the current month
  const remainingDaysInCurrentMonth = daysInCurrentMonth.slice(
    startDayOfWeek - 1
  );

  // Calculate the last row of the previous month
  const prevMonthLastRowStart = getDaysInMonth(
    currentYear,
    currentMonth === 0 ? 11 : currentMonth - 1
  ).slice(-startDayOfWeek);

  // Calculate the starting days of the next month
  const nextMonthStart = getDaysInMonth(
    currentYear,
    currentMonth === 11 ? 0 : currentMonth + 1
  ).slice(0, 7 - remainingDaysInCurrentMonth.length);

  // Combine days of the previous month, current month, and next month
  const combinedDays = prevMonthLastRowStart.concat(
    remainingDaysInCurrentMonth,
    nextMonthStart
  );

  // Slice the combined days to display 7 rows and 5 columns
  const slicedDays = combinedDays.slice(0, 35);

  return (
    <S.Calendar>
      <S.Title>{`${currentYear}년 ${currentMonth + 1}월`}</S.Title>
      <S.ContentBox>
        <div className='arrow' onClick={goToPrevMonth}>
          <I.ChevronIcon />
        </div>
        <S.CalendarBox>
          <S.WeekBox>
            {week.map((day, index) => (
              <S.Week key={index} className='day'>
                {day}
              </S.Week>
            ))}
          </S.WeekBox>
          <S.DayBox>
            {slicedDays.map((day, index) => (
              <S.Day
                key={index}
                className={`date ${
                  index < prevMonthLastRowStart.length
                    ? 'empty lastDay'
                    : 'lastDay'
                }`}
                isToday={
                  currentYear === currentDate.getFullYear() &&
                  currentMonth === currentDate.getMonth() &&
                  index >= prevMonthLastRowStart.length &&
                  index <
                    prevMonthLastRowStart.length +
                      remainingDaysInCurrentMonth.length &&
                  day === currentDate.getDate()
                }
              >
                {padZero(day)}
              </S.Day>
            ))}
          </S.DayBox>
          <div className='arrow' onClick={goToNextMonth}>
            <I.ChevronIcon />
          </div>
        </S.CalendarBox>
      </S.ContentBox>
    </S.Calendar>
  );
};

export default Calendar;
