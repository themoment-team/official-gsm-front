import { css } from '@emotion/react';

import { DateComponent } from 'ui';

import * as S from './style';

interface WriterAndDateProps {
  postWriter: string;
  createdAt: string;
}

const WriterAndDate: React.FC<WriterAndDateProps> = ({
  postWriter,
  createdAt,
}) => (
  <S.DetailWrapper>
    <S.Details>{postWriter}</S.Details>
    <S.Dot />
    <DateComponent createdAt={createdAt} />
  </S.DetailWrapper>
);

export default WriterAndDate;
