'use client';

import styled from '@emotion/styled';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Background>{children}</Background>;
}

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0e0f10;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-height: 26.5rem) {
    height: auto;
    align-items: baseline;
  }
`;
