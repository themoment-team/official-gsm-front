import styled from '@emotion/styled';

import { Scroll } from 'client/components';

import CircleDecoration from './CircleDecoration';
import Title from './Title';

const Section1 = () => (
  <SectionWrapper>
    <SectionTitleWrapper>
      <CircleDecoration />
      <Title />
    </SectionTitleWrapper>
    <Scroll isWhite={false} />
  </SectionWrapper>
);

export const SectionTitleWrapper = styled.div`
  width: 30.0625rem;
  height: 26.0625rem;

  position: relative;
  top: 10.125rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionWrapper = styled.div`
  width: 100%;
  height: 54.375rem;
  position: relative;
`;

export default Section1;
