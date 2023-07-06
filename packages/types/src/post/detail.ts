import type { CategoryQueryStringType } from './category';
import type { FileInfoType } from './file';

export interface PostDetailType {
  postTitle: string;
  postWriter: string;
  postContent: string;
  createdAt: string;
  category: CategoryQueryStringType;
  fileInfo: FileInfoType[];
}
