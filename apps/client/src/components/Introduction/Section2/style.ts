import styled from '@emotion/styled';

export const Layout = styled.div`
  position: relative;
  width: 100vw;
  height: 53.5rem;
  background: ${({ theme }) => theme.color.sub.navy};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScrollSection = styled.div`
  overflow-y: scroll;
  scrollbar-width: none;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7.5rem;
  text-align: center;
  background: #051b30;
`;

export const Point = styled.span`
  color: ${({ theme }) => theme.color.primary.lime};
`;
