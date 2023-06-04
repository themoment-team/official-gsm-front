import { PaginationIcon } from 'admin/assets';

import * as S from './style';

interface PaginationProp {
  totalPages: number;
}

const Pagination: React.FC<PaginationProp> = ({ totalPages }) => {
  let pageNumbers: Array<number> = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <S.PaginationWrapper>
      <S.CursorPointer>
        <PaginationIcon turn='left' />
      </S.CursorPointer>
      <S.PageNumberWrapper>
        {pageNumbers.map((item) => (
          <S.PageNumber key={item}>{item}</S.PageNumber>
        ))}
      </S.PageNumberWrapper>
      <S.CursorPointer>
        <PaginationIcon turn='right' />
      </S.CursorPointer>
    </S.PaginationWrapper>
  );
};

export default Pagination;
