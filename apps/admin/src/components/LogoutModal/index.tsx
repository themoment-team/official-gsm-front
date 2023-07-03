import { redirect } from 'next/navigation';

import { useDeleteLogout } from 'api/admin';

import * as S from './style';

interface ApproveModalProps {
  name: string;
}

const LogoutModal: React.FC<ApproveModalProps> = ({ name }) => {
  const { mutate } = useDeleteLogout();

  const handleLogout = () => {
    mutate();
    if (process.env.NODE_ENV === 'production') {
      redirect('/auth/signin');
    }
  };

  return (
    <S.ModalContainer>
      <S.Teacher>{name}선생님</S.Teacher>
      <S.Line />
      <S.Logout onClick={handleLogout}>로그아웃</S.Logout>
    </S.ModalContainer>
  );
};

export default LogoutModal;
