import { useEffect, useState } from 'react';
import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { css } from '@emotion/react';

import * as I from 'admin/assets';
import { ApproveModal } from 'admin/components';

import { useGetUnapproveList, useGetUserInfo } from 'api/admin';

import * as S from './style';

const Header: FC = () => {
  const [showApproveModal, setShowApproveModal] = useState<boolean>(false);
  const [hasNotification, setHasNotification] = useState<boolean>(false);

  const { data: unapproveList } = useGetUnapproveList();
  const { data: userInfo } = useGetUserInfo();

  const closeApproveModal = () => setShowApproveModal(false);

  useEffect(() => {
    setHasNotification(true);
  }, [unapproveList]);

  return (
    <S.Header>
      <Link href='/'>
        <Image src='/GSMLogo.png' alt='' width='66' height='37' />
      </Link>

      <S.ApproveSection>
        <S.ApproveRequest
          onClick={() => setShowApproveModal(!showApproveModal)}
          css={css`
            cursor: ${hasNotification ? 'pointer' : 'auto'};
          `}
        >
          <I.NotificationIcon hasNotification={hasNotification} />
          <p>
            가입 요청
            {hasNotification && <S.Notification />}
          </p>
          {hasNotification && showApproveModal && (
            <ApproveModal close={closeApproveModal} />
          )}
        </S.ApproveRequest>

        <p className='teacher'>{userInfo?.userName} 선생님</p>
      </S.ApproveSection>
    </S.Header>
  );
};

export default Header;
