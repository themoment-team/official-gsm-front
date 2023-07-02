import React from 'react';

import CircleDecoration from './CircleDecoration';
import Scroll from './Scroll';
import Title from './Title';
import * as S from './style';

const Section1 = () => (
  <S.SectionWrapper>
    <CircleDecoration />
    <Title />
    <Scroll />
  </S.SectionWrapper>
);

export default Section1;
