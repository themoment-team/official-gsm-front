import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface SectionTitleProps {
  children: React.ReactNode;
  textAlign: 'center' | 'left' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, textAlign }) => (
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
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
