import * as S from "./style";
import React from "react";
import { PlusIcon, SeeMoreIcon } from "../../assets";

interface BlaHeaderProps {
  kind: string;
  seeMore: boolean;
  isAdmin: boolean;
}

const BlaHeader: React.FC<BlaHeaderProps> = ({ kind, seeMore, isAdmin }) => {
  return (
    <S.BlaHeader>
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
        <S.BlaBTN>
          <PlusIcon />
        </S.BlaBTN>
      )}
    </S.BlaHeader>
  );
};

export default BlaHeader;
