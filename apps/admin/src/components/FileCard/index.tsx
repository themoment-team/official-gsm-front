import * as S from './style';
import * as I from 'admin/assets';

import { css } from '@emotion/react';

interface FileBoxProps {
  fileName?: string;
  fileLink?: string;
}

const FileCard: React.FC<FileBoxProps> = ({ fileName }) => {
  return (
    <S.FileBoxWrap>
      <I.FileIcon />
      <S.Filename>{fileName}</S.Filename>
      <S.CancelIconWrap>
        <I.CancelIcon />
      </S.CancelIconWrap>
    </S.FileBoxWrap>
  );
};

export default FileCard;
