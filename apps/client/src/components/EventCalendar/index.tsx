'use client';

import { ScheduleIcon } from 'client/assets';

import * as S from './style';

interface EventCalendarProps {
  event: string[];
}

const EventCalendar: React.FC<EventCalendarProps> = ({ event }) => (
  <S.EventCalendar>
    <S.Title>
      이벤트
      <ScheduleIcon />
    </S.Title>
    {event.map((subtitle, index) => (
      <S.SubtitleBox key={index}>
        <S.Point />
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.SubtitleBox>
    ))}
  </S.EventCalendar>
);

export default EventCalendar;
