import styled from '@emotion/styled';

import { Title } from 'client/components';
import type { PointColorType } from 'client/types/Title';
interface NewsTitleProps {
  children: React.ReactNode;
  pointColor: PointColorType;
  className?: string;
}

const NewsTitle: React.FC<NewsTitleProps> = ({
  children,
  pointColor,
  className,
}) => (
  <Title point={{ pointColor, pointSize: '0.938rem', pointPosition: 'top' }}>
    <NewsTitleStyle className={className}>{children}</NewsTitleStyle>
  </Title>
);

export const NewsTitleStyle = styled.h1`
  font-size: 1.75rem;
  line-height: 2.563rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.gray['090']};
`;

export default NewsTitle;
