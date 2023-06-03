import { FileIcon, WriteIcon } from 'admin/assets';
// import { ToBackButton } from "components";
import { ToBackButton } from 'admin/components';

import * as S from './style';

const DetailPageHeader = () => (
  <S.Header>
    <S.HeaderWrapper>
      <ToBackButton />
      <S.UpdateBox>
        <WriteIcon color='#050505' />
        <S.AddFileBTN>
          <FileIcon />
          <S.AddFileText>첨부 파일</S.AddFileText>
        </S.AddFileBTN>
      </S.UpdateBox>
    </S.HeaderWrapper>
  </S.Header>
);

export default DetailPageHeader;
