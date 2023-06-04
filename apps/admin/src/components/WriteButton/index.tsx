import React from 'react';

import { css } from '@emotion/react';

import { WriteIcon, PlusIcon } from 'admin/assets';

import * as S from './style';

interface WriteButtonProps {
  isEdit: boolean;
}

const WriteButton: React.FC<WriteButtonProps> = ({ isEdit }) => (
  <S.WriteButton
    css={css`
      width: ${isEdit ? '6.0625rem' : '5.3125rem'};
    `}
  >
    <S.IMGWrapper>
      {isEdit ? <WriteIcon color='#ffffff' /> : <PlusIcon color='#ffffff' />}
    </S.IMGWrapper>
    <S.WriteText>{isEdit ? '수정하기' : '글쓰기'}</S.WriteText>
  </S.WriteButton>
);

export default WriteButton;
