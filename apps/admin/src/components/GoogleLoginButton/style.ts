import styled from '@emotion/styled';

export const GoogleOAuthLink = styled.a`
  width: 21.4375rem;
  height: 3.0625rem;
  background: ${({ theme }) => theme.color.gray['010']};
  border-radius: 1.25rem;
  color: ${({ theme }) => theme.color.gray['090']};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5625rem;
  font-weight: 700;
  font-size: 0.9375rem;
  cursor: pointer;
`;
