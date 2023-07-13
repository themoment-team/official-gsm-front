import styled from '@emotion/styled';

export const Date = styled.time<{ workspace: 'client' | 'admin' }>`
  ${({ theme, workspace }) =>
    workspace === 'client' ? theme.typo.body1 : theme.typo.body2}
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 400;
  font-feature-settings: 'tnum';

  @media ${({ theme }) => theme.breakPoint['1024']} {
    ${({ theme }) => theme.typo.caption}
    font-weight: 400;
  }
`;
