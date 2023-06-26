import { CategoryHeader, NewsletterCard } from 'client/components';

import { useGetPostList } from 'api/client';

import * as S from './style';

const MainpageNewsletter = () => {
  const { data } = useGetPostList('FAMILY_NEWSLETTER', 0);

  return (
    <S.MainpageNewsletter>
      <CategoryHeader category={'FAMILY_NEWSLETTER'} />
      <S.NewsletterList>
        {data?.postList
          ?.filter((_, index) => index < 3)
          .map((data) => (
            <NewsletterCard key={data.postSeq} post={data} />
          ))}
      </S.NewsletterList>
    </S.MainpageNewsletter>
  );
};

export default MainpageNewsletter;
