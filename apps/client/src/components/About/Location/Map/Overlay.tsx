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

  const onCustomOverlayClick = () => {
    setIsInfoWindowVisible(!isInfoWindowVisible);
    setIsCustomOverlayVisible(!isCustomOverlayVisible);
  };

  return (
    <S.CustomOverlay onClick={onCustomOverlayClick}>
      <S.Default isVisible={isCustomOverlayVisible}>
        <S.MarkerIcon>
          <Image
            alt='markerIcon'
            src='/images/about/location/svg/MarkerIcon.svg'
          />
        </S.MarkerIcon>
        <S.Title>광주소프트웨어 마이스터고등학교</S.Title>
        <S.Chevron>
          <Image
            alt='chevronIcon'
            src='/images/about/location/svg/ChevronIcon.svg'
          />
        </S.Chevron>
      </S.Default>
      <S.Triangle />
      {isInfoWindowVisible && (
        <InfoWindow
          latitude={latitude}
          longitude={longitude}
          onClose={() => setIsInfoWindowVisible(false)}
        />
      )}
    </S.CustomOverlay>
  );
};

export default Overlay;
