import { useState } from 'react';

import { useRouter } from 'next/router';

import { MouseIcon } from 'client/assets';

import * as S from './style';

const Scroll = (): JSX.Element => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (): void => {
    setIsClicked(true);
    router.push('#scroll-target', undefined, { scroll: true });
  };

  return (
    <S.ScrollContentsWrap id='scroll-target'>
      <S.MouseButton onClick={handleClick} isClicked={isClicked}>
        <MouseIcon />
      </S.MouseButton>
    </S.ScrollContentsWrap>
  );
};

export default Scroll;
