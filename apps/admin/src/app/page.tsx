"use client";

import { Header, Input } from "components";
import { useRef } from "react";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Header hasNotification={false} name={"정문정"} />
      <Input
        ref={inputRef}
        onChange={() => console.log(inputRef?.current?.value)}
      />
    </div>
  );
}
