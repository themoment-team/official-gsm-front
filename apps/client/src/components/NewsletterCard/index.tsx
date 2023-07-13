'use client';

import { formatDate } from 'common';

import type { ContentType } from 'types';

import * as S from './style';

interface NewsletterCardProps {
  post: ContentType;
}

const NewsletterCard: React.FC<NewsletterCardProps> = ({
  post: { postSeq, postTitle, createdAt, contentPreview },
}) => {
  const createdAtDate = new Date(createdAt);

  const year = createdAtDate.getFullYear();
  const month = formatDate(createdAtDate.getMonth() + 1);
  const date = formatDate(createdAtDate.getDate());

  return (
    <S.NewsletterCardWrapper href={`/post/${postSeq}`}>
      <S.DateWrapper>
        <S.DateCircle className='dateCircle'>{date}</S.DateCircle>
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
