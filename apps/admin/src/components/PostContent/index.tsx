import * as S from './style';
import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { DateComponent } from 'ui';

interface PostContentProps {
  postSeq: number;
  postTitle: string;
  postWriter: string;
  createdAt: string;
  fileIsExist: boolean;
  postContent: string;
  fileInfo: [
    {
      fileUrl: string;
      fileName: string;
      fileExtension: string;
    }
  ];
}

const PostContent: React.FC<PostContentProps> = ({
  postSeq,
  postTitle,
  postWriter,
  createdAt,
  fileIsExist,
  postContent,
  fileInfo,
}) => {
  return (
    <S.ContentWrapper>
      <S.ImageWrapper>
        {fileIsExist ? (
          <Image alt='content img' src={fileInfo[0].fileUrl} fill />
        ) : (
          <Image
            alt='content img'
            src={'/blurGSMLogo.png'}
            css={css`
              mix-blend-mode: luminosity;
            `}
            width={87}
            height={53}
          />
        )}
      </S.ImageWrapper>
      <S.TextWrapper>
        <S.Title>{postTitle}</S.Title>
        <S.DetailWrapper>
          <S.Details>{postWriter}</S.Details>
          <S.Dot />
          <DateComponent createdAt={createdAt} />
        </S.DetailWrapper>
        <S.Description>{postContent}</S.Description>
      </S.TextWrapper>
    </S.ContentWrapper>
  );
};

export default PostContent;
