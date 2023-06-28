import { CategoryHeader, NewsletterCard } from 'client/components';

import { useGetPostList } from 'api/client';

import * as S from './style';

const MainpageNewsletterList = () => {
  const { data } = useGetPostList('FAMILY_NEWSLETTER', 0);

  return (
    <S.MainpageNewsletterList>
      <CategoryHeader category={'FAMILY_NEWSLETTER'} />
      <S.NewsletterList>
        {data?.postList?.map(
          (data, index) =>
            index < 3 && <NewsletterCard key={data.postSeq} post={data} />
        )}
      </S.NewsletterList>
    </S.MainpageNewsletterList>
  );
};

export default MainpageNewsletterList;
