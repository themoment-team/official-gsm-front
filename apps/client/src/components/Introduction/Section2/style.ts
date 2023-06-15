import styled from '@emotion/styled';

export const Layout = styled.div`
  position: relative;
  width: 100vw;
  height: 856px;
  background: #051b30;
  padding: 140px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 120px;
`;

export const Point = styled.span`
  color: ${({ theme }) => theme.color.primary.lime};
`;

export const BlurTitle = styled.h3`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  opacity: 0.4;
  text-align: center;
`;

export const MainTitle = styled.h1`
  font-size: 60px;
  line-height: 72px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
`;
