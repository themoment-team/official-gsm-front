import * as I from 'admin/assets';
import { ApproveItem } from 'admin/components';

import * as S from './style';

const testData = [
  { name: '정문정', date: '2022.05.23' },
  { name: '강권', date: '2022.05.23' },
  { name: '스테파니', date: '2022.05.23' },
  { name: '정문정', date: '2022.05.23' },
  { name: '정문정', date: '2022.05.23' },
  { name: '정문정', date: '2022.05.23' },
];

interface ApproveModalProps {
  close: () => void;
}

const ApproveModal: React.FC<ApproveModalProps> = ({ close }) => (
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

export default ApproveModal;
