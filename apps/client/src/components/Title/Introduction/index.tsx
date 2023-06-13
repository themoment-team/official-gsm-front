import styled from '@emotion/styled';

import { Title } from 'client/components';

import type { PointPositionType } from 'client/types/Title';

interface IntroductionTitleProps {
  children: React.ReactNode;
  pointColor: string;
  className?: string;
  pointPosition?: PointPositionType;
  pointSize?: string;
}

const IntroductionTitle: React.FC<IntroductionTitleProps> = ({
  children,
  pointColor,
  className,
  pointPosition = 'top',
  pointSize = '1.125rem',
}) => (
  <Title point={{ pointColor, pointSize, pointPosition }}>
    <IntroductionTitleStyle className={className}>
      {children}
    </IntroductionTitleStyle>
  </Title>
);

export default IntroductionTitle;

export const IntroductionTitleStyle = styled.h1`
  color: #212121;
  font-size: 3rem;
  line-height: 4.438rem;
  font-weight: 700;

  &.navy {
    color: #003365;
  }

  &.border {
    line-height: 4.625rem;
    -webkit-text-stroke: 0.063rem #003365; /* 웹킷 기반 브라우저 (Chrome, Safari) */
    text-stroke: 0.063rem #003365; /* 일반적인 사용법 */
    color: #ffffff;
    font-weight: 700;
    font-size: 3.75rem;
    line-height: 4.625rem;
  }
`;
