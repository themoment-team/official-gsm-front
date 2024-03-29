'use client';

import styled from '@emotion/styled';

import { TitleTemplate } from 'client/components';
import type { PointColorType } from 'client/types';
interface NewsTitleProps {
  children: React.ReactNode;
  pointColor: PointColorType;
  right?: string;
}

const NewsTitle: React.FC<NewsTitleProps> = ({
  children,
  pointColor,
  right = '-1.25rem',
}) => (
  <TitleTemplate
    point={{ pointColor, pointSize: '0.938rem', pointPosition: 'top', right }}
  >
    <NewsTitleStyle>{children}</NewsTitleStyle>
  </TitleTemplate>
);

export const NewsTitleStyle = styled.h2`
  font-size: 1.75rem;
  line-height: 2.563rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.gray['090']};
`;

export default NewsTitle;
