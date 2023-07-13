import styled from '@emotion/styled';

export const ErrorText = styled.p`
  ${({ theme }) => theme.typo.caption};
  font-weight: 400;
  color: #f93535;
  text-align: center;
  margin-top: 1.5rem;
`;
