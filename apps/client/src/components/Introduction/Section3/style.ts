import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100vw;
  height: 865px;
  background: ${({ theme }) => theme.color.background};
  padding: 180px 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

export const EducationDirectionLayout = styled.div`
  display: flex;
  gap: 38px;
`;
