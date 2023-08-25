import { useRef } from 'react';

import Script from 'next/script';

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

  const onLoadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
      };

      const map = new window.kakao.maps.Map(containerRef.current, options);

      const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);

      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      const Marker = `<svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M15 11C15 11.7956 14.6839 12.5587 14.1213 13.1213C13.5587 13.6839 12.7956 14 12 14C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11C9 10.2044 9.31607 9.44129 9.87868 8.87868C10.4413 8.31607 11.2044 8 12 8C12.7956 8 13.5587 8.31607 14.1213 8.87868C14.6839 9.44129 15 10.2044 15 11Z' stroke='#003365' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M19.5 11C19.5 18.142 12 22.25 12 22.25C12 22.25 4.5 18.142 4.5 11C4.5 9.01088 5.29018 7.10322 6.6967 5.6967C8.10322 4.29018 10.0109 3.5 12 3.5C13.9891 3.5 15.8968 4.29018 17.3033 5.6967C18.7098 7.10322 19.5 9.01088 19.5 11Z' stroke='#003365' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' /> </svg>`;

      const Chevron = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12L10 7.5L6 3" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/> </svg>`;

      const Close = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5L15 15M5 15L15 5" stroke="#424242" stroke-width="1.5" stroke-linecap="round"/></svg>
      `;

      const customOverlayContent = document.createElement('div');
      customOverlayContent.innerHTML = `
      <div class="customOverlay">
        <div class="default">
          <div class="icon">${Marker}</div>
          <div class="title">광주소프트웨어 마이스터고등학교</div>
          <div class="chevron">${Chevron}</div>
        </div>
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
            <div class="icon"></div>
            <div class="icon"></div>
            </div>
            <div class="locationBtn">길찾기</div>
            </div>
            </div>
        </div>
      </div>
  `;

      const customOverlay = new window.kakao.maps.CustomOverlay({
        position: markerPosition,
        content: customOverlayContent,
      });

      let isVisible = false;

      window.kakao.maps.event.addListener(marker, 'mouseover', function () {
        customOverlay.setMap(map);
        const chevronElement = customOverlayContent.querySelector(
          '.chevron'
        ) as HTMLElement | null;

        if (chevronElement) {
          chevronElement.addEventListener('click', () => {
            if (!isVisible) {
              const helloElement = document.createElement('p');
              helloElement.textContent = '안녕';
              helloElement.className = 'hello-message';
              customOverlayContent.appendChild(helloElement);
              isVisible = true;
            }
          });
        }
      });
      marker.setMap(map);
    });
  };

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`}
        onLoad={onLoadKakaoMap}
      />
      <MapContainer id='map' ref={containerRef} />
    </>
  );
}

const MapContainer = styled.div`
  width: 77.5rem;
  height: 25rem;
  .customOverlay {
    position: absolute;
    bottom: 50px;
    right: -200px;
    .title {
      color: #424242;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
    }
    .default {
      background: #ffffff;
      border-radius: 50px;
      width: 359px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        background-color: #7acdf4;
        border-radius: 100%;
      }
      .chevron {
        cursor: pointer;
      }
    }
    .next {
      width: 342px;
      height: 200px;
      background: white;
      border-radius: 12px;
      .box {
        padding: 16px;
        width: 342px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .close {
          display: flex;
          position: absolute;
          right: 32px;
        }
        .contentBox {
          width: 208px;
          height: 92px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #424242;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          .address {
            font-size: 14px;
          }
          .number {
            color: #3c8aaf;
          }
        }
        .bottomBox {
          position: relative;
          bottom: 0;
          height: 36px;
          display: flex;
          justify-content: space-between;
          .locationBtn {
            display: flex;
            width: 85px;
            height: 36px;
            justify-content: center;
            align-items: center;
            gap: 8px;
            background: #003365;
            border-radius: 8px;
            color: var(--white, #fff);
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 20px;
          }
          .iconBox {
            width: 72px;
            height: 32px;
            display: flex;
            justify-content: space-between;
            .icon {
              width: 32px;
              height: 32px;
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
