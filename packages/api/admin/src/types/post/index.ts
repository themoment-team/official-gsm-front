import type { PostCategoryType } from 'api/client';

export interface PostDataType {
  content: {
    postTitle: string;
    postContent: string;
    category: PostCategoryType;
  };
  file?: File[];
}
