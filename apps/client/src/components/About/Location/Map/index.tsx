'use client';

import { useState } from 'react';

import Script from 'next/script';

import styled from '@emotion/styled';

import { Map, MapMarker } from 'react-kakao-maps-sdk';

import InfoWindow from './InfoWindow';
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
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState<boolean>(false);
  const imageSrc = '/images/about/Location/Marker.png';

  // const onLoadKakaoMap = () => {
  //   window.kakao.maps.load(() => {
  //     const options = {
  //       center: new window.kakao.maps.LatLng(latitude, longitude),
  //     };

  //     const map = new window.kakao.maps.Map(containerRef.current, options);

  //     const imageSrc = '/images/about/Location/Marker.png',
  //       imageSize = new window.kakao.maps.Size(60, 60);
  //     const markerImage = new window.kakao.maps.MarkerImage(
  //       imageSrc,
  //       imageSize
  //     );
  //     const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);

  //     const marker = new window.kakao.maps.Marker({
  //       position: markerPosition,
  //       image: markerImage,
  //     });

  //     //   customOverlayContent.innerHTML = `
  //     //   <div class="customOverlay">
  //     //     <div class="default">
  //     //       <div class="markerIcon">
  //     //       <img src="/images/about/location/svg/MarkerIcon.svg" />
  //     //       </div>
  //     //       <div class="title">광주소프트웨어 마이스터고등학교</div>
  //     //       <div class="chevron">
  //     //       <img src="/images/about/location/svg/ChevronIcon.svg" />
  //     //       </div>
  //     //     </div>
  //     //     <div class="triangle"></div>
  //     //   </div>
  //     // `;

  //     customOverlayContent.current.parentElement &&
  //       ReactDOM.createPortal(
  //         <Overlay />,
  //         customOverlayContent.current.parentElement
  //       );

  //     const customOverlay = new window.kakao.maps.CustomOverlay({
  //       position: markerPosition,
  //       content: customOverlayContent.current,
  //     });

  //     let isVisible = false;

  //     window.kakao.maps.event.addListener(marker, 'mouseover', function () {
  //       customOverlay.setMap(map);
  //       const chevronElement = customOverlayContent.current.querySelector(
  //         '.chevron'
  //       ) as HTMLElement | null;

  //       if (chevronElement) {
  //         chevronElement.addEventListener('click', () => {
  //           const defaultElement = customOverlayContent.current.querySelector(
  //             '.default'
  //           ) as HTMLElement | null;
  //           if (defaultElement) {
  //             defaultElement.classList.toggle('hidden');
  //           }
  //           if (!isVisible) {
  //             const infoWindowElement = document.createElement('div');
  //             infoWindowElement.className = 'customOverlay';
  //             infoWindowElement.innerHTML = `
  //             <div class="next">
  //               <div class="box">
  //                 <div class="close">
  //                 <img src="/images/about/location/svg/CloseIcon.svg" />
  //                 </div>
  //                 <div class="contentBox">
  //                   <div class="title">광주소프트웨어마이스터고등학교</div>
  //                   <div class="address">광주 광산구 상무대로 312 </div>
  //                   <div> (우) 62423&nbsp;&nbsp;(지번) 송정동 710-3</div>
  //                   <div class="number">062-949-6800</div>
  //                 </div>
  //                 <div class="bottomBox">
  //                   <div class="iconBox">
  //                     <div class="icon roadView">
  //                       <img src="/images/about/location/svg/SmallMarkerIcon.svg" />
  //                     </div>
  //                     <div class="icon copyLink">
  //                       <img src="/images/about/location/svg/CopyLinkIcon.svg" />
  //                     </div>
  //                   </div>
  //                   <div class="locationBtn">길찾기</div>
  //                 </div>
  //               </div>
  //             <div class="triangle"></div>
  //             </div>
  //             `;
  //             customOverlayContent.current.appendChild(infoWindowElement);
  //             const closeButton = infoWindowElement.querySelector(
  //               '.close'
  //             ) as HTMLElement | null;
  //             const locationButton = infoWindowElement.querySelector(
  //               '.locationBtn'
  //             ) as HTMLElement | null;
  //             const RoadViewButton = infoWindowElement.querySelector(
  //               '.roadView'
  //             ) as HTMLElement | null;
  //             const CopyLinkButton = infoWindowElement.querySelector(
  //               '.copyLink'
  //             ) as HTMLElement | null;

  //             if (closeButton) {
  //               closeButton.addEventListener('click', () => {
  //                 customOverlay.setMap(null);
  //                 isVisible = false;

  //                 if (infoWindowElement.parentElement) {
  //                   infoWindowElement.parentElement.removeChild(
  //                     infoWindowElement
  //                   );
  //                 }
  //               });
  //             }
  //             if (locationButton) {
  //               locationButton.addEventListener('click', () => {
  //                 const kakaoMapLink = `https://map.kakao.com/link/to/광주소프트웨어마이스터고등학교,${latitude},${longitude}`;
  //                 window.open(kakaoMapLink, '_blank');
  //               });
  //             }
  //             if (RoadViewButton) {
  //               RoadViewButton.addEventListener('click', () => {
  //                 const kakaoMapLink = `https://map.kakao.com/link/roadview/${latitude},${longitude}`;
  //                 window.open(kakaoMapLink, '_blank');
  //               });
  //             }
  //             if (CopyLinkButton) {
  //               CopyLinkButton.addEventListener('click', () => {
  //                 const linkToCopy = 'http://kko.to/CtKpnV33Dj';
  //                 navigator.clipboard.writeText(linkToCopy).then(() => {
  //                   alert('링크가 복사되었습니다');
  //                 });
  //               });
  //             }
  //             isVisible = true;
  //           }
  //         });
  //       }
  //     });
  //     marker.setMap(map);
  //   });
  // };

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
          onMouseOver={() => setIsInfoWindowOpen(true)}
          onMouseOut={() => setIsInfoWindowOpen(false)}
        >
          {isInfoWindowOpen ? <InfoWindow /> : <Overlay />}
        </MapMarker>
      </Map>
    </>
  );
}

const MapContainer = styled.div`
  width: 77.5rem;
  height: 25rem;
  .customOverlay {
    position: absolute;
    bottom: 5rem;
    right: -11.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .triangle {
      width: 0;
      height: 0;
      border-top: 1rem solid ${({ theme }) => theme.color.white};
      border-left: 0.5rem solid transparent;
      border-right: 0.5rem solid transparent;
    }
    .title {
      color: #424242;
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.5rem;
    }
    .default {
      &.hidden {
        display: none;
      }
      background: ${({ theme }) => theme.color.white};
      border-radius: 3.125rem;
      width: 22.4375rem;
      height: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .markerIcon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        background-color: #7acdf4;
        border-radius: 100%;
      }
      .chevron {
        cursor: pointer;
      }
    }
    .next {
      width: 21.375rem;
      height: 12.5rem;
      background: ${({ theme }) => theme.color.white};
      border-radius: 0.75rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .triangle {
        position: relative;
        top: 0.9375rem;
        width: 0;
        height: 0;
        border-top: 1rem solid ${({ theme }) => theme.color.white};
        border-left: 0.5rem solid transparent;
        border-right: 0.5rem solid transparent;
      }
      .box {
        padding: 1rem;
        width: 21.375rem;
        height: 12.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .close {
          display: flex;
          position: absolute;
          right: 0.75rem;
        }
        .contentBox {
          width: 13rem;
          height: 5.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #424242;
          font-size: 0.75rem;
          font-style: normal;
          font-weight: 400;
          line-height: 1.25rem;
          .address {
            font-size: 0.875rem;
          }
          .number {
            color: ${({ theme }) => theme.color.sub.blue};
          }
        }
        .bottomBox {
          position: relative;
          bottom: 0;
          height: 2.25rem;
          display: flex;
          justify-content: space-between;
          .locationBtn {
            display: flex;
            width: 5.3125rem;
            height: 2.25rem;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            background: ${({ theme }) => theme.color.primary.navy};
            border-radius: 0.5rem;
            color: var(--white, #fff);
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 600;
            line-height: 1.25rem;
          }
          .iconBox {
            width: 4.5rem;
            height: 2rem;
            display: flex;
            justify-content: space-between;
            .icon {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 2rem;
              height: 2rem;
              border-radius: 100%;
              background: rgba(0, 51, 101, 0.12);
            }
          }
        }
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

export default SchoolMap;
