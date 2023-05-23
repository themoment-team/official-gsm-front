import * as S from "./style";
import formatDate from "./formatDate";

interface DateProps {
  createdAt: string;
}

const DateComponent: React.FC<DateProps> = ({ createdAt }) => {
  const createdAtDate = new Date(createdAt);
  const month = formatDate(createdAtDate.getMonth() + 1);
  const date = formatDate(createdAtDate.getDate());
  return <S.Date>{`${createdAtDate.getFullYear()}.${month}.${date}`}</S.Date>;
};

export default DateComponent;
