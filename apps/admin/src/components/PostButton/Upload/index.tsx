import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import React from 'react';

import { PlusIcon } from 'admin/assets';
import * as S from 'admin/components/PostButton/style';

const UploadButton: React.FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ ...attributes }) => (
  <S.Button {...attributes} type='button'>
    <PlusIcon color='#ffffff' />
    <S.Text>첨부 파일 업로드</S.Text>
  </S.Button>
);

export default UploadButton;
