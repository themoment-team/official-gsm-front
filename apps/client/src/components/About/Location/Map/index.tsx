import { useRef } from 'react';

import Script from 'next/script';

import styled from '@emotion/styled';

interface MapProps {
  latitude: number;
  longitude: number;
}

declare global {
  interface Window {
    kakao: any;
  }
}

function Map({ latitude, longitude }: MapProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const onLoadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
      };

      const map = new window.kakao.maps.Map(containerRef.current, options);

      const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);

      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      const infoWindow = new window.kakao.maps.InfoWindow({
        content:
          '<div style="width: 250px; padding: 10px;">광주소프트웨어마이스터고등학교</div>',
        removable: true,
      });

      window.kakao.maps.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker);
      });

      marker.setMap(map);
    });
  };

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`}
        onLoad={onLoadKakaoMap}
      />
      <MapContainer id='map' ref={containerRef} />
    </>
  );
}

const MapContainer = styled.div`
  width: 1240px;
  height: 400px;
  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
  }
  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: calc(100vw - 7.5rem);
  }
`;

export default Map;
