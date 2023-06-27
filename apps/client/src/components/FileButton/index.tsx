import { FileIcon } from 'client/assets';

import type { FileInfoType } from 'api/client';

import * as S from './style';

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
