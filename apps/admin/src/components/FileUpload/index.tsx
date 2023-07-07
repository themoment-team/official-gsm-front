'use client';

import type { ChangeEvent } from 'react';
import React, { useCallback, useRef, useState, useEffect } from 'react';

import { FileUploadLabel, FileCard } from 'admin/components';

import * as S from './style';
interface IFileTypes {
  id: number;
  object: File;
}

const FileDrop = ({ file, isGallery }: any) => {
  const [files, setFiles] = useState<IFileTypes[]>(file);

  const dragRef = useRef<HTMLLabelElement | null>(null);
  const fileId = useRef<number>(0);

  const onChangeFiles = useCallback(
    (e: ChangeEvent<HTMLInputElement> | any): void => {
      let selectFiles: File[] = [];
      let tempFiles: IFileTypes[] = files;

      if (e.type === 'drop') {
        selectFiles = e.dataTransfer.files;
      } else {
        selectFiles = e.target.files;
      }

      for (const file of selectFiles) {
        const isDuplicate = tempFiles.some(
          (existingFile) => existingFile.object.name === file.name
        );
        if (!isDuplicate) {
          tempFiles = [
            ...tempFiles,
            {
              id: fileId.current++,
              object: file,
            },
          ];
        }
      }

      setFiles(tempFiles);
    },
    [files]
  );

  const handleFilterFile = useCallback(
    (id: number): void => {
      setFiles(files.filter((file: IFileTypes) => file.id !== id));
    },
    [files]
  );

  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e);
    },
    [onChangeFiles]
  );

  const initDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDragIn);
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return (
    <div>
      {files.length > 0 ? (
        <>
          <S.FileTitleWrapper>
            <S.FormItemTitle>
              첨부 파일
              {isGallery && '(필수)'}
            </S.FormItemTitle>
            <FileUploadLabel dragRef={dragRef} />
            <input
              type='file'
              id='fileUpload'
              style={{ display: 'none' }}
              multiple={true}
              onChange={onChangeFiles}
            />
          </S.FileTitleWrapper>
          <S.FileCardBox>
            {files.map((file: IFileTypes, i) => (
              <S.FileCardWrapper key={i}>
                <FileCard
                  fileName={file.object ? file.object.name : ''}
                  onClick={() => handleFilterFile(file.id)}
                />
              </S.FileCardWrapper>
            ))}
          </S.FileCardBox>
        </>
      ) : (
        <S.UploadBox htmlFor='fileUpload' ref={dragRef}>
          <input
            type='file'
            id='fileUpload'
            style={{ display: 'none' }}
            multiple={true}
            onChange={onChangeFiles}
          />
          <S.UploadTitle>
            첫번째 등록하신 이미지는 썸네일 역할을 합니다.
          </S.UploadTitle>
          <FileUploadLabel dragRef={dragRef} />
        </S.UploadBox>
      )}
    </div>
  );
};

export default FileDrop;
