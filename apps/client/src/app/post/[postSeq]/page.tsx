'use client';

import { Header } from 'client/components';

interface PostPageProps {
  params: { postSeq: string };
}

export default function PostPage({ params: { postSeq } }: PostPageProps) {
  return (
    <>
      <Header segment='list' />
      <div>PostPage: {postSeq}</div>
    </>
  );
}
