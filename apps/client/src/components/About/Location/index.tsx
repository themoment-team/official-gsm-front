'use client';

import * as I from 'client/assets';
import { useGetWindowWidth } from 'client/hooks';

import Map from './Map';
import * as S from './style';

const schoolCoordinate = {
  latitude: 35.14273861528659,
  longitude: 126.80073120716628,
} as const;

const Location = () => {
  const width = useGetWindowWidth();

  return (
    <S.Location>
      <S.ContentBox>
        <S.Title className='hi'>🔍 찾아오시는 길</S.Title>
        <S.Line />
        <S.Map>
          <Map {...schoolCoordinate} />
        </S.Map>
        <S.MapContentBox>
          <S.AddressAndContactBox>
            <S.Address>
              <S.IconBox>
                {width < 600 ? (
                  <S.Circle>
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
                {width < 600 ? (
                  <S.Circle>
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
          {width > 600 && <S.Divide />}
          <S.OnTheWayBox>
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
          </S.OnTheWayBox>
        </S.MapContentBox>
      </S.ContentBox>
    </S.Location>
  );
};

export default Location;
