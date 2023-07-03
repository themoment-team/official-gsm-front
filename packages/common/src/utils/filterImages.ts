import { FileInfoType } from '../../../api/client/src/types/post/index';

const extentions = ['JPG', 'PNG', 'HEIC', 'JPEG', 'WEBP'];

const filterImages = (
  fileInfo?: FileInfoType[]
): FileInfoType[] | undefined => {
  return fileInfo?.filter((file) => extentions.includes(file.fileExtension));
};

export default filterImages;
