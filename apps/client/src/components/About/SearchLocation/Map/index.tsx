import { useEffect } from 'react';

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
  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
        };
        const map = new window.kakao.maps.Map(container, options);

        const markerPosition = new window.kakao.maps.LatLng(
          latitude,
          longitude
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        const infowindow = new window.kakao.maps.InfoWindow({
          content:
            '<div style="width: 250px; padding: 10px;">광주 소프트웨어마이스터고등학교</div>',
          removable: true,
        });

        window.kakao.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
        });

        marker.setMap(map);
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);

    return () => mapScript.removeEventListener('load', onLoadKakaoMap);
  }, [latitude, longitude]);

  return <MapContainer id='map' />;
}

const MapContainer = styled.div`
  margin: 32px 0px;
  aspect-ratio: 320 / 220;
`;

export default Map;
