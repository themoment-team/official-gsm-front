import { notFound } from 'next/navigation';

import { Footer, Header, AssembledPost } from 'client/components';

import { postUrl } from 'api/client';

import { descriptionFormatting } from 'common';

import type { PostDetailType } from 'types';

import type { Metadata } from 'next';

interface PostPageProps {
  params: { postSeq: string };
}

export default async function PostPage({ params: { postSeq } }: PostPageProps) {
  const post = await getPostDetail(parseInt(postSeq));

  return (
    <>
      <Header segment='list' />
      <AssembledPost post={post} postSeq={parseInt(postSeq)} />
      <Footer />
    </>
  );
}

export const generateMetadata = async ({
  params,
}: PostPageProps): Promise<Metadata> => {
  try {
    const postSeq = Number(params.postSeq);

    const post = await getPostDetail(postSeq);

    return {
      title: { absolute: post.postTitle },
      description: descriptionFormatting(post.postContent),
      openGraph: {
        title: post.postTitle,
        description: descriptionFormatting(post.postContent),
        url: `https://official.hellogsm.kr/post/${postSeq}`,
      },
    };
  } catch (e) {
    return notFound();
  }
};

async function getPostDetail(postSeq: number) {
  const res = await fetch(
    `${process.env.CLIENT_API_URL}/api${postUrl.postDetail(postSeq)}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const data: PostDetailType = await res.json();

  return data;
}
