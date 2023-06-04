import { css } from '@emotion/react';

import { DateComponent } from 'ui';

import * as S from './style';

interface WriterAndDateProps {
  postWriter: string;
  createdAt: string;
  weight?: number;
}

const WriterAndDate: React.FC<WriterAndDateProps> = ({
  postWriter,
  createdAt,
  weight,
}) => (
  <S.DetailWrapper>
    <S.Details
      css={
        weight &&
        css`
          font-weight: ${weight};
        `
      }
    >
      {postWriter}
    </S.Details>
    <S.Dot />
    <DateComponent createdAt={createdAt} weight={weight} />
  </S.DetailWrapper>
);

export default WriterAndDate;
