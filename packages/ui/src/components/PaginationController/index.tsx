import React from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { PaginationIcon } from 'ui/assets';

import * as S from './style';

interface PagiNationControllerProps {
  /** 1 ~ totalPages */
  pageNumber: number;
  totalPages: number;
}

const PaginationController: React.FC<PagiNationControllerProps> = ({
  pageNumber,
  totalPages,
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
    <S.PaginationController>
      <S.PaginationButton
        onClick={() => updatePageNumber(pageNumber - 1)}
        type='button'
        disabled={pageNumber === 1}
        aria-label='이전'
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
        aria-label='다음'
      >
        <PaginationIcon turn='right' disabled={pageNumber === totalPages} />
      </S.PaginationButton>
    </S.PaginationController>
  );
};

export default PaginationController;
