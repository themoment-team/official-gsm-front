"use client";

import styled from "@emotion/styled";
import { CategoryType } from "admin/types";
import { Category, Header, Banner } from "admin/components";
import { redirect } from "next/navigation";

interface ListPageProps {
  params: { category: CategoryType };
}

const categoryParamsArray = ["", "newsletter", "gallery"];

export default function ListPage({ params: { category } }: ListPageProps) {
  if (!categoryParamsArray.includes(category)) {
    redirect("/");
  }

  return (
    <>
      <Header hasNotification={false} name={"정문정"} />
      <Banner />
      <ContentWrapper>
        <Category category={category} />
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2.5rem;
`;

// it's not working in client component

// export function generateStaticParams() {
//   return [{ category: "newsletter" }, { category: "gallery" }];
// }

// export const dynamicParams = false;
