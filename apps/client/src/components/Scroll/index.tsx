import { DownChevronsIcon, MouseIcon } from 'client/assets';

import * as S from './style';

interface ScrollProps {
  isWhite: boolean;
}

const Scroll: React.FC<ScrollProps> = ({ isWhite }) => (
  <S.ScrollContentsWrap isWhite={isWhite}>
    <S.ScrollTitle>scroll</S.ScrollTitle>
    <MouseIcon />
    <DownChevronsIcon />
  </S.ScrollContentsWrap>
);

export default Scroll;
