import * as T from './style';

const TableContent1 = [
  '광주소프트웨어마이스터고등학교 홈페이지 유지관리',
  '방과후 학교 프로그램운영',
];

const Table900 = () => (
  <>
    <T.TableTitle>
      <T.TableTitleContent>위탁하는 업무의 내용</T.TableTitleContent>
      <T.TableContent>
        {TableContent1.map((i) => (
          <T.TableRowContent key={i}>{i}</T.TableRowContent>
        ))}
      </T.TableContent>
    </T.TableTitle>

    <T.TableTitle>
      <T.TableTitleContent>위탁항목</T.TableTitleContent>
      <T.TableContent>
        <T.TableRowContent>
          이름,학년,반,번호
          <br />※ 회원가입시 수집하는 항목
        </T.TableRowContent>
        <T.TableRowContent>
          이름,학년,반,번호,학생개인연락처,부 또는 모 성함 및 연락처
          <br />※ 위탁시 제공하는 항목
        </T.TableRowContent>
      </T.TableContent>
    </T.TableTitle>

    <T.TableTitle>
      <T.TableTitleContent>수탁업체(명)</T.TableTitleContent>
      <T.TableContent>
        <T.TableRowContent>
          업체명: 더모먼트
          <br /> 주소: 광주광역시 광산구 상무대로 312
          <br /> 전화번호: 062-949-6800
        </T.TableRowContent>
        <T.TableRowContent>
          업체명: 더모먼트
          <br /> 주소: 광주광역시 광산구 상무대로 312
          <br /> 전화번호: 062-949-6800
        </T.TableRowContent>
      </T.TableContent>
    </T.TableTitle>
  </>
);

export default Table900;
