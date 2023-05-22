import * as S from "./style";
import React from "react";
import Image from "next/image";
import { css } from "@emotion/react";

interface PostContentProps {
  postSeq: number;
  postTitle: string;
  postWriter: string;
  createdAt: string;
  fileIsExist: boolean;
}

const PostContent: React.FC<PostContentProps> = ({
  postSeq,
  postTitle,
  postWriter,
  createdAt,
  fileIsExist,
}) => {
  const updateDate = (date: string) => {
    const newDate = date.slice(0, 10).replace(/-/g, ".");
    return newDate;
  };

  return (
    <S.ContentWrapper>
      <S.ImageWrapper>
        {!fileIsExist ? (
          <Image alt="content img" src={""} fill />
        ) : (
          <Image
            alt="content img"
            src={"/GSMLogo2.png"}
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
          <S.Details>{updateDate(createdAt)}</S.Details>
        </S.DetailWrapper>
        <S.Description>{}</S.Description>
      </S.TextWrapper>
    </S.ContentWrapper>
  );
};

export default PostContent;
