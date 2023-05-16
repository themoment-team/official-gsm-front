"use client";

import GlobalStyle from "common/styles/GlobalStyle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <title>Admin</title>
        <meta name="description" content="admin" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
