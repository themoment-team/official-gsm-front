import * as S from "./style";

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
        <S.ContentIMG width={349} height={220} src={imgUrl} alt="ContentIMG" />
      </S.IMGWrapper>
      <S.Title>{title}</S.Title>
      <S.Text>{description}</S.Text>
      <S.DetailWrapper>
        <S.Details>{writer}</S.Details>
        <S.Details>{date}</S.Details>
      </S.DetailWrapper>
    </S.CardWrapper>
  );
};

export default GalleryCard;
