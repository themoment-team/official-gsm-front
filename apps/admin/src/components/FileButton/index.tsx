import * as S from './style';
import { FileIcon } from 'admin/assets';

interface FileButtonProps {
  fileInfo: {
    fileUrl: string;
    fileName: string;
  };
}

const FileButton: React.FC<FileButtonProps> = ({
  fileInfo: { fileUrl, fileName },
}) => {
  return (
    <S.FileWrapper>
      <S.IconWrapper>
        <FileIcon />
      </S.IconWrapper>
      <S.ImageName>{fileName}</S.ImageName>
    </S.FileWrapper>
  );
};

export default FileButton;
