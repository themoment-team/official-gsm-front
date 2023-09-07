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
  const markerCoords = { lat: latitude, lng: longitude };
  return (
    <>
      <Map center={markerCoords} style={{ width: '100%', height: '100%' }}>
        <MapMarker
          position={markerCoords}
          image={{
            src: imageSrc,
            size: { width: 60, height: 60 },
          }}
        />
        <CustomOverlayMap position={markerCoords}>
          <Overlay latitude={latitude} longitude={longitude} />
        </CustomOverlayMap>
      </Map>
    </>
  );
}

export default SchoolMap;
