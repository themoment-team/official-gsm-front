import * as S from './style';
import * as I from 'admin/assets';

import { css } from '@emotion/react';

interface FileCardProps {
  fileName?: string;
  fileLink?: string;
}

const FileCard: React.FC<FileCardProps> = ({ fileName }) => {
  return (
    <S.FileCardWrap>
      <I.FileIcon />
      <S.Filename>{fileName}</S.Filename>
      <S.CancelIconWrap>
        <I.CancelIcon />
      </S.CancelIconWrap>
    </S.FileCardWrap>
  );
};

export default FileCard;
