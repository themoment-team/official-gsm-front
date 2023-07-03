import React from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { css } from '@emotion/react';

import type { PostCategoryType } from 'api/client';

import * as S from './style';

const categoryArray = [
  { categoryQueryString: 'NOTICE', label: '공지사항' },
  { categoryQueryString: 'FAMILY_NEWSLETTER', label: '가정통신문' },
  { categoryQueryString: 'EVENT_GALLERY', label: '행사 갤러리' },
] as const;

interface FormCategoryProps {
  category: PostCategoryType;
}

const FormCategory: React.FC<FormCategoryProps> = ({ category }) => {
  const acticeStyle = (categoryQueryString: PostCategoryType) =>
    css`
      color: ${categoryQueryString === category ? '#ffffff' : '#a4a4a4'};
    `;

  const pathname = usePathname();
  const { replace } = useRouter();

  const updateCategory = (category: PostCategoryType) => {
    const params = new URLSearchParams();
    params.set('category', String(category));

    return replace(`${pathname}?${params.toString()}`);
  };

  return (
    <S.Category>
      {categoryArray.map(({ categoryQueryString, label }) => (
        <S.CategoryLabel
          key={categoryQueryString}
          onClick={() => updateCategory(categoryQueryString)}
          css={acticeStyle(categoryQueryString)}
        >
          ∙&nbsp;&nbsp;{label}
        </S.CategoryLabel>
      ))}
    </S.Category>
  );
};

export default FormCategory;
