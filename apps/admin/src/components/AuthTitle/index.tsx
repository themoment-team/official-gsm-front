import { css } from '@emotion/react';

import { Title } from './style';

interface AuthTitleProps {
  children: React.ReactNode;
  textAlign?: 'left' | 'center' | 'right';
  marginTop?: string;
  fontSize?: string;
}

/**
 * `auth/*` path 에서 사용되는 타이틀
 *
 * @prop children: React.ReactNode
 * @prop textAlign: "left" | "center" | "right" - 타이틀 정렬 방식
 * @prop marginTop: number - default = 2.5rem
 * @prop fontSize: number - default = 1.125rem
 */
const AuthTitle: React.FC<AuthTitleProps> = ({
  children,
  textAlign = 'left',
  marginTop,
  fontSize,
}) => (
    <Title
      css={css`
        margin-top: ${marginTop};
        text-align: ${textAlign};
        font-size: ${fontSize};
      `}
    >
      {children}
    </Title>
  );

export default AuthTitle;
