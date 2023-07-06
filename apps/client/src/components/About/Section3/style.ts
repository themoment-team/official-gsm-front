import styled from '@emotion/styled';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  width: 100vw;
  height: 54.0625rem;
  background-color: ${({ theme }) => theme.color.background};

  @media screen and (max-width: 1440px) {
    background-color: yellow;
    height: 75.625rem;
  }

  @media screen and (max-width: 600px) {
    background-color: red;
    height: 86.0625rem;
    padding: 0 60px;
  }
`;

export const EducationDirectionLayout = styled.div`
  display: flex;
  gap: 2.375rem;

  @media screen and (max-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
