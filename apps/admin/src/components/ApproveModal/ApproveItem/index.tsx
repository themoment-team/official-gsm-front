import * as I from 'admin/assets';

import {
  usePatchApprove,
  type UnapproveListType,
  useDeleteApprove,
} from 'api/admin';

import * as S from './style';
interface ApproveItemProps extends UnapproveListType {
  onApprove: () => void;
}

const ApproveItem: React.FC<ApproveItemProps> = ({
  userName,
  userSeq,
  onApprove,
  requestedAt,
}) => {
  const { mutate: patchMutate } = usePatchApprove();
  const { mutate: deleteMutate } = useDeleteApprove();

  const patchApprove = () => {
    patchMutate(userSeq, {
      onSuccess: () => {
        onApprove();
      },
    });
  };

  const deleteApprove = () => {
    deleteMutate(userSeq, {
      onSuccess: () => {
        onApprove();
      },
    });
  };

  return (
    <S.ApproveItem>
      <p className='teacher'>{userName} 선생님</p>
      <p className='date'>{requestedAt}</p>
      <S.Approve>
        <button className='approve' onClick={patchApprove}>
          승인
        </button>
        <I.VerticalBarIcon />
        <button className='refuse' onClick={deleteApprove}>
          거절
        </button>
      </S.Approve>
    </S.ApproveItem>
  );
};
export default ApproveItem;
