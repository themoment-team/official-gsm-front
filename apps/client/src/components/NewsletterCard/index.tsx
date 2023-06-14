import formatDate from 'ui/DateComponent/formatDate';

import type { ContentType } from 'api/client';

import * as S from './style';

interface NewsletterCardProps {
  post: ContentType;
  color: 'blue' | 'green';
}

const NewsletterCard: React.FC<NewsletterCardProps> = ({
  post: { postTitle, createdAt, contentPreview },
}) => {
  const createdAtDate = new Date(createdAt);

  const year = createdAtDate.getFullYear();
  const month = formatDate(createdAtDate.getMonth() + 1);
  const date = formatDate(createdAtDate.getDate());

  return (
    <S.NewsletterCardWrapper>
      <S.DateWrapper>
        <S.DateCircle>
          <S.DateText>{date}</S.DateText>
        </S.DateCircle>
        <S.YearMonth>{`${year}.${month}`}</S.YearMonth>
      </S.DateWrapper>
      <S.TextWrapper>
        <S.Title>{postTitle}</S.Title>
        <S.Preview>{contentPreview}</S.Preview>
      </S.TextWrapper>
    </S.NewsletterCardWrapper>
  );
};

export default NewsletterCard;
