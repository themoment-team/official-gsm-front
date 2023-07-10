import { useWatch, type Control } from 'react-hook-form';

import { FormErrorMessage } from 'admin/components';
import type { PostFormType } from 'admin/types';

interface FormTitleLengthOverProps {
  control: Control<PostFormType>;
}

const FormTitleLengthOver: React.FC<FormTitleLengthOverProps> = ({
  control,
}) => {
  const title = useWatch({ control, name: 'title' });

  return title?.length >= 60 ? (
    <FormErrorMessage>글자수를 초과하였습니다.</FormErrorMessage>
  ) : (
    <></>
  );
};

export default FormTitleLengthOver;
