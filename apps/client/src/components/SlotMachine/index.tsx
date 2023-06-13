import React from 'react';

import { css } from '@emotion/react';

import * as S from './style';

interface SlotMachineProps {}

const SlotMachine: React.FC<SlotMachineProps> = () => (
  <S.SlotMachine>
    뭐든지 [
    <S.Animation>
      <li>🎨</li>
      <li>🌸</li>
      <li>🌺</li>
      <li>🌼</li>
      <li>🌹</li>
      <li>🌈</li>
    </S.Animation>
    ] 할 수 있어
  </S.SlotMachine>
);

export default SlotMachine;
