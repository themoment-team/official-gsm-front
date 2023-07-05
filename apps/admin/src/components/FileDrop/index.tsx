'use client';

import type { ChangeEvent } from 'react';
import React, { useCallback, useRef, useState, useEffect } from 'react';

import FileCard from '../FileCard';
import FileUploadLabel from '../FileUploadLabel';

import * as S from './style';
interface IFileTypes {
  id: number;
  object: File;
}

const FileDrop = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [files, setFiles] = useState<IFileTypes[]>([]);

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
        tempFiles = [
          ...tempFiles,
          {
            id: fileId.current++,
            object: file,
          },
        ];
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

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer!.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e);
      setIsDragging(false);
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
      <S.UploadBox className='DragDrop'>
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
        <FileUploadLabel
          className={isDragging ? 'DragDrop-File-Dragging' : 'DragDrop-File'}
          htmlFor='fileUpload'
          ref={dragRef}
        />

        <div className='DragDrop-Files'>
          {files.length > 0 &&
            files.map((file: IFileTypes) => {
              const {
                id,
                object: { name },
              } = file;

              return (
                <S.FileCardBox key={name}>
                  <FileCard
                    fileName={name}
                    onClick={() => handleFilterFile(id)}
                  />
                </S.FileCardBox>
              );
            })}
        </div>
      </S.UploadBox>
    </div>
  );
};

export default FileDrop;
