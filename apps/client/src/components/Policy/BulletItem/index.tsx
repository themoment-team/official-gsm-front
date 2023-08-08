/** @jsxImportSource @emotion/react */

'use client';

import * as S from './style';

interface BulletItemProps {
  children: React.ReactNode;
  isDark?: boolean;
}

const BulletItem: React.FC<BulletItemProps> = ({
  children,
  isDark = false,
}) => (
  <S.BulletItemWrapper>
    <S.Bullet isDark={isDark} />
    <S.Text>{children}</S.Text>
  </S.BulletItemWrapper>
);

export default BulletItem;
