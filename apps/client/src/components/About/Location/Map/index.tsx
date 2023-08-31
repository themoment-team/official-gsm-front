'use client';

import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';

import Overlay from './Overlay';

interface MapProps {
  latitude: number;
  longitude: number;
}

declare global {
  interface Window {
    kakao: any;
  }
}

function SchoolMap({ latitude, longitude }: MapProps) {
  const imageSrc = '/images/about/Location/Marker.png';

  return (
    <>
      <Map
        center={{ lat: latitude, lng: longitude }}
        style={{ width: '100%', height: '100%' }}
      >
        <MapMarker
          position={{ lat: latitude, lng: longitude }}
          image={{
            src: imageSrc,
            size: { width: 60, height: 60 },
          }}
        />
        <CustomOverlayMap position={{ lat: latitude, lng: longitude }}>
          <Overlay latitude={latitude} longitude={longitude} />
        </CustomOverlayMap>
      </Map>
    </>
  );
}

export default SchoolMap;
