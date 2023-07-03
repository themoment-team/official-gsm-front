import styled from '@emotion/styled';

import CircleDecoration from './CircleDecoration';
import Scroll from './Scroll';
import Title from './Title';

const Section1 = () => (
  <SectionWrapper>
    <CircleDecoration />
    <Title />
    <Scroll />
  </SectionWrapper>
);

export const SectionWrapper = styled.div`
  width: 100%;
  height: 54.375rem;
  position: relative;
`;

export default Section1;
