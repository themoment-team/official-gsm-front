import { FileIcon } from 'admin/assets';

import * as S from './style';

interface FileButtonProps {
  fileInfo: {
    fileUrl: string;
    fileName: string;
  };
}

const FileButton: React.FC<FileButtonProps> = ({ fileInfo: { fileName } }) => (
  <S.FileButton>
    <FileIcon color='#616161' />
    <S.ImageName>{fileName}</S.ImageName>
  </S.FileButton>
);

export default FileButton;
