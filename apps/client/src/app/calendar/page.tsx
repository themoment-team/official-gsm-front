import { Footer, Header } from 'client/components';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  description:
    '광주소프트웨어마이스터고등학교 공식 홈페이지 학사 일정 페이지입니다.',
  title: { absolute: '학사 일정' },
  openGraph: {
    title: '학사 일정',
    description:
      '광주소프트웨어마이스터고등학교 공식 홈페이지 학사 일정 페이지입니다.',
    url: 'https://official.hellogsm.kr/calendar',
  },
};

export default function CalendarPage() {
  return (
    <>
      <Header segment='calendar' />
      <Footer />
    </>
  );
}
