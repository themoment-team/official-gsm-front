import React, { useState } from 'react';

import InfoWindow from './InfoWindow';
import * as S from './style';

interface OverlayProps {
  latitude: number;
  longitude: number;
  onCloseInfoWindow: () => void;
}

const Overlay: React.FC<OverlayProps> = ({
  latitude,
  longitude,
  onCloseInfoWindow,
}) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isInfoWindowVisible, setIsInfoWindowVisible] = useState(false);

  const ChevronClick = () => {
    setIsInfoWindowVisible(!isInfoWindowVisible);
    setIsOverlayVisible(false);
  };

  return (
    <S.CustomOverlay>
      {isOverlayVisible && (
        <>
          <S.Default>
            <S.MarkerIcon>
              <img src='/images/about/location/svg/MarkerIcon.svg' />
            </S.MarkerIcon>
            <S.Title>광주소프트웨어 마이스터고등학교</S.Title>
            <S.Chevron onClick={ChevronClick}>
              <img src='/images/about/location/svg/ChevronIcon.svg' />
            </S.Chevron>
          </S.Default>
          <S.Triangle />
        </>
      )}
      {isInfoWindowVisible && (
        <InfoWindow
          latitude={latitude}
          longitude={longitude}
          onClose={() => {
            setIsInfoWindowVisible(false);
            onCloseInfoWindow();
          }}
        />
      )}
    </S.CustomOverlay>
  );
};

export default Overlay;
