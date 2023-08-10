/** @jsxImportSource @emotion/react */

'use client';

import * as S from './style';

interface BulletItemProps {
  children: React.ReactNode;
  isSmall?: boolean;
  isDark?: boolean;
}

const BulletItem: React.FC<BulletItemProps> = ({
  children,
  isDark = false,
  isSmall = false,
}) => (
  <S.BulletItemWrapper>
    <S.Bullet isDark={isDark} />
    <S.Text isSmall={isSmall}>{children}</S.Text>
  </S.BulletItemWrapper>
);

export default BulletItem;
