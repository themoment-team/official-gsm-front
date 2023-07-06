'use client';

import React from 'react';

import { PlusIcon } from 'admin/assets';

import * as S from './style';

interface FileUploadLabelProps {
  dragRef: React.RefObject<HTMLLabelElement>;
}

const FileUploadLabel: React.FC<FileUploadLabelProps> = ({ dragRef }) => (
  <S.Label htmlFor='fileUpload' ref={dragRef}>
    <PlusIcon color='#ffffff' />
    <S.Text>첨부 파일 업로드</S.Text>
  </S.Label>
);

export default FileUploadLabel;
