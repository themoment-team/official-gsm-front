import Image from 'next/image';

import { DateComponent } from 'ui';

import type { ContentType } from 'types';

import * as S from './style';

interface GalleryCardProps {
  post: ContentType;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  post: { postTitle, contentPreview, thumbnailUrl, postSeq, createdAt },
}) => (
  <S.GalleryCard href={`/post/${postSeq}`}>
    <S.IMGWrapper>
      <Image src={thumbnailUrl ?? ''} alt='content image' fill />
    </S.IMGWrapper>
    <S.TextBox>
      <S.Title className='text'>{postTitle}</S.Title>
      <S.ContentPreview className='text'>{contentPreview}</S.ContentPreview>
    </S.TextBox>
    <DateComponent createdAt={createdAt} workspace='client' />
  </S.GalleryCard>
);

export default GalleryCard;
