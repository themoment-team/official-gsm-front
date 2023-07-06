import { CategoryHeader, NewsletterCard } from 'client/components';

import { useGetPostList } from 'api/client';

import * as S from './style';

const PAGE_SIZE = 3;

const MainpageNewsletterList = () => {
  const { data } = useGetPostList('FAMILY_NEWSLETTER', 1, PAGE_SIZE);

  return (
    <S.MainpageNewsletterList>
      <CategoryHeader category={'FAMILY_NEWSLETTER'} />
      <S.NewsletterList>
        {data?.postList?.map((data) => (
          <NewsletterCard key={data.postSeq} post={data} />
        ))}
      </S.NewsletterList>
    </S.MainpageNewsletterList>
  );
};

export default MainpageNewsletterList;
