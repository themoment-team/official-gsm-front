import * as S from "./style";
// import * as I from "assets";
import * as I from "../../../assets";

interface ApproveItemProps {
  name: string;
  date: string;
}

const ApproveItem: React.FC<ApproveItemProps> = ({ name, date }) => {
  return (
    <S.ApproveItem>
      <p className="teacher">{name} 선생님</p>
      <p className="date">{date}</p>
      <S.Approve>
        <button className="approve">승인</button>
        <I.VerticalBarIcon />
        <button className="refuse">거절</button>
      </S.Approve>
    </S.ApproveItem>
  );
};

export default ApproveItem;
