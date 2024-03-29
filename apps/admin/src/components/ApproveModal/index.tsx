import * as I from 'admin/assets';
import { ApproveItem } from 'admin/components';

import { useGetUnapproveList } from 'api/admin';

import * as S from './style';

interface ApproveModalProps {
  close: () => void;
}

const ApproveModal: React.FC<ApproveModalProps> = ({ close }) => {
  const { data: unApproveList, refetch } = useGetUnapproveList();

  return (
    <S.ModalContainer onClick={(e) => e.stopPropagation()}>
      <S.ModalHeader>
        🤝 가입 요청
        <div onClick={close}>
          <I.ModalCloseIcon />
        </div>
      </S.ModalHeader>
      <S.ModalContent>
        {unApproveList?.map((approveItem) => (
          <ApproveItem
            key={approveItem.userId}
            refetch={refetch}
            {...approveItem}
          />
        ))}
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default ApproveModal;
