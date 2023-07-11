import { MobileResponsive } from 'client/components';
import { useGetWindowWidth } from 'client/hooks';

import DesktopResponsive from './DesktopResponsive';

const Section5 = () => {
  const width = useGetWindowWidth();

  return <>{width > 800 ? <DesktopResponsive /> : <MobileResponsive />}</>;
};

export default Section5;
