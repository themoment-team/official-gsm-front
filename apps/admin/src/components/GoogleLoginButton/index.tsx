import { GoogleIcon } from 'admin/assets';

import { GoogleOAuthLink } from './style';

interface GoogleLoginButtonProps {
  text: string;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ text }) => (
  <GoogleOAuthLink href='/api/signin'>
    <GoogleIcon />
    {text}
  </GoogleOAuthLink>
);

export default GoogleLoginButton;
