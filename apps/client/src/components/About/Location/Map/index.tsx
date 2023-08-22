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
          '<div class="hi"> <div class="locationContent"><h1>광주소프트웨어마이스터고등학교</h1><br/>광주 광산구 상무대로 312(우) 62423(지번) 송정동 710-3<br/>062-949-6800</div><div class="IconBox"><div class="icon"></div><div class="icon"></div><div class="icon"></div></div></div>',
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
  width: 77.5rem;
  height: 25rem;
  .hi {
    width: 342px;
    height: 200px;
    background: #ffffff;
    border-radius: 12px;
    .locationContent {
      width: 208px;
      height: 92px;
      h1 {
        color: #212121;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
      }
    }
    .IconBox {
      .icon {
        width: 32px;
        height: 32px;
        border-radius: 100%;
        background: pink;
      }
    }
  }
  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
  }
  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: calc(100vw - 7.5rem);
  }
`;

export default Map;
