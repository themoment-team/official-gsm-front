'use client';

import { redirect } from 'next/navigation';

import styled from '@emotion/styled';

import { Category, Header, Banner } from 'admin/components';
import type { CategoryType } from 'admin/types';

interface ListPageProps {
  params: { category: CategoryType };
}

const categoryParamsArray = ['', 'newsletter', 'gallery'];

export default function ListPage({ params: { category } }: ListPageProps) {
  if (!categoryParamsArray.includes(category)) {
    redirect('/');
  }

  return (
    <>
      <Header hasNotification={false} name={'정문정'} />
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
