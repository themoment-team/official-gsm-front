'use client';

import * as S from './style';

const SearchLocation = () => (
  <S.SearchLocation>
    <S.ContentBox>
      <S.Title>🔍 찾아오시는 길</S.Title>
      <S.Line />
      <S.Map />
      <S.MapContentBox>
        <S.AddressAndConatctBox />
        <S.OntheWayBox />
      </S.MapContentBox>
    </S.ContentBox>
  </S.SearchLocation>
);

export default SearchLocation;
