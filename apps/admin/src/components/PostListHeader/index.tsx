import * as S from "./style";
import React from "react";
import { PlusIcon, SeeMoreIcon } from "../../assets";

interface PostListHeaderProps {
  kind: string;
  seeMore: boolean;
  isAdmin: boolean;
}

const PostListHeader: React.FC<PostListHeaderProps> = ({
  kind,
  seeMore,
  isAdmin,
}) => {
  return (
    <S.PostListHeader>
      {seeMore ? (
        <S.SeeMoreException>
          <S.CategoryTitle>{kind}</S.CategoryTitle>
          <S.SeeMoreText>더보기</S.SeeMoreText>
          <SeeMoreIcon />
        </S.SeeMoreException>
      ) : (
        <S.CategoryTitle>{kind}</S.CategoryTitle>
      )}
      {isAdmin && (
        <S.AddPostBTN>
          <PlusIcon />
        </S.AddPostBTN>
      )}
    </S.PostListHeader>
  );
};

export default PostListHeader;
