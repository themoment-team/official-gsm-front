import { CategoryHeader, NewsletterCard } from 'client/components';
import { useGetWindowWidth } from 'client/hooks';

import { useGetPostList } from 'api/client';

import * as S from './style';


const PAGE_SIZE = 3;

const MainpageNewsletterList = () => {
  const { data } = useGetPostList('FAMILY_NEWSLETTER', 1, PAGE_SIZE);

  const windowWidth = useGetWindowWidth();

  return (
    <S.MainpageNewsletterList>
      <CategoryHeader category={'FAMILY_NEWSLETTER'} />
      <S.NewsletterList>
        {data?.postList?.map((data, index) => {
          if (windowWidth <= 1440) {
            return (
              index < 2 && <NewsletterCard key={data.postSeq} post={data} />
            );
          } else {
            return <NewsletterCard key={data.postSeq} post={data} />;
          }
        })}
      </S.NewsletterList>
    </S.MainpageNewsletterList>
  );
};

export default MainpageNewsletterList;
