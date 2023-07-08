import { FileInfoType } from 'types';

const extentions = ['JPG', 'PNG', 'HEIC', 'JPEG', 'WEBP'];

const filterImages = (fileInfo?: FileInfoType[]): FileInfoType[] => {
  return (
    fileInfo?.filter((file) => extentions.includes(file.fileExtension)) ?? []
  );
};

export default filterImages;
