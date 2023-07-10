import styled from '@emotion/styled';

interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => (
  <ErrorMessageStyle>{children}</ErrorMessageStyle>
);

export default ErrorMessage;

const ErrorMessageStyle = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  color: #f93535;
`;
