'use client';

import { CalendarIcon } from 'client/assets';

import * as S from './style';

interface EventCalendarProps {
  event: string[];
}

const EventCalendar: React.FC<EventCalendarProps> = ({ event }) => (
  <S.EventCalendar>
    <S.Title>
      이벤트
      <CalendarIcon />
    </S.Title>
    {event.map((subtitle, index) => (
      <S.Subtitle key={index}>
        <S.Point />
        <p>{subtitle}</p>
      </S.Subtitle>
    ))}
  </S.EventCalendar>
);

export default EventCalendar;
