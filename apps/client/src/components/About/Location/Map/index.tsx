import { useRef, useEffect, useCallback, useState } from 'react';

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
  const closeButtonRef = useRef<HTMLDivElement | null>(null);
  const locationButtonRef = useRef<HTMLDivElement | null>(null);
  const roadViewButtonRef = useRef<HTMLDivElement | null>(null);
  const copyLinkButtonRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const onLoadKakaoMap = useCallback(() => {
    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
      };

      const map = new window.kakao.maps.Map(containerRef.current, options);

      const imageSrc = '/images/about/Location/Marker.png',
        imageSize = new window.kakao.maps.Size(60, 60),
        imageOption = { offset: new window.kakao.maps.Point(27, 69) };
      const markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );
      const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);

      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });

      const Marker = `<svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M15 11C15 11.7956 14.6839 12.5587 14.1213 13.1213C13.5587 13.6839 12.7956 14 12 14C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11C9 10.2044 9.31607 9.44129 9.87868 8.87868C10.4413 8.31607 11.2044 8 12 8C12.7956 8 13.5587 8.31607 14.1213 8.87868C14.6839 9.44129 15 10.2044 15 11Z' stroke='#003365' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M19.5 11C19.5 18.142 12 22.25 12 22.25C12 22.25 4.5 18.142 4.5 11C4.5 9.01088 5.29018 7.10322 6.6967 5.6967C8.10322 4.29018 10.0109 3.5 12 3.5C13.9891 3.5 15.8968 4.29018 17.3033 5.6967C18.7098 7.10322 19.5 9.01088 19.5 11Z' stroke='#003365' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' /> </svg>`;

      const MarkerIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z" stroke="#003365" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z" stroke="#003365" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `;

      const Chevron = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12L10 7.5L6 3" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/> </svg>`;

      const Close = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5L15 15M5 15L15 5" stroke="#424242" stroke-width="1.5" stroke-linecap="round"/></svg>
      `;
      const CopyLink = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.96404 6.26321C9.35394 6.44936 9.69347 6.72637 9.95411 7.07095C10.2147 7.41553 10.3889 7.81764 10.4619 8.24348C10.5349 8.66932 10.5047 9.10647 10.3737 9.51819C10.2427 9.92992 10.0149 10.3042 9.70924 10.6096L7.00924 13.3096C6.50289 13.816 5.81613 14.1004 5.10004 14.1004C4.38395 14.1004 3.69719 13.816 3.19084 13.3096C2.68449 12.8033 2.40002 12.1165 2.40002 11.4004C2.40002 10.6843 2.68449 9.99756 3.19084 9.49121L4.24504 8.43701M12.255 8.06381L13.3092 7.00961C13.8156 6.50326 14.1001 5.8165 14.1001 5.10041C14.1001 4.38432 13.8156 3.69756 13.3092 3.19121C12.8029 2.68486 12.1161 2.40039 11.4 2.40039C10.684 2.40039 9.99719 2.68486 9.49084 3.19121L6.79084 5.89121C6.48522 6.19661 6.25736 6.57089 6.12639 6.98262C5.99542 7.39435 5.96517 7.83149 6.03818 8.25733C6.1112 8.68318 6.28534 9.08528 6.54598 9.42986C6.80662 9.77445 7.14615 10.0515 7.53604 10.2376" stroke="#003365" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `;

      const customOverlayContent = document.createElement('div');
      customOverlayContent.innerHTML = `
      <div class="customOverlay">
        <div class="default">
          <div class="icon">${Marker}</div>
          <div class="title">광주소프트웨어 마이스터고등학교</div>
          <div class="chevron">${Chevron}</div>
        </div>
      </div>
  `;

      const customOverlay = new window.kakao.maps.CustomOverlay({
        position: markerPosition,
        content: customOverlayContent,
      });

      window.kakao.maps.event.addListener(marker, 'mouseover', function () {
        customOverlay.setMap(map);
        const chevronElement = customOverlayContent.querySelector(
          '.chevron'
        ) as HTMLElement | null;

        if (chevronElement) {
          chevronElement.addEventListener('click', () => {
            const defaultElement = customOverlayContent.querySelector(
              '.default'
            ) as HTMLElement | null;
            if (defaultElement) {
              defaultElement.classList.toggle('hidden');
            }
            if (!isVisible) {
              const infoWindowElement = document.createElement('div');
              infoWindowElement.className = 'customOverlay';
              infoWindowElement.innerHTML = `
              <div class="next">
                <div class="box">
                  <div class="close">${Close}</div>
                  <div class="contentBox">
                    <div class="title">광주소프트웨어마이스터고등학교</div>
                    <div class="address">광주 광산구 상무대로 312 </div>
                    <div> (우) 62423&nbsp;&nbsp;(지번) 송정동 710-3</div>
                    <div class="number">062-949-6800</div>
                  </div>
                  <div class="bottomBox">
                    <div class="iconBox">
                    <div class="icon roadView">${MarkerIcon}</div>
                    <div class="icon copyLink">${CopyLink}</div>
                    </div>
                  <div class="locationBtn">길찾기</div>
                </div>
              </div>`;
              customOverlayContent.appendChild(infoWindowElement);
              if (closeButtonRef.current) {
                const closeButton = closeButtonRef.current;
                closeButton.addEventListener('click', () => {
                  customOverlay.setMap(null);
                  setIsVisible(false);

                  if (infoWindowElement.parentElement) {
                    infoWindowElement.parentElement.removeChild(
                      infoWindowElement
                    );
                  }
                });
              }
              if (locationButtonRef.current) {
                const locationButton = locationButtonRef.current;
                locationButton.addEventListener('click', () => {
                  const kakaoMapLink = `https://map.kakao.com/link/to/광주소프트웨어마이스터고등학교,${latitude},${longitude}`;
                  window.open(kakaoMapLink, '_blank');
                });
              }
              if (roadViewButtonRef.current) {
                const roadViewButton = roadViewButtonRef.current;
                roadViewButton.addEventListener('click', () => {
                  const kakaoMapLink = `https://map.kakao.com/link/roadview/${latitude},${longitude}`;
                  window.open(kakaoMapLink, '_blank');
                });
              }
              if (copyLinkButtonRef.current) {
                const copyLinkButton = copyLinkButtonRef.current;
                copyLinkButton.addEventListener('click', () => {
                  const linkToCopy = 'http://kko.to/CtKpnV33Dj';
                  navigator.clipboard.writeText(linkToCopy).then(() => {
                    alert('링크가 복사되었습니다');
                  });
                });
              }
              setIsVisible(true);
            }
          });
        }
      });
      marker.setMap(map);
    });
  }, [latitude, longitude]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
    script.onload = onLoadKakaoMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [onLoadKakaoMap]);

  return (
    <>
      <MapContainer id='map' ref={containerRef} />
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
      background: #ffffff;
      border-radius: 3.125rem;
      width: 22.4375rem;
      height: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .icon {
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
      background: white;
      border-radius: 0.75rem;
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
            color: #3c8aaf;
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
            background: #003365;
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

export default Map;
