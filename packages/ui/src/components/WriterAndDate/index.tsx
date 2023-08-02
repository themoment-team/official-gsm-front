/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import DateComponent from '../DateComponent';

import * as S from './style';

interface WriterAndDateProps {
  postWriter: string;
  createdAt: string;
  margin?: string;
  workspace: 'client' | 'admin';
}

const WriterAndDate: React.FC<WriterAndDateProps> = ({
  postWriter,
  createdAt,
  margin,
  workspace,
}) => (
  <S.WriterAndDateWrapper
    css={
      margin &&
      css`
        margin: ${margin};
      `
    }
  >
    <S.WriterText workspace={workspace}>{postWriter}</S.WriterText>
    <S.Dot />
    <DateComponent createdAt={createdAt} workspace={workspace} />
  </S.WriterAndDateWrapper>
);

export default WriterAndDate;
