'use client';

import { Footer, Header, AssembledPost } from 'client/components';

interface PostPageProps {
  params: { postSeq: string };
}

export default function PostPage({ params: { postSeq } }: PostPageProps) {
  return (
    <>
      <Header segment='list' />
      <div>
        <AssembledPost postSeq={postSeq} />
      </div>
      <Footer />
    </>
  );
}
