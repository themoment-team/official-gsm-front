'use client';

import Image from 'next/image';

import * as S from './style';

interface PopUpCardProps {
  index: number;
  imgUrl: string | null;
  title: string;
}

const PopUpCard: React.FC<PopUpCardProps> = ({ index, imgUrl, title }) => (
  <S.PopUpCard href={`#`}>
    <S.IMGWrapper>
      <S.IndexBox>{index}</S.IndexBox>
      {imgUrl && <Image src={imgUrl} alt='content image' fill sizes='269px' />}
    </S.IMGWrapper>
    <S.Title className='text'>{title}</S.Title>
  </S.PopUpCard>
);

export default PopUpCard;
