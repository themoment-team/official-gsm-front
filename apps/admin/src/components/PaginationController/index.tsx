import React from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { PaginationIcon } from 'admin/assets';

import * as S from './style';

interface PageNationControllerProps {
  /** 1 ~ totalpages */
  pageNumber: number;
  totalPages: number;
}

const PaginationController: React.FC<PageNationControllerProps> = ({
  pageNumber,
  totalPages,
}) => {
  /**
   * return - `/`, `/newsletter`, `/gallery`
   */
  const pathname = usePathname();

  const { push } = useRouter();

  const previousPage = `${pathname}?pageNumber=${pageNumber - 1}`;
  const nextPage = `${pathname}?pageNumber=${pageNumber + 1}`;

  return (
    <S.PaginationController>
      <S.PaginationButton
        onClick={() => push(previousPage)}
        type='button'
        disabled={pageNumber === 1}
      >
        <PaginationIcon turn='left' disabled={pageNumber === 1} />
      </S.PaginationButton>
      <S.PageNumberWrapper>
        {[...Array(totalPages)].map((_, index) => {
          const showPageNumber = index + 1;

          return (
            <S.PageNumberButton
              key={showPageNumber}
              type='button'
              selected={pageNumber === showPageNumber}
              onClick={() => push(`${pathname}?pageNumber=${showPageNumber}`)}
            >
              {showPageNumber}
            </S.PageNumberButton>
          );
        })}
      </S.PageNumberWrapper>
      <S.PaginationButton
        onClick={() => push(nextPage)}
        type='button'
        disabled={pageNumber === totalPages}
      >
        <PaginationIcon turn='right' disabled={pageNumber === totalPages} />
      </S.PaginationButton>
    </S.PaginationController>
  );
};

export default PaginationController;
