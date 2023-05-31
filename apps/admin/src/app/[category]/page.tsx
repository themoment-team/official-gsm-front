"use client";

import { Category, Header } from "components";

type Category = "" | "newsletter" | "gallery";

interface CategoryPageProps {
  params: { category: Category };
}

export default function CategoryPage({
  params: { category },
}: CategoryPageProps) {
  return (
    <>
      <Header hasNotification={false} name={"정문정"} />
      <Category category={category} />
    </>
  );
}
