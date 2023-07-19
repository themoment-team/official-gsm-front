import {
  PromotionVideo,
  Footer,
  SlotMachine,
  MainPageContent,
  MainPageHeader,
} from 'client/components';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: '광주소프트웨어마이스터고등학교 공식 홈페이지입니다.',
  openGraph: {
    title: '광주소프트웨어마이스터고등학교',
    description: '광주소프트웨어마이스터고등학교 공식 홈페이지입니다.',
  },
};

export default function Home() {
  return (
    <>
      <MainPageHeader />
      <PromotionVideo />
      <SlotMachine />
      <MainPageContent />
      <Footer />
    </>
  );
}
