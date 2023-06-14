import React from 'react';

import { css } from '@emotion/react';
import UnderscoreIcon from 'client/assets/svg/icon/Underscore';
import * as S from './style';

interface SlotMachineProps {}
const SlotMachine: React.FC<SlotMachineProps> = () => (
  <div
    css={css`
      background-color: palegoldenrod;
      height: 62.5rem;
    `}
  >
    <S.SlotMachineAnimation>
      <span>뭐든지</span>
      <S.ListWrap>
        [
        <S.Wrap className='wrap'>
          <S.List className='rolling'>
            <S.Item>
              <span className='imoji'>🎨</span>
            </S.Item>
            <S.Item>
              <span className='imoji'>💻</span>
            </S.Item>
            <S.Item>
              <span className='imoji'>🎮</span>
            </S.Item>
            <S.Item>
              <span className='imoji'>🛠️</span>
            </S.Item>
            <S.Item>
              <span className='imoji'>📱</span>
            </S.Item>
          </S.List>
        </S.Wrap>
        ]
      </S.ListWrap>
      <S.Icon>
        <UnderscoreIcon />
      </S.Icon>
      <span>할 수 있어</span>
    </S.SlotMachineAnimation>
  </div>
);

export default SlotMachine;
