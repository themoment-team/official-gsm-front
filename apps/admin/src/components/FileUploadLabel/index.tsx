import type { DetailedHTMLProps, LabelHTMLAttributes } from 'react';
import React from 'react';

import { PlusIcon } from 'admin/assets';

import * as S from './style';

const FileUploadLabel: React.FC<
  DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
> = ({ ...attributes }) => (
  <S.Label {...attributes}>
    <PlusIcon color='#ffffff' />
    <S.Text>첨부 파일 업로드</S.Text>
  </S.Label>
);

export default FileUploadLabel;
