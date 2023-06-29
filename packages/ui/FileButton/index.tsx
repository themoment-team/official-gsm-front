import { FileIcon } from '../assets';

import * as S from './style';

export interface FileInfoType {
  fileUrl: string;
  fileName: string;
  fileExtension: string;
}

interface FileButtonProps {
  file: FileInfoType;
}

const FileButton: React.FC<FileButtonProps> = ({
  file: { fileUrl, fileName },
}) => (
  <S.FileButton href={fileUrl}>
    <FileIcon />
    <S.FileNameText>{fileName}</S.FileNameText>
  </S.FileButton>
);

export default FileButton;
