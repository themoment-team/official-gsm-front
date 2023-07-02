import React, { useState } from 'react';

import { MouseIcon } from 'client/assets';

import * as S from './style';

const Scroll = (): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (): void => {
    setIsClicked((prev) => !prev);
  };

  return (
    <S.ScrollContentsWrap>
      <S.MouseButton onClick={handleClick} isClicked={isClicked}>
        <MouseIcon />
      </S.MouseButton>
    </S.ScrollContentsWrap>
  );
};

export default Scroll;
