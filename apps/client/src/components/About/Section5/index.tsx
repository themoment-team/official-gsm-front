/** @jsxImportSource @emotion/react */

'use client';

import { useGetWindowWidth } from 'client/hooks';

import DesktopResponsive from './DesktopResponsive';
import MobileResponsive from './MobileResponsive';

const Section5 = () => {
  const width = useGetWindowWidth();

  return width > 800 ? <DesktopResponsive /> : <MobileResponsive />;
};

export default Section5;
