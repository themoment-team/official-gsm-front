import { DesktopResponsive, MobileResponsive } from 'client/components';
import { useGetWindowWidth } from 'client/hooks';

const Section5 = () => {
  const width = useGetWindowWidth();

  return <>{width > 800 ? <DesktopResponsive /> : <MobileResponsive />}</>;
};

export default Section5;
