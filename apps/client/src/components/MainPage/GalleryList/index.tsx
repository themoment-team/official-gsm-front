import CategoryHeader from 'client/components/CategoryHeader';
import GalleryCard from 'client/components/GalleryCard';

import { useGetPostList } from 'api/client';

import * as S from './style';

const GalleryList = () => {
  const { data } = useGetPostList('EVENT_GALLERY', 0);

  return (
    <S.GalleryListWrapper>
      <CategoryHeader category='EVENT_GALLERY' />
      <S.GalleryList>
        {data?.postList.map(
          (post, index) =>
            index < 4 && <GalleryCard key={post.postSeq} post={post} />
        )}
      </S.GalleryList>
    </S.GalleryListWrapper>
  );
};

export default GalleryList;
