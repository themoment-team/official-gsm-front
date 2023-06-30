import React from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { css } from '@emotion/react';

import { PaginationIcon } from 'admin/assets';

import * as S from './style';

interface PageNationControllerProps {
  pageNumber: number;
  totalPages: number;
}

const PaginationController: React.FC<PageNationControllerProps> = ({
  pageNumber,
  totalPages,
}) => {
  const { push } = useRouter();
  const pathname = usePathname();

  const previousPage = `${pathname}?pageNumber=${pageNumber - 1}`;
  const nextPage = `${pathname}?pageNumber=${pageNumber + 1}`;

  return (
    <S.PaginationController>
      <S.PaginationButton
        onClick={() => push(previousPage)}
        type='button'
        disabled={pageNumber === 0}
      >
        <PaginationIcon turn='left' disabled={pageNumber === 0} />
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
            onClick={() => push(`${pathname}?pageNumber=${index}`)}
          >
            {index + 1}
          </S.PageNumberButton>
        ))}
      </S.PageNumberWrapper>
      <S.PaginationButton
        onClick={() => push(nextPage)}
        type='button'
        disabled={pageNumber === totalPages - 1}
      >
        <PaginationIcon turn='right' disabled={pageNumber === totalPages - 1} />
      </S.PaginationButton>
    </S.PaginationController>
  );
};

export default PaginationController;
