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

  return (
    <S.Header>
      <S.Nav>
        <Link href='/'>
          <Image src='/GSMLogo.png' alt='' width='66' height='37' />
        </Link>
        <I.VerticalBarIcon />
        <S.ApproveRequest>
          <S.Text
            css={
              hasNotification &&
              css`
                color: #050505;
              `
            }
            onClick={() => setShowApproveModal(!showApproveModal)}
          >
            가입 요청
          </S.Text>
          {hasNotification && <S.Notification />}

          {showApproveModal && (
            <ApproveModal close={() => setShowApproveModal(false)} />
          )}
        </S.ApproveRequest>
      </S.Nav>

      <S.UserNameText>{name} 선생님</S.UserNameText>
    </S.Header>
  );
};

export default Header;
