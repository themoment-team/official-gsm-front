import styled from '@emotion/styled';

export const BulletItemWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Bullet = styled.div<{ isDark: boolean }>`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background: #${({ isDark }) => (isDark ? '9E9E9E' : 'b2e449')};
  margin-top: 0.5938rem;
`;

export const Text = styled.p`
  width: 76.125rem;
  color: #616161;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.8125rem;
`;
