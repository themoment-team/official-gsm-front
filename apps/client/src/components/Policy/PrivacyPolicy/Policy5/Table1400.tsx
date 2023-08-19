import * as T from './style';

const Table1400 = () => (
  <>
    <T.TableTitle isOnly={false}>
      <T.TableTitleContent>위탁하는 업무의 내용</T.TableTitleContent>
      <T.TableTitleContent>위탁 항목</T.TableTitleContent>
      <T.TableContent>
        <T.TableRowContent>
          광주소프트웨어마이스터고등학교 홈페이지 유지관리
        </T.TableRowContent>
        <T.TableRowContent>
          이름,학년,반,번호※ 회원가입시 수집하는 항목
        </T.TableRowContent>
        <T.TableRowContent>방과후 학교 프로그램운영</T.TableRowContent>
        <T.TableRowContent>
          이름,학년,반,번호,학생개인연락처,부 또는 모 성함 및 연락처
          <br />※ 위탁시 제공하는 항목
        </T.TableRowContent>
      </T.TableContent>
    </T.TableTitle>

    <T.TableTitle isOnly={true}>
      <T.TableTitleContent>수탁업체(명)</T.TableTitleContent>
      <T.TableContent>
        <T.TableRowContent>더모먼트</T.TableRowContent>
        <T.TableRowContent>
          업체명: ㈜엑스메카
          <br /> 주소: 광주광역시 북구 첨단과기로208번길 43-22 와이어스파크 A동
          612호
          <br /> 전화번호: 062-374-9986
        </T.TableRowContent>
        <T.TableRowContent>
          업체명: ㈜엑스메카
          <br /> 주소: 광주광역시 북구 첨단과기로208번길 43-22 와이어스파크 A동
          612호
          <br /> 전화번호: 062-374-9986
        </T.TableRowContent>
      </T.TableContent>
    </T.TableTitle>
  </>
);

export default Table1400;
