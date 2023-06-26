import styled from '@emotion/styled';

import { TitleTemplate } from 'client/components';
import type { PointColorType, PointPositionType } from 'client/types';

interface IntroductionTitleProps {
  children: React.ReactNode;
  pointColor: PointColorType;
  pointPosition?: PointPositionType;
  pointSize?: string;
}

const IntroductionTitle: React.FC<IntroductionTitleProps> = ({
  children,
  pointColor,
  pointPosition = 'top',
  pointSize = '1.125rem',
}) => (
  <TitleTemplate point={{ pointColor, pointSize, pointPosition }}>
    <IntroductionTitleStyle>{children}</IntroductionTitleStyle>
  </TitleTemplate>
);

export default IntroductionTitle;

export const IntroductionTitleStyle = styled.h1`
  font-size: 3rem;
  line-height: 4.438rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.gray['090']};
`;
