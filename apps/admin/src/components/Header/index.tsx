import { useState } from 'react';
import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { css } from '@emotion/react';

import * as I from 'admin/assets';
import { ApproveModal } from 'admin/components';

import * as S from './style';

interface HeaderProps {
  hasNotification: boolean;
  name: string;
}

const Header: FC<HeaderProps> = ({ hasNotification, name }) => {
  const [showApproveModal, setShowApproveModal] = useState<boolean>(false);

  const closeApproveModal = () => setShowApproveModal(false);

  return (
    <S.Header>
      <Link href='/'>
        <Image src='/GSMLogo.png' alt='' width='66' height='37' />
      </Link>

      <S.ApproveSection>
        <S.ApproveRequest>
          <I.NotificationIcon hasNotification={hasNotification} />
          <p
            css={
              hasNotification &&
              css`
                cursor: pointer;
              `
            }
            onClick={() => setShowApproveModal(!showApproveModal)}
          >
            가입 요청
            {hasNotification && <S.Notification />}
          </p>
          {hasNotification && showApproveModal && (
            <ApproveModal close={closeApproveModal} />
          )}
        </S.ApproveRequest>

        <p className='teacher'>{name} 선생님</p>
      </S.ApproveSection>
    </S.Header>
  );
};

export default Header;
