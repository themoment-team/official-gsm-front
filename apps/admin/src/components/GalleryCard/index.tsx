import * as S from "./style";

interface GalleryCardProps {
  imgUrl: string;
  title: string;
  subTitle: string;
  writer: string;
  date: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  imgUrl,
  title,
  subTitle,
  writer,
  date,
}) => {
  return (
    <S.CardWrpapper>
      <S.IMGWrpapper>
        <S.ContentIMG width={349} height={220} src={imgUrl} alt="ContentIMG" />
      </S.IMGWrpapper>
      <S.Title>{title}</S.Title>
      <S.Text>{subTitle}</S.Text>
      <S.DetailWrpapper>
        <S.Details>{writer}</S.Details>
        <S.Details>{date}</S.Details>
      </S.DetailWrpapper>
    </S.CardWrpapper>
  );
};

export default GalleryCard;
