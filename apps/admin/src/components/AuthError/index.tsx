import { ErrorText } from './style';

interface AuthErrorProps {
  children?: React.ReactNode;
}

const AuthError: React.FC<AuthErrorProps> = ({ children }) => (
  <ErrorText>{children}</ErrorText>
);

export default AuthError;
