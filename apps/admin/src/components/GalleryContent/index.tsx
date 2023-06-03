import * as S from './style';
import Image from 'next/image';

const GalleryContent = ({}) => {
  return (
    <>
      <S.IMGWrapper>
        <Image
          alt='content image'
          src='https://i.ytimg.com/vi/FBEBPnWafTk/mqdefault.jpg'
          fill
        />
      </S.IMGWrapper>
    </>
  );
};

export default GalleryContent;
