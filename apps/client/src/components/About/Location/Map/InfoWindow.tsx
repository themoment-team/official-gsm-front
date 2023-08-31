import * as S from './style';

interface InfoWindowProps {
  latitude: number;
  longitude: number;
  onClose: () => void;
}

const InfoWindow: React.FC<InfoWindowProps> = ({
  latitude,
  longitude,
  onClose,
}) => {
  const CloseButtonClick = () => {
    onClose();
  };

  const locationButtonClick = () => {
    const kakaoMapLink = `https://map.kakao.com/link/to/광주소프트웨어마이스터고등학교,${latitude},${longitude}`;
    window.open(kakaoMapLink, '_blank');
  };
  const roadViewButtonClick = () => {
    const kakaoMapLink = `https://map.kakao.com/link/roadview/${latitude},${longitude}`;
    window.open(kakaoMapLink, '_blank');
  };
  const copyLinkButtonClick = () => {
    const linkToCopy = 'http://kko.to/CtKpnV33Dj';
    navigator.clipboard.writeText(linkToCopy).then(() => {
      alert('링크가 복사되었습니다');
    });
  };

  return (
    <S.Next>
      <S.Box>
        <S.Close onClick={CloseButtonClick}>
          <img src='/images/about/location/svg/CloseIcon.svg' />
        </S.Close>
        <S.ContentBox>
          <S.Title>광주소프트웨어마이스터고등학교</S.Title>
          <S.Address>광주 광산구 상무대로 312 </S.Address>
          <div> (우) 62423&nbsp;&nbsp;(지번) 송정동 710-3</div>
          <S.Number>062-949-6800</S.Number>
        </S.ContentBox>
        <S.BottomBox>
          <S.IconBox>
            <S.Icon onClick={roadViewButtonClick}>
              <img src='/images/about/location/svg/SmallMarkerIcon.svg' />
            </S.Icon>
            <S.Icon onClick={copyLinkButtonClick}>
              <img src='/images/about/location/svg/CopyLinkIcon.svg' />
            </S.Icon>
          </S.IconBox>
          <S.LocationBtn onClick={locationButtonClick}>길찾기</S.LocationBtn>
        </S.BottomBox>
      </S.Box>
      <S.Triangle2 />
    </S.Next>
  );
};

export default InfoWindow;
