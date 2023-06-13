import { useTheme } from '@emotion/react';

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
  const theme = useTheme();
  const blue = {
    date: theme.color.sub.blue,
    dateCircle: theme.color.primary.sky,
    wrapper: 'rgba(122, 205, 244, 0.1);',
  };

  const green = {
    date: '#73962B',
    dateCircle: theme.color.primary.lime,
    wrapper: 'rgba(178, 228, 73, 0.1);',
  };

  const colors = color === 'blue' ? blue : green;

  const createdAtDate = new Date(createdAt);

  const year = createdAtDate.getFullYear();
  const month = formatDate(createdAtDate.getMonth() + 1);
  const date = formatDate(createdAtDate.getDate());

  return (
    <S.NewsletterCardWrapper colors={colors}>
      <S.DateWrapper>
        <S.DateCircle colors={colors}>
          <S.DateText colors={colors}>{date}</S.DateText>
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
