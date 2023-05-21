import * as S from "./style";
import formatDate from "./formatDate";

interface DateProps {
  createdAt: Date;
}

const DateComponent: React.FC<DateProps> = ({ createdAt }) => {
  const month = formatDate(createdAt.getMonth() + 1);
  const date = formatDate(createdAt.getDate());
  return <S.Date>{`${createdAt.getFullYear()}.${month}.${date}`}</S.Date>;
};

export default DateComponent;
