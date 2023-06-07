import { ContentType, FileInfoType } from 'api/client';

export interface DetailPropsType {
  fileInfo: FileInfoType[];
  description: string;
  post: ContentType;
}
