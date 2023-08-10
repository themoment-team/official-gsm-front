import * as S from './style';

const SecondTable = () => (
  <S.TableTitle>
    <S.TableTitleContent>위탁하는 업무의 내용</S.TableTitleContent>
    <S.TableTitleContent>수탁 업체(명)</S.TableTitleContent>
    <S.TableTitleContent>위탁 항목</S.TableTitleContent>
    <S.TableContent>
      <S.TableRowContent>
        광주소프트웨어마이스터고등학교
        <br /> 홈페이지 유지관리
      </S.TableRowContent>
      <S.TableRowContent>
        이름,학년,반,번호
        <br />※ 회원가입시 수집하는 항목
      </S.TableRowContent>
      <S.TableRowContent>
        업체명: ㈜엑스메카
        <br />
        주소: 광주광역시 서구 천변좌로 268 KDB생명빌딩 2510호
        <br />
        전화번호: 062-374-9986
      </S.TableRowContent>
      <S.TableRowContent>방과후 학교 프로그램운영</S.TableRowContent>
      <S.TableRowContent>
        이름,학년,반,번호,학생개인연락처,부 또는 모 성함 및 연락처
        <br />※ 위탁시 제공하는 항목
      </S.TableRowContent>
      <S.TableRowContent>
        업체명: ㈜엑스메카
        <br />
        주소: 광주광역시 서구 천변좌로 268 KDB생명빌딩 2510호
        <br />
        전화번호: 062-374-9986
      </S.TableRowContent>
    </S.TableContent>
  </S.TableTitle>
);

export default SecondTable;
