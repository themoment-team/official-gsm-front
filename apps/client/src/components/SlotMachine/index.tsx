import React from 'react';

import { css } from '@emotion/react';

import { UnderscoreIcon } from 'client/assets';
import type { PointColorType } from 'client/types/title';

import * as S from './style';

interface SlotMachineProps {
  pointColor: PointColorType;
}

const SlotMachine: React.FC<SlotMachineProps> = () => (
  <div
    css={css`
      background-color: plum;
      height: 15.5rem;
    `}
  >
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
  </div>
);

export default SlotMachine;
