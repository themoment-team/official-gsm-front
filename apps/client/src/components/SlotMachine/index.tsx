import React from 'react';

import { css, useTheme } from '@emotion/react';
import UnderscoreIcon from 'client/assets/svg/icon/Underscore';
import type { PointColorType } from 'client/types/title';
import * as S from './style';

interface SlotMachineProps {
  pointColor: PointColorType;
}

const SlotMachine: React.FC<SlotMachineProps> = ({ pointColor }) => {
  const theme = useTheme();

  return (
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
          <div>
            <UnderscoreIcon />
          </div>
        </S.ListIconWrap>
        <span>
          할 수 있어
          <span
            css={css`
              color: ${theme.color.primary[pointColor]};
            `}
          >
            .
          </span>
        </span>
      </S.SlotMachineAnimation>
    </div>
  );
};

export default SlotMachine;
