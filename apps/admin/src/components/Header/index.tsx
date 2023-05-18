import Image from "next/image";
import * as S from "./style";
// import * as I from "assets";
import * as I from "../../assets";
import Link from "next/link";
import { css } from "@emotion/react";
import { useState } from "react";
// import { ApproveModal } from "components";
import { ApproveModal } from "../../components";

interface HeaderProps {
  hasNotification: boolean;
  name: string;
}

const Header = ({ hasNotification, name }: HeaderProps) => {
  const [showApproveModal, setShowApproveModal] = useState<boolean>(false);

  return (
    <S.Header>
      <S.Nav>
        <Image src="/GSMLogo.png" alt="" width="66" height="37" />
        <I.VerticalBarIcon />
        <Link href="/">
          <S.Text>홈</S.Text>
        </Link>
        <S.Notofication onClick={() => setShowApproveModal(!showApproveModal)}>
          <S.Text
            css={
              hasNotification &&
              css`
                color: #050505;
                cursor: pointer;
              `
            }
          >
            가입 요청
          </S.Text>
          {hasNotification && <S.Notification />}
        </S.Notofication>
      </S.Nav>
      {hasNotification && showApproveModal && (
        <ApproveModal close={() => setShowApproveModal(false)} />
      )}
      <S.UserNameText>{name} 선생님</S.UserNameText>
    </S.Header>
  );
};

export default Header;
