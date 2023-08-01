import { notFound } from 'next/navigation';

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
  try {
    const postSeq = Number(params.postSeq);

    const post: PostDetailType = await fetch(
      `${process.env.BASE_URL}/api/client${postUrl.postDetail(postSeq)}`
    ).then((res) => res.json());

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

const descriptionFormatting = (description: string) =>
  description.replace(/\n/g, ' ').replace(/\s+/g, ' ').slice(0, 120);
