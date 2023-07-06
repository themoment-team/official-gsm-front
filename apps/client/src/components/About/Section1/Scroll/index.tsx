import { DownChevronsIcon, MouseIcon } from 'client/assets';

import * as S from './style';

const Scroll = () => (
  <S.ScrollContentsWrap>
    <S.ScrollTitle>scroll</S.ScrollTitle>
    <MouseIcon />
    <DownChevronsIcon />
  </S.ScrollContentsWrap>
);

export default Scroll;
