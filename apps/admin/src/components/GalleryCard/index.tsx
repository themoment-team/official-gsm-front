import * as S from "./style";
import Image from "next/image";
import React from "react";
import { DateComponent } from "ui";

interface FileInfo {
  fileUrl: string;
  fileName: string;
}

interface GalleryCardProps {
  fileInfo: FileInfo[];
  title: string;
  description: string;
  writer: string;
  createdAt: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  fileInfo,
  title,
  description,
  writer,
  createdAt,
}) => {
  return (
    <S.CardWrapper>
      <S.IMGWrapper>
        <Image fill src={fileInfo[0].fileUrl} alt="ContentIMG" />
      </S.IMGWrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.DetailWrapper>
        <S.Writer>{writer}</S.Writer>
        <DateComponent createdAt={createdAt} />
      </S.DetailWrapper>
    </S.CardWrapper>
  );
};

export default GalleryCard;
