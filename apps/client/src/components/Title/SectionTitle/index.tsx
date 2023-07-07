import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface SectionTitleProps {
  children: React.ReactNode;
  textAlign?: 'center' | 'left' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  textAlign = 'center',
}) => (
  <SectionTitleContainer
    css={css`
      text-align: ${textAlign};
    `}
  >
    {children}
  </SectionTitleContainer>
);

export default SectionTitle;

const SectionTitleContainer = styled.div`
  gap: 3.75rem;

  h1 {
    margin-bottom: 0.75rem;

    @media ${({ theme }) => theme.breakPoint['600']} {
      margin-bottom: 0.25rem;
    }
  }
`;
