import Image from "next/image";
import * as S from "./style";
// import * as I from "assets";
import * as I from "../../assets";
import Link from "next/link";
import { css } from "@emotion/react";
import React, { useState } from "react";
// import { ApproveModal } from "components";
import { ApproveModal } from "../../components";

interface HeaderProps {
  hasNotification: boolean;
  name: string;
}

const Header: React.FC<HeaderProps> = ({ hasNotification, name }) => {
  const [showApproveModal, setShowApproveModal] = useState<boolean>(false);
  console.log(showApproveModal);
  return (
    <S.Header>
      <S.Nav>
        <Link href="/">
          <Image src="/GSMLogo.png" alt="" width="66" height="37" />
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
