import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { css } from '@emotion/react';

import * as I from 'admin/assets';
import { ApproveModal, LogoutModal } from 'admin/components';

import { useGetUnapproveList, useGetUserInfo } from 'api/admin';

import * as S from './style';

type ModalType = 'Approve' | 'Logout';

const Header: React.FC = () => {
  const [hasNotification, setHasNotification] = useState<boolean>(false);

  const [showModal, setShowModal] = useState<'Approve' | 'Logout' | false>(
    false
  );

  const { data: unapproveList } = useGetUnapproveList();
  const { data: userInfo } = useGetUserInfo();

  useEffect(() => {
    setHasNotification(!!unapproveList?.length);
  }, [unapproveList]);

  const handleShowModal = (modalType: ModalType) => {
    if (showModal === modalType) {
      setShowModal(false);
    } else {
      setShowModal(modalType);
    }
  };

  return (
    <S.Header>
      <Link href='/'>
        <Image src='/GSMLogo.png' alt='' width='66' height='37' />
      </Link>

      <S.ApproveSection>
        <S.ApproveRequest
          onClick={() => handleShowModal('Approve')}
          css={css`
            cursor: ${hasNotification ? 'pointer' : 'auto'};
          `}
        >
          <I.NotificationIcon hasNotification={hasNotification} />
          가입 요청
          {hasNotification && <S.Notification />}
          {hasNotification && showModal === 'Approve' && (
            <ApproveModal close={() => setShowModal(false)} />
          )}
        </S.ApproveRequest>

        <S.LogoutSection>
          <S.LogoutButton
            onClick={() => handleShowModal('Logout')}
            css={css`
              color: ${showModal === 'Logout' ? '#9e9e9e' : '#616161'};
            `}
          >
            {userInfo?.userName} 선생님
          </S.LogoutButton>
          {showModal === 'Logout' && (
            <LogoutModal name={userInfo?.userName ?? ''} />
          )}
        </S.LogoutSection>
      </S.ApproveSection>
    </S.Header>
  );
};

export default Header;
