import '@emotion/react';

import type { theme } from '.';

type ExtendedTheme = typeof theme;

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends ExtendedTheme {}
}
