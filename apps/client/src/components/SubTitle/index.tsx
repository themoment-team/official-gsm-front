import styled from '@emotion/styled';

interface SubTitleProps {
  children: React.ReactNode;
}

const SubTitle: React.FC<SubTitleProps> = ({ children }) => (
  <SubTitleStyle>{children}</SubTitleStyle>
);

export default SubTitle;

export const SubTitleStyle = styled.div`
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: #616161;
`;
