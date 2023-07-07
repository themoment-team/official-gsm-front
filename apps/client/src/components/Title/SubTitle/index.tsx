import styled from '@emotion/styled';

interface SubTitleProps {
  children: React.ReactNode;
}

const SubTitle: React.FC<SubTitleProps> = ({ children }) => (
  <SubTitleStyle>{children}</SubTitleStyle>
);

export default SubTitle;

export const SubTitleStyle = styled.div`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.gray['070']};

  @media ${({ theme }) => theme.breakPoint['600']} {
    ${({ theme }) => theme.typo.h4}
  }
`;
