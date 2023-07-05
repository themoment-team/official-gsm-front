import React from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { PaginationIcon } from 'ui/assets';

import * as S from './style';

interface PageNationControllerProps {
  /** 1 ~ totalpages */
  pageNumber: number;
  totalPages: number;
  marginTop?: string;
}

const PaginationController: React.FC<PageNationControllerProps> = ({
  pageNumber,
  totalPages,
  marginTop = '0',
}) => {
  /**
   * return - `/`, `/newsletter`, `/gallery`
   */
  const pathname = usePathname();

  const { push } = useRouter();

  const updatePageNumber = (pageNumber: number) => {
    const params = new URLSearchParams();
    params.set('pageNumber', String(pageNumber));

    return push(`${pathname}?${params.toString()}`);
  };

  return (
    <S.PaginationController marginTop={marginTop}>
      <S.PaginationButton
        onClick={() => updatePageNumber(pageNumber - 1)}
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
              onClick={() => updatePageNumber(showPageNumber)}
            >
              {showPageNumber}
            </S.PageNumberButton>
          );
        })}
      </S.PageNumberWrapper>
      <S.PaginationButton
        onClick={() => updatePageNumber(pageNumber + 1)}
        type='button'
        disabled={pageNumber === totalPages}
      >
        <PaginationIcon turn='right' disabled={pageNumber === totalPages} />
      </S.PaginationButton>
    </S.PaginationController>
  );
};

export default PaginationController;
