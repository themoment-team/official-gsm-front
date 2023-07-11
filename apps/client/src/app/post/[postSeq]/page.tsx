'use client';

import styled from '@emotion/styled';

import { Footer, Header, AssembledPost } from 'client/components';

interface PostPageProps {
  params: { postSeq: string };
}

export default function PostPage({ params: { postSeq } }: PostPageProps) {
  return (
    <>
      <Header segment='list' />
      <BackGround>
        <AssembledPost postSeq={parseInt(postSeq)} />
      </BackGround>
      <Footer />
    </>
  );
}

const BackGround = styled.div`
  background: ${({ theme }) => theme.color.background};
  padding: 5rem 0 7.5rem 0;
  display: flex;
  justify-content: center;
`;
