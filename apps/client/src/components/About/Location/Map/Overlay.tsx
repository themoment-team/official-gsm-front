import React, { useState } from 'react';

import Image from 'next/image';

import InfoWindow from './InfoWindow';
import * as S from './style';

interface OverlayProps {
  latitude: number;
  longitude: number;
}

const Overlay: React.FC<OverlayProps> = ({ latitude, longitude }) => {
  const [isInfoWindowVisible, setIsInfoWindowVisible] = useState(false);
  const [isCustomOverlayVisible, setIsCustomOverlayVisible] = useState(true);

  const isOverlay = () => {
    setIsInfoWindowVisible(!isInfoWindowVisible);
    setIsCustomOverlayVisible(!isCustomOverlayVisible);
  };

  const onCloseInfoWindow = () => {
    setIsInfoWindowVisible(false);
    setIsCustomOverlayVisible(true);
  };

  return (
    <div>
      {isCustomOverlayVisible && (
        <S.CustomOverlay>
          <S.Default onClick={isOverlay}>
            <S.MarkerIcon>
              <Image
                width={20}
                height={20}
                alt='markerIcon'
                src='/images/about/location/svg/MarkerIcon.svg'
              />
            </S.MarkerIcon>
            <S.Title>광주소프트웨어마이스터고등학교</S.Title>
            <S.Chevron>
              <Image
                width={20}
                height={20}
                alt='chevronIcon'
                src='/images/about/location/svg/ChevronIcon.svg'
              />
            </S.Chevron>
          </S.Default>
          <S.Triangle />
        </S.CustomOverlay>
      )}
      {isInfoWindowVisible && (
        <InfoWindow
          latitude={latitude}
          longitude={longitude}
          onClose={onCloseInfoWindow}
        />
      )}
    </div>
  );
};

export default Overlay;
