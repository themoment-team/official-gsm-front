import { Footer, Header, AssembledPost } from 'client/components';

import { postUrl } from 'api/client';

import type { PostDetailType } from 'types';

import type { Metadata } from 'next';

interface PostPageProps {
  params: { postSeq: string };
}

export default function PostPage({ params: { postSeq } }: PostPageProps) {
  return (
    <>
      <Header segment='list' />
      <AssembledPost postSeq={parseInt(postSeq)} />
      <Footer />
    </>
  );
}

export const generateMetadata = async ({
  params,
}: PostPageProps): Promise<Metadata> => {
  const postSeq = Number(params.postSeq);

  const post: Promise<PostDetailType> = await fetch(
    `${process.env.BASE_URL}/api/client${postUrl.postDetail(postSeq)}`
  ).then((res) => res.json());

  return {
    title: { absolute: (await post).postTitle },
    description: (await post).postContent,
  };
};
