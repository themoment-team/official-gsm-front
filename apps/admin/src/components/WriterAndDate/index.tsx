import { DateComponent } from 'ui';

import * as S from './style';
import { css } from '@emotion/react';

interface WriterAndDateProps {
  postWriter: string;
  createdAt: string;
  margin?: string;
}

const WriterAndDate: React.FC<WriterAndDateProps> = ({
  postWriter,
  createdAt,
  margin,
}) => (
  <S.DetailWrapper
    css={css`
      margin: ${margin};
    `}
  >
    <S.Details>{postWriter}</S.Details>
    <S.Dot />
    <DateComponent createdAt={createdAt} />
  </S.DetailWrapper>
);

export default WriterAndDate;
