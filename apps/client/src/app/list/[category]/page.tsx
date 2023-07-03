'use client';

import styled from '@emotion/styled';

import {
  Footer,
  Header,
  ListPageCategory,
  ListPageTitle,
} from 'client/components';
import type { CategoryParamsType } from 'client/types';

interface ListPageProps {
  params: { category: CategoryParamsType };
}

export default function ListPage({ params: { category } }: ListPageProps) {
  return (
    <>
      <Header segment={''} />
      <Content>
        <ListPageCategory categoryParam={category} />
        <ListPageTitle category={category} />
      </Content>
      <Footer />
    </>
  );
}

const Content = styled.div`
  width: 77.5rem;
  margin: 0 auto;
  padding: 5rem 0 7.5rem;
`;
