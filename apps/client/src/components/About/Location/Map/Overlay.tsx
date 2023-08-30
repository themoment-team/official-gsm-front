import React, { useState } from 'react';

import InfoWindow from './InfoWindow';
import * as S from './style';

interface OverlayProps {
  latitude: number;
  longitude: number;
}

const Overlay: React.FC<OverlayProps> = ({ latitude, longitude }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isInfoWindowVisible, setIsInfoWindowVisible] = useState(false);

  const ChevronClick = () => {
    setIsInfoWindowVisible(!isInfoWindowVisible);
    setIsOverlayVisible(false);
  };

  const closeOverlayAndInfoWindow = () => {
    setIsInfoWindowVisible(false);
    setIsOverlayVisible(false);
  };

  return (
    <S.CustomOverlay>
      {isOverlayVisible && (
        <>
          <S.Default className='default'>
            <S.MarkerIcon className='markerIcon'>
              <img src='/images/about/location/svg/MarkerIcon.svg' />
            </S.MarkerIcon>
            <S.Title className='title'>광주소프트웨어 마이스터고등학교</S.Title>
            <S.Chevron className='chevron' onClick={ChevronClick}>
              <img src='/images/about/location/svg/ChevronIcon.svg' />
            </S.Chevron>
          </S.Default>
          <S.Triangle className='triangle' />
        </>
      )}
      {isInfoWindowVisible && (
        <InfoWindow
          latitude={latitude}
          longitude={longitude}
          onClose={closeOverlayAndInfoWindow}
        />
      )}
    </S.CustomOverlay>
  );
};

export default Overlay;
