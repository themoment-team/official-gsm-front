import styled from '@emotion/styled';

import { TitleTemplate } from 'client/components';
import type { PointColorType, PointPositionType } from 'client/types';

interface AboutTitleProps {
  children: React.ReactNode;
  pointColor: PointColorType;
  pointPosition?: PointPositionType;
  pointSize?: string;
}

const AboutTitle: React.FC<AboutTitleProps> = ({
  children,
  pointColor,
  pointPosition = 'top',
  pointSize = '1.125rem',
}) => (
  <TitleTemplate point={{ pointColor, pointSize, pointPosition }}>
    <AboutTitleStyle>{children}</AboutTitleStyle>
  </TitleTemplate>
);

export default AboutTitle;

export const AboutTitleStyle = styled.h1`
  font-size: 3rem;
  line-height: 4.438rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.gray['090']};
`;
