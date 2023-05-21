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
      <p className="gray">{date}</p>
      <S.Approve>
        <p className="approve">승인</p>
        <I.VerticalBarIcon />
        <p className="gray">거절</p>
      </S.Approve>
    </S.ApproveItem>
  );
};

export default ApproveItem;
