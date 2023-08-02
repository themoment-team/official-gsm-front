'use client';

import { useEffect } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

import { pageview } from 'client/libs';

const NavigationEvents = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;

    pageview(window.location.pathname + url);
  }, [pathname, searchParams]);

  return null;
};

export default NavigationEvents;
