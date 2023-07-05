import { FileIcon } from 'ui/assets';

import * as I from 'admin/assets';

import * as S from './style';

interface FileCardProps {
  fileName: string;
  onClick?: () => void;
}

const FileCard: React.FC<FileCardProps> = ({ fileName, onClick }) => (
  <S.FileCardWrap>
    <S.FileNameWrapper>
      <FileIcon />
      <S.Filename>{fileName}</S.Filename>
    </S.FileNameWrapper>
    <S.CancelButton type='button' onClick={onClick}>
      <I.CancelIcon />
    </S.CancelButton>
  </S.FileCardWrap>
);

export default FileCard;
