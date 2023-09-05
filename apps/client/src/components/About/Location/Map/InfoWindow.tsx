import Image from 'next/image';

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
          <Image
            alt='closeIcon'
            width={20}
            height={20}
            src='/images/about/location/svg/CloseIcon.svg'
          />
        </S.Close>
        <S.ContentBox>
          <S.Title>광주소프트웨어마이스터고등학교</S.Title>
          <S.Address>광주 광산구 상무대로 312 </S.Address>
          <div> (우) 62423&nbsp;&nbsp;(지번) 송정동 710-3</div>
          <S.Number>062-949-6800</S.Number>
        </S.ContentBox>
        <S.BottomBox>
          <S.IconBox>
            <a
              href={`https://map.kakao.com/link/roadview/${latitude},${longitude}`}
              target='_blank'
            >
              <S.Icon>
                <Image
                  width={16}
                  height={16}
                  alt='smallMarker'
                  src='/images/about/location/svg/SmallMarkerIcon.svg'
                />
              </S.Icon>
            </a>
            <S.Icon onClick={copyLinkButtonClick}>
              <Image
                width={16}
                height={16}
                alt='CopyLinkIcon'
                src='/images/about/location/svg/CopyLinkIcon.svg'
              />
            </S.Icon>
          </S.IconBox>
          <a
            href={`https://map.kakao.com/link/to/광주소프트웨어마이스터고등학교,${latitude},${longitude}`}
            target='_blank'
          >
            <S.LocationBtn>길찾기</S.LocationBtn>
          </a>
        </S.BottomBox>
      </S.Box>
      <S.Triangle2 />
    </S.Next>
  );
};

export default InfoWindow;
