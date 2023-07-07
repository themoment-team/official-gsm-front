import { useEffect, useState } from 'react';

import { CategoryHeader, NewsletterCard } from 'client/components';

import { useGetPostList } from 'api/client';

import * as S from './style';

const PAGE_SIZE = 3;

const MainpageNewsletterList = () => {
  const { data } = useGetPostList('FAMILY_NEWSLETTER', 1, PAGE_SIZE);
  const [windowSize, setWindowSize] = useState(0);
  
  useEffect(() => {
    setWindowSize(window.innerWidth);
    window.addEventListener('resize', () => setWindowSize(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () =>
        setWindowSize(window.innerWidth)
      );
    };
  }, [windowSize]);

  return (
    <S.MainpageNewsletterList>
      <CategoryHeader category={'FAMILY_NEWSLETTER'} />
      <S.NewsletterList>
        {data?.postList?.map((data, index) => {
          if (windowSize <= 1440) {
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
