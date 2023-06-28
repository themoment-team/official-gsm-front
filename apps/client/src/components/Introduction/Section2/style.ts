import styled from '@emotion/styled';

export const Layout = styled.div`
  position: relative;
  width: 100vw;
  height: 53.5rem;
  background: ${({ theme }) => theme.color.sub.navy};
  overflow: scroll;
`;

export const ContentSection = styled.div`
  height: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7.5rem;
  text-align: center;
  background: #051b30;
  padding-bottom: 64px;
`;

export const Point = styled.span`
  color: ${({ theme }) => theme.color.primary.lime};
`;
