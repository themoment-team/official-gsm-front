import styled from '@emotion/styled';

import { TitleTemplate } from 'client/components';
import type { PointColorType, PointPositionType } from 'client/types/title';

interface AboutTitleProps {
  children: React.ReactNode;
  pointColor: PointColorType;
  className?: string;
  pointPosition?: PointPositionType;
  pointSize?: string;
}

const AboutTitle: React.FC<AboutTitleProps> = ({
  children,
  pointColor,
  className,
  pointPosition = 'top',
  pointSize = '1.125rem',
}) => (
  <TitleTemplate point={{ pointColor, pointSize, pointPosition }}>
    <AboutTitleStyle className={className}>{children}</AboutTitleStyle>
  </TitleTemplate>
);

export default AboutTitle;

export const AboutTitleStyle = styled.h1`
  font-size: 3rem;
  line-height: 4.438rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.gray['090']};
`;
