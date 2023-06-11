import type { FileInfoType, PostCategoryType } from 'api/client';

export interface DetailPropsType {
  fileInfo?: FileInfoType[];
  description?: string;
  post: {
    postTitle: string;
    postWriter: string;
    postContent: string;
    createdAt: string;
    category: PostCategoryType;
  };
}
