"use client";

import styled from "@emotion/styled";
import { Category, Header, Banner } from "components";

export default function CategoryPage() {
  return (
    <>
      <Header hasNotification={false} name={"정문정"} />
      <Banner />
      <ContentWrapper>
        <Category category="" />
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
