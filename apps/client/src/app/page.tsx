'use client';

import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Button } from 'ui';

export default function Home() {
  return (
    <>
      <Button css={exampleCss}>button</Button>
      <ExampleStyled>styled</ExampleStyled>
    </>
  );
}

const exampleCss = (theme: Theme) => css`
  background-color: ${theme.color.primary.sky};
`;

const ExampleStyled = styled.div`
  ${({ theme }) => theme.typo.h1}
  background-color: ${({ theme }) => theme.color.primary.lime};
`;
