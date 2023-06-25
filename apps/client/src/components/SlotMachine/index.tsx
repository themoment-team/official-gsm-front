import React from 'react';

import { UnderscoreIcon } from 'client/assets';

import * as S from './style';

const SlotMachine = () => (
  <S.SlotMachineAnimation>
    <span>뭐든지</span>
    <S.ListIconWrap>
      <S.ListWrap>
        {'['}
        <S.Wrap className='wrap'>
          <S.List className='rolling'>
            <S.Item>🎨</S.Item>
            <S.Item>💻 </S.Item>
            <S.Item>🎮</S.Item>
            <S.Item>🛠️</S.Item>
            <S.Item>📱</S.Item>
          </S.List>
        </S.Wrap>
        {']'}
      </S.ListWrap>
      <UnderscoreIcon />
    </S.ListIconWrap>
    <span>
      할 수 있어
      <S.Point>.</S.Point>
    </span>
  </S.SlotMachineAnimation>
);

export default SlotMachine;
