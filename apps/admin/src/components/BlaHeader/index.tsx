import * as S from "./style";
import React from "react";
import { PlusIcon } from "../../assets";

interface BlaHeaderProps {
  kind: string;
  isGallery: boolean;
}

const BlaHeader: React.FC<BlaHeaderProps> = ({ kind, isGallery }) => {
  return (
    <S.BlaHeader>
      <S.CategoryTitle>{kind}</S.CategoryTitle>
      <S.BlaBTN>
        <PlusIcon />
      </S.BlaBTN>
    </S.BlaHeader>
  );
};

export default BlaHeader;
