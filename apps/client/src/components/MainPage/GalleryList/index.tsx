'use client';

import CategoryHeader from 'client/components/CategoryHeader';
import GalleryCard from 'client/components/GalleryCard';
import { useGetWindowWidth } from 'client/hooks';

import { useGetPostList } from 'api/client';

import * as S from './style';

const PAGE_SIZE = 4;

const GalleryList = () => {
  const { data } = useGetPostList('EVENT_GALLERY', 1, PAGE_SIZE);

  const windowWidth = useGetWindowWidth();

  return (
    <S.GalleryListWrapper>
      <CategoryHeader category='EVENT_GALLERY' />
      <S.GalleryList>
        {data?.postList
          .slice(0, windowWidth <= 1024 ? 2 : windowWidth <= 1440 ? 3 : 4)
          .map((data) => (
            <GalleryCard key={data.postSeq} post={data} />
          ))}
      </S.GalleryList>
    </S.GalleryListWrapper>
  );
};

export default GalleryList;
