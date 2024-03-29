import { FileIcon } from 'ui/assets';

import * as I from 'admin/assets';

import * as S from './style';

interface FileCardProps {
  fileName: string;
  fileUrl?: string;
  onCancel: (fileName: string, fileUrl?: string) => void;
}

const FileCard: React.FC<FileCardProps> = ({ fileName, onCancel, fileUrl }) => {
  const handleClick = () => {
    if (fileUrl) {
      onCancel(fileName, fileUrl);
    } else {
      onCancel(fileName);
    }
  };

  return (
    <S.FileCardWrap>
      <S.FileNameWrapper>
        <FileIcon />
        <S.Filename>{fileName}</S.Filename>
      </S.FileNameWrapper>
      <S.CancelButton type='button' onClick={handleClick}>
        <I.CancelIcon />
      </S.CancelButton>
    </S.FileCardWrap>
  );
};

export default FileCard;
