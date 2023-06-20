import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100vw;
  height: 53.5rem;
  background: #051b30;
  padding: 8.75rem 0;
`;

export const TitleSection = styled.div`
  height: 100%;
  overflow-y: scroll;
  text-align: center;
`;

export const Point = styled.span`
  color: ${({ theme }) => theme.color.primary.lime};
`;

export const SubTitle = styled.h3`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.color.white};
  opacity: 0.4;
  margin-bottom: 6.5rem;
`;

export const MainTitle = styled.h1`
  font-size: 3.75rem;
  line-height: 4.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
`;
