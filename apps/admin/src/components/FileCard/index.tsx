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
      <S.FileNameWrapper>
        <I.FileIcon />
        <S.Filename>{fileName}</S.Filename>
      </S.FileNameWrapper>
      <S.CancelButton type='button'>
        <I.CancelIcon />
      </S.CancelButton>
    </S.FileCardWrap>
  );
};

export default FileCard;
