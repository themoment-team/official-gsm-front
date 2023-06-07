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
  <S.WriterAndDateWrapper
    css={css`
      margin: ${margin};
    `}
  >
    <S.WriterText>{postWriter}</S.WriterText>
    <S.Dot />
    <DateComponent createdAt={createdAt} />
  </S.WriterAndDateWrapper>
);

export default WriterAndDate;
