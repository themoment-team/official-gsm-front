'use client';

import * as I from 'client/assets';

import Map from './Map';
import * as S from './style';

const Location = () => (
  <S.Location>
    <S.ContentBox>
      <S.Title>🔍 찾아오시는 길</S.Title>
      <S.Line />
      <Map latitude={35.14280841629563} longitude={126.80069811685026} />
      <S.MapContentBox>
        <S.AddressAndContactBox>
          <S.Address>
            <S.IconBox>
              <I.MarkIcon />
              <S.Subtitle>주소</S.Subtitle>
            </S.IconBox>
            <S.Desc>
              광주광역시 광산구 상무대로 312 광주소프트웨어마이스터고등학교
            </S.Desc>
          </S.Address>
          <S.Contact>
            <S.IconBox>
              <I.ContactIcon />
              <S.Subtitle>연락처</S.Subtitle>
            </S.IconBox>
            <S.Desc>교무실 062)949-6800(08:30~16:30)</S.Desc>
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

export default Location;
