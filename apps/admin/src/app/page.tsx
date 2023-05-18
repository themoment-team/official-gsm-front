"use client";

import { Header } from "components";
import { Button } from "ui";

export default function Home() {
  return (
    <div>
      <Header hasNotification={false } name={'정문정'} />
      <Button>button</Button>
    </div>
  );
}
