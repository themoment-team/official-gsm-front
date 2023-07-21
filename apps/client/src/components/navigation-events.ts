'use client';

import { useEffect } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

import * as gtag from 'client/lib/gtag';

const NavigationEvents = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    gtag.pageview(window.location.pathname + url);
  }, [pathname, searchParams]);

  return null;
};

export default NavigationEvents;
