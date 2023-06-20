import { GoogleIcon } from 'admin/assets';

import { GoogleOAuthLink } from './style';

interface GoogleLoginButtonProps {
  children: JSX.Element;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ children }) => (
  <GoogleOAuthLink href='/api/signin'>
    <GoogleIcon />
    {children}
  </GoogleOAuthLink>
);

export default GoogleLoginButton;
