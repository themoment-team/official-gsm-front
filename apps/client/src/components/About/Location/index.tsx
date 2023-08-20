'use client';

import { useState, useEffect } from 'react';

import * as I from 'client/assets';

import Map from './Map';
import * as S from './style';

const schoolCoordinate = {
  latitude: 35.14273861528659,
  longitude: 126.80073120716628,
} as const;

const Location = () => {
  const [isBreakpoint600, setIsBreakpoint1024] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsBreakpoint1024(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.Location>
      <S.ContentBox>
        <S.Title>🔍 찾아오시는 길</S.Title>
        <S.Line />
        <S.Map>
          <Map {...schoolCoordinate} />
        </S.Map>
        <S.MapContentBox>
          <S.AddressAndContactBox>
            <S.Address>
              <S.IconBox>
                {isBreakpoint600 ? (
                  <S.Circle isVisible={isBreakpoint600}>
                    <I.MarkIcon />
                  </S.Circle>
                ) : (
                  <I.MarkIcon />
                )}
                <S.Subtitle>주소</S.Subtitle>
              </S.IconBox>
              <S.Desc>
                광주광역시 광산구 상무대로 312 광주소프트웨어마이스터고등학교
              </S.Desc>
            </S.Address>
            <S.Contact>
              <S.IconBox>
                {isBreakpoint600 ? (
                  <S.Circle isVisible={isBreakpoint600}>
                    <I.ContactIcon />
                  </S.Circle>
                ) : (
                  <I.ContactIcon />
                )}
                <S.Subtitle>연락처</S.Subtitle>
              </S.IconBox>
              <S.Desc>
                교무실 062)949-6800
                <br />
                (08:30~16:30)
              </S.Desc>
            </S.Contact>
          </S.AddressAndContactBox>
          <S.Divide />
          <S.OntheWayBox>
            <S.Walk>
              <S.Circle>
                <I.MapIcon />
              </S.Circle>
              <S.DescBox>
                <S.Subtitle>도보 이용 시</S.Subtitle>
                <S.Desc>도미노 피자 건물 건너편</S.Desc>
              </S.DescBox>
            </S.Walk>
            <S.Subway>
              <S.Circle>
                <I.SubwayIcon />
              </S.Circle>
              <S.DescBox>
                <S.Subtitle>지하철 이용 시</S.Subtitle>
                <S.Desc>송정공원역 1번출구 220m 앞</S.Desc>
              </S.DescBox>
            </S.Subway>
          </S.OntheWayBox>
        </S.MapContentBox>
      </S.ContentBox>
    </S.Location>
  );
};

export default Location;
