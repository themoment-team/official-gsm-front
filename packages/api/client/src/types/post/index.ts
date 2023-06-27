export interface ContentType {
  postSeq: number;
  postTitle: string;
  postWriter: string;
  createdAt: string;
  thumbnailUrl?: string;
  contentPreview: string;
}

export interface FileInfoType {
  fileUrl: string;
  fileName: string;
  fileExtension: string;
}

export interface PostBoardInfo {
  postTitle: string;
  postContent: string;
  fileInfo: FileInfoType[];
  category: PostCategoryType;
}

export type PostCategoryType = 'NOTICE' | 'FAMILY_NEWSLETTER' | 'EVENT_GALLERY';

export interface PostDetailType {
  postTitle: string;
  postWriter: string;
  postContent: string;
  createdAt: string;
  category: PostCategoryType;
  fileInfo: FileInfoType[];
}

export interface PostListType {
  postList: ContentType[];
  totalPages: number;
}
