import * as S from "./style";
import { FileIcon, WriteIcon } from "../../assets";
import { ToBackButton } from "components";

const DetailPageHeader = () => {
  return (
    <S.Header>
      <ToBackButton />
      <S.UpdateBox>
        <WriteIcon />
        <S.AddFileBTN>
          <FileIcon />
          <S.AddFileText>첨부 파일</S.AddFileText>
        </S.AddFileBTN>
      </S.UpdateBox>
    </S.Header>
  );
};

export default DetailPageHeader;
