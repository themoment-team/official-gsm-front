import { ContentType, FileInfoType } from 'api/client';

export interface ContentPropsType {
  fileInfo: FileInfoType[];
  description: string;
  post: ContentType;
}
