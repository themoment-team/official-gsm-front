import { FileInfoType } from 'types';

const extensions = ['JPG', 'PNG', 'HEIC', 'JPEG', 'WEBP'];

const filterImages = (fileInfo?: FileInfoType[]): FileInfoType[] => {
  return (
    fileInfo?.filter((file) => extensions.includes(file.fileExtension)) ?? []
  );
};

export default filterImages;
