import * as S from "./style";
import Image from "next/image";
import { DateComponent } from "ui";

interface GalleryCardProps {
  imgUrl: string;
  title: string;
  description: string;
  writer: string;
  date: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  imgUrl,
  title,
  description,
  writer,
  date,
}) => {
  return (
    <S.CardWrapper>
      <S.IMGWrapper>
        <Image fill src={imgUrl} alt="ContentIMG" />
      </S.IMGWrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.DetailWrapper>
        <S.Writer>{writer}</S.Writer>
        <DateComponent createdAt={date} />
      </S.DetailWrapper>
    </S.CardWrapper>
  );
};

export default GalleryCard;
