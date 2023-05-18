import Image from "next/image";
import * as S from "./style";
import * as I from "assets";
import Link from "next/link";

const Header = () => {
  return (
    <S.Header>
      <S.HeaderWrapper>
        <Image src="/GSMLogo.png" alt="" width="66" height="37" />
        <I.HeaderReactangle />
        <Link href="/">
          <S.Text>홈</S.Text>
        </Link>
        <S.Text>가입 요청</S.Text>
      </S.HeaderWrapper>
      <S.TeacherText>정문정 선생님</S.TeacherText>
    </S.Header>
  );
};

export default Header;
