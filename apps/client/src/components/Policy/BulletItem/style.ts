import styled from '@emotion/styled';

export const BulletItemWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const Bullet = styled.div<{ isDark: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #${({ isDark }) => (isDark ? '9E9E9E' : 'b2e449')};
  margin-top: 9.5px;
`;

export const Text = styled.p`
  width: 1218px;
  color: #616161;
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
`;
