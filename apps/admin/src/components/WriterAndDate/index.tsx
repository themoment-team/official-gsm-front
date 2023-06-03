import * as S from './style';
import { DateComponent } from 'ui';
import { css } from '@emotion/react';

interface WriterAndDateProps {
  postWriter: string;
  createdAt: string;
  weight: number;
}

const WriterAndDate: React.FC<WriterAndDateProps> = ({
  postWriter,
  createdAt,
  weight,
}) => {
  return (
    <S.DetailWrapper>
      <S.Details
        css={css`
          font-weight: ${weight};
        `}
      >
        {postWriter}
      </S.Details>
      <S.Dot />
      <DateComponent createdAt={createdAt} weight={weight} />
    </S.DetailWrapper>
  );
};

export default WriterAndDate;
