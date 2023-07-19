'use client';

import { useEffect } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

import * as gtag from 'client/lib/gtag';

const NavigationEvents = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    if (gtag.GA_TRACKING_ID)
      window.gtag('config', gtag.GA_TRACKING_ID, {
        page_path: window.location.pathname + url,
      });
  }, [pathname, searchParams]);

  return null;
};

export default NavigationEvents;
