import styled from '@emotion/styled';

export const WriterAndDateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const WriterText = styled.p<{ workspace: 'client' | 'admin' }>`
  ${({ theme, workspace }) =>
    workspace === 'client' ? theme.typo.body1 : theme.typo.body2}
  line-height: 1.6875rem;
  color: ${({ theme }) => theme.color.gray['070']};
`;

export const Dot = styled.div`
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  background-color: ${({ theme }) => theme.color.gray['070']};
`;
