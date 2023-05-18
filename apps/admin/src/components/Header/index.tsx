import Image from "next/image";
import * as S from "./style";
// import * as I from "assets";
import * as I from "../../assets";
import Link from "next/link";
import { useState } from "react";
import { css } from "@emotion/react";

interface HeaderProps {
  hasNotification: boolean;
  name: string;
}

const Header = ({ hasNotification, name }: HeaderProps) => {
  return (
    <S.Header>
      <S.Nav>
        <Image src="/GSMLogo.png" alt="" width="66" height="37" />
        <I.HeaderReactangle />
        <Link href="/">
          <S.Text>홈</S.Text>
        </Link>
        <S.Notofication>
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
      <S.UserNameText>{name} 선생님</S.UserNameText>
    </S.Header>
  );
};

export default Header;
