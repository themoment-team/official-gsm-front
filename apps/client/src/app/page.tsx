import { useEffect } from 'react';

import { useRouter } from 'next/router';

import {
  PromotionVideo,
  Footer,
  SlotMachine,
  MainPageContent,
  MainPageHeader,
} from 'client/components';
import * as gtag from 'client/lib/gtag';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: '광주소프트웨어마이스터고등학교 공식 홈페이지',
  openGraph: {
    title: '광주소프트웨어마이스터고등학교',
    description: '광주소프트웨어마이스터고등학교 공식 홈페이지',
  },
};

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
