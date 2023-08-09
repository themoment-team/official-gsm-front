import styled from '@emotion/styled';

export const BulletItemWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Bullet = styled.div<{ isDark: boolean }>`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background: ${({ isDark, theme }) =>
    isDark ? theme.color.gray['060'] : theme.color.primary.lime};
  margin-top: 0.5938rem;
`;

export const Text = styled.p`
  ${({ theme }) => theme.typo.h4}
  width: 76.125rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray['070']};
`;
