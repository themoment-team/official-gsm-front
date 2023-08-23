import { FileInfoType } from 'types';
import filterImages from '../filterImages';

describe('filterImages', () => {
  test('JPG, PNG, HEIC, JPEG, WEBP 확장자의 경우 그대로 반환됩니다.', () => {
    const exampleFiles: FileInfoType[] = [
      {
        fileUrl: 'https://example.com/1.jpg',
        fileName: '1',
        fileExtension: 'JPG',
      },
      {
        fileUrl: 'https://example.com/2.png',
        fileName: '2',
        fileExtension: 'PNG',
      },
      {
        fileUrl: 'https://example.com/3.heic',
        fileName: '3',
        fileExtension: 'HEIC',
      },
    ];

    const resultFiles: FileInfoType[] = [
      {
        fileUrl: 'https://example.com/1.jpg',
        fileName: '1',
        fileExtension: 'JPG',
      },
      {
        fileUrl: 'https://example.com/2.png',
        fileName: '2',
        fileExtension: 'PNG',
      },
      {
        fileUrl: 'https://example.com/3.heic',
        fileName: '3',
        fileExtension: 'HEIC',
      },
    ];

    expect(filterImages(exampleFiles)).toEqual(resultFiles);
  });

  test('JPG, PNG, HEIC, JPEG, WEBP 이외의 확장자의 경우 제외하고 반환됩니다.', () => {
    const exampleFiles: FileInfoType[] = [
      {
        fileUrl: 'https://example.com/1.jpg',
        fileName: '1',
        fileExtension: 'JPG',
      },
      {
        fileUrl: 'https://example.com/2.png',
        fileName: '2',
        fileExtension: 'PNG',
      },
      {
        fileUrl: 'https://example.com/3.mp4',
        fileName: '3',
        fileExtension: 'MP4',
      },
    ];

    const resultFiles: FileInfoType[] = [
      {
        fileUrl: 'https://example.com/1.jpg',
        fileName: '1',
        fileExtension: 'JPG',
      },
      {
        fileUrl: 'https://example.com/2.png',
        fileName: '2',
        fileExtension: 'PNG',
      },
    ];

    expect(filterImages(exampleFiles)).toEqual(resultFiles);
  });

  test('undefined인 경우 빈 배열이 반환됩니다.', () => {
    const resultFiles: FileInfoType[] = [];

    expect(filterImages()).toEqual(resultFiles);
  });
});
