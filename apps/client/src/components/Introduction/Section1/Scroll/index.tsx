import { ChevronsIcon, MouseIcon } from 'client/assets';

import * as S from './style';

const Scroll = () => (
  <S.ScrollContentsWrap>
    <S.ScrollTitle>scroll</S.ScrollTitle>
    <MouseIcon />
    <ChevronsIcon />
  </S.ScrollContentsWrap>
);

export default Scroll;
