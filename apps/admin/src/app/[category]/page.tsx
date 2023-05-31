"use client";

import styled from "@emotion/styled";
import { CategoryType } from "admin/types";
import { Category, Header, Banner } from "admin/components";

interface ListPageProps {
  params: { category: CategoryType };
}

export default function ListPage({ params: { category } }: ListPageProps) {
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

export async function generateStaticParams() {
  return [{ category: "newsletter" }, { category: "gallery" }];
}
