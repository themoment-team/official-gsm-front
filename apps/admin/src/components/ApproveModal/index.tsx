import * as S from "./style";
// import * as I from "assets";
import * as I from "../../assets";
// import { ApproveItem } from "components";
import { ApproveItem } from "..";

const testData = [
  { name: "정문정", date: "2022.05.23" },
  { name: "정문정", date: "2022.05.23" },
  { name: "정문정", date: "2022.05.23" },
  { name: "정문정", date: "2022.05.23" },
  { name: "정문정", date: "2022.05.23" },
  { name: "정문정", date: "2022.05.23" },
];

interface ApproveModalProps {
  close: () => void;
}

const ApproveModal = ({ close }: ApproveModalProps) => {
  return (
    <S.ModalConatiner>
      <S.ModalHeader>
        🤝 가입 요청
        <div onClick={close}>
          <I.ModalCloseIcon />
        </div>
      </S.ModalHeader>
      <S.ModalContent>
        {testData.map(({ name, date }, i) => (
          <ApproveItem name={name} date={date} key={i} />
        ))}
      </S.ModalContent>
    </S.ModalConatiner>
  );
};

export default ApproveModal;
