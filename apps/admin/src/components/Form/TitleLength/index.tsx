import styled from '@emotion/styled';

import { useWatch, type Control } from 'react-hook-form';

import type { PostFormType } from 'admin/types';

interface FormTitleLengthProps {
  control: Control<PostFormType>;
}

const FormTitleLength: React.FC<FormTitleLengthProps> = ({ control }) => {
  const title = useWatch({ control, name: 'title' });

  return <TitleLength>{title?.length ?? 0}/60</TitleLength>;
};

export default FormTitleLength;

const TitleLength = styled.span`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  position: absolute;
  right: 1rem;
`;
