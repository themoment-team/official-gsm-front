import * as S from './style';
import formatDate from './formatDate';
import { css } from '@emotion/react';

interface DateProps {
  createdAt: string;
  weight: number;
}

const DateComponent: React.FC<DateProps> = ({ createdAt, weight }) => {
  const createdAtDate = new Date(createdAt);

  const year = createdAtDate.getFullYear();
  const month = formatDate(createdAtDate.getMonth() + 1);
  const date = formatDate(createdAtDate.getDate());

  return (
    <S.Date
      css={
        weight &&
        css`
          font-weight: ${weight};
        `
      }
      dateTime={createdAt}
    >{`${year}.${month}.${date}`}</S.Date>
  );
};

export default DateComponent;
