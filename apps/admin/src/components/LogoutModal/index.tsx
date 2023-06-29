import * as S from './style';

interface ApproveModalProps {
  name: string;
}

const LogoutModal: React.FC<ApproveModalProps> = ({ name }) => (
  <S.ModalContainer>
    <S.Teacher>{name}선생님</S.Teacher>
    <S.Line />
    <S.Logout>로그아웃</S.Logout>
  </S.ModalContainer>
);

export default LogoutModal;
