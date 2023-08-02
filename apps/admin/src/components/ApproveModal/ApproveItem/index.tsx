import { toast } from 'react-toastify';

import * as I from 'admin/assets';

import { usePatchApprove, useDeleteApprove } from 'api/admin';

import type { UnapproveListType } from 'types';

import * as S from './style';
interface ApproveItemProps extends UnapproveListType {
  refetch: () => void;
}

const ApproveItem: React.FC<ApproveItemProps> = ({
  userName,
  userSeq,
  refetch,
  requestedAt,
}) => {
  const { mutate: patchMutate } = usePatchApprove();
  const { mutate: deleteMutate } = useDeleteApprove();

  const patchApprove = () => {
    patchMutate(userSeq, {
      onSuccess: () => {
        refetch();
        toast.success('승인이 완료되었어요.');
      },
    });
  };

  const deleteApprove = () => {
    deleteMutate(userSeq, {
      onSuccess: () => {
        refetch();
        toast.success('승인이 거절되었어요.');
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
