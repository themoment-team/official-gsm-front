'use client';

import { useState } from 'react';

import Script from 'next/script';

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
  const [isInfoWindowVisible, setIsInfoWindowVisible] =
    useState<boolean>(false);
  const imageSrc = '/images/about/Location/Marker.png';

  const handleMarkerClick = () => {
    setIsInfoWindowVisible(true);
  };

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=services,clusterer`}
        type='text/javascript'
        strategy='beforeInteractive'
      />
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
          onMouseOver={handleMarkerClick}
        />
        {isInfoWindowVisible && (
          <CustomOverlayMap position={{ lat: latitude, lng: longitude }}>
            <Overlay
              latitude={latitude}
              longitude={longitude}
              onCloseInfoWindow={() => setIsInfoWindowVisible(false)}
            />
          </CustomOverlayMap>
        )}
      </Map>
    </>
  );
}

export default SchoolMap;
