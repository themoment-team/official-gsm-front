import styled from '@emotion/styled';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  width: 100vw;
  height: 54.0625rem;
  padding: 11.25rem 21.25rem;
  background-color: ${({ theme }) => theme.color.background};
`;

export const EducationDirectionLayout = styled.div`
  display: flex;
  gap: 2.375rem;
`;
