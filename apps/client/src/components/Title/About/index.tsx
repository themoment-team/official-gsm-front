import styled from '@emotion/styled';

import { TitleTemplate } from 'client/components';
import type { PointColorType, PointPositionType } from 'client/types';

interface AboutTitleProps {
  children: React.ReactNode;
  pointColor: PointColorType;
  pointPosition?: PointPositionType;
  pointSize?: string;
  right?: string;
}

const AboutTitle: React.FC<AboutTitleProps> = ({
  children,
  pointColor,
  pointPosition = 'top',
  pointSize = '1.125rem',
  right = '-1.25rem',
}) => (
  <TitleTemplate point={{ pointColor, pointSize, pointPosition, right }}>
    <AboutTitleStyle>{children}</AboutTitleStyle>
  </TitleTemplate>
);

export default AboutTitle;

export const AboutTitleStyle = styled.h1`
  ${({ theme }) => theme.typo.h1}
  font-weight: 700;
  color: ${({ theme }) => theme.color.gray['090']};

  @media ${({ theme }) => theme.breakPoint['600']} {
    ${({ theme }) => theme.typo.title}
  }
`;
