import formatDate from 'ui/DateComponent/formatDate';

import type { ContentType } from 'api/client';

import * as S from './style';

interface NewsletterCardProps {
  post: ContentType;
  color: 'blue' | 'green';
}

const NewsletterCard: React.FC<NewsletterCardProps> = ({
  post: { postTitle, createdAt, contentPreview },
  color,
}) => {
  const blue = {
    date: '#3C8AAF',
    dateCircle: '#7ACDF4',
    wrapper: 'rgba(122, 205, 244, 0.1);',
  };

  const green = {
    date: '#73962B',
    dateCircle: '#B2E449',
    wrapper: 'rgba(178, 228, 73, 0.1);',
  };

  const createdAtDate = new Date(createdAt);

  const year = createdAtDate.getFullYear();
  const month = formatDate(createdAtDate.getMonth() + 1);
  const date = formatDate(createdAtDate.getDate());

  return (
    <S.NewsletterCardWrapper colors={color === 'blue' ? blue : green}>
      <S.DateWrapper>
        <S.DateCircle colors={color === 'blue' ? blue : green}>
          <S.DateText colors={color === 'blue' ? blue : green}>
            {date}
          </S.DateText>
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
