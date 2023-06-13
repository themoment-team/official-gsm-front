import styled from '@emotion/styled';

interface SubTitleProps {
  children: React.ReactNode;
}

const SubTitle: React.FC<SubTitleProps> = ({ children }) => (
  <SubTitleStyle>{children}</SubTitleStyle>
);

export default SubTitle;

export const SubTitleStyle = styled.div`
  font-size: 24px;
  line-height: 36px;
  color: #616161;
`;
