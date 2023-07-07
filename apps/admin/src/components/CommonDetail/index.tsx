import { useRef } from 'react';

import { useRouter } from 'next/navigation';

import { EditButton, DeletePostButton, DeleteModal } from 'admin/components';

import { useDeletePost } from 'api/admin';
import { useGetPostDetail } from 'api/client';

import { WriterAndDate, FileButton } from 'ui';

import * as S from './style';

interface CommonDetailProps {
  postSeq: number;
}

const categorys = {
  NOTICE: '',
  FAMILY_NEWSLETTER: 'newsletter',
  EVENT_GALLERY: 'gallery',
} as const;

const CommonDetail: React.FC<CommonDetailProps> = ({ postSeq }) => {
  const { replace } = useRouter();

  const { data } = useGetPostDetail(postSeq);
  const category = data?.category;

  const dialog = useRef<HTMLDialogElement>(null);

  const { mutate: deletePost, isSuccess } = useDeletePost();

  if (isSuccess && category) {
    replace(`/${categorys[category]}`);
  }

  return (
    <>
      {data && (
        <S.CommonDetailWrapper>
          <S.Title>{data.postTitle}</S.Title>
          <WriterAndDate
            workspace='admin'
            margin='0.75rem 0'
            createdAt={data.createdAt}
            postWriter={data.postWriter}
          />
          <S.ButtonWrapper>
            <EditButton href='/post/edit' />
            <DeletePostButton onClick={() => dialog.current?.showModal()} />
          </S.ButtonWrapper>
          <S.Horizon />
          <S.Content>{data.postContent}</S.Content>
          <S.Horizon />
          {data.fileInfo.length !== 0 && (
            <>
              <S.FileTitle>첨부 파일</S.FileTitle>
              <S.FileList>
                {data.fileInfo.map((item, i) => (
                  <FileButton key={i} file={item} />
                ))}
              </S.FileList>
            </>
          )}
          <S.DeleteModal ref={dialog}>
            <DeleteModal onClick={() => deletePost(postSeq)} />
          </S.DeleteModal>
        </S.CommonDetailWrapper>
      )}
    </>
  );
};

export default CommonDetail;
