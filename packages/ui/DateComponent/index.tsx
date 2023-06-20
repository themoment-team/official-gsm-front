import * as S from './style';
import { formatDate } from 'common';

interface DateProps {
  createdAt: string;
}

const DateComponent: React.FC<DateProps> = ({ createdAt }) => {
  const createdAtDate = new Date(createdAt);

  const year = createdAtDate.getFullYear();
  const month = formatDate(createdAtDate.getMonth() + 1);
  const date = formatDate(createdAtDate.getDate());

  return <S.Date dateTime={createdAt}>{`${year}.${month}.${date}`}</S.Date>;
};

export default DateComponent;
