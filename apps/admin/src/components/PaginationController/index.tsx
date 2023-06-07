import React from 'react';

import { css } from '@emotion/react';

import * as S from './style';

interface PageNationControllerProps {
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const PaginationController: React.FC<PageNationControllerProps> = ({
  pageNumber,
  setPageNumber,
  totalPages,
}) => (
  <S.PaginationController>
    <S.PaginationButton
      onClick={() => setPageNumber((value) => value - 1)}
      type='button'
      disabled={pageNumber === 0}
    >
      이전
    </S.PaginationButton>
    <S.PageNumberWrapper>
      {[...Array(totalPages)].map((_, index) => (
        <S.PageNumberButton
          key={index}
          type='button'
          css={
            pageNumber === index &&
            css`
              color: #050505;
            `
          }
          onClick={() => setPageNumber(index)}
        >
          {index + 1}
        </S.PageNumberButton>
      ))}
    </S.PageNumberWrapper>
    <S.PaginationButton
      onClick={() => setPageNumber((value) => value + 1)}
      type='button'
      disabled={pageNumber === totalPages - 1}
    >
      다음
    </S.PaginationButton>
  </S.PaginationController>
);

export default PaginationController;