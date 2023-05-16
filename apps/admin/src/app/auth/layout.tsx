"use client";

import styled from "@emotion/styled";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Background>
      <Content>{children}</Content>
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 23.438rem;
  height: 39.875rem;
  border-radius: 1.25rem;
  background-color: #ffffff;
  box-shadow: 0 0.25rem 3.75rem rgba(0, 0, 0, 0.04);
`;
