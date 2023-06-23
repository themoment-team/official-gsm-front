import { NoticeBanner } from 'client/components';

import type { ContentType } from 'api/client';

interface NoticeBannerControllerType {
  postList: ContentType[];
}

const NoticeBannerController: React.FC<NoticeBannerControllerType> = ({
  postList,
}) => (
  <div>
    {postList.map((post) => (
      <NoticeBanner key={post.postSeq} post={post} />
    ))}
  </div>
);

export default NoticeBannerController;
