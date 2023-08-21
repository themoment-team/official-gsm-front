import * as T from './style';

const Table900 = () => {
  const TableContent1 = [
    '행정실/각 학년부',
    '보건실',
    '각 학년부',
    '인문정보부',
    '행정실',
    '행정실',
    '행정실',
    '행정실',
  ];

  const TableContent2 = [
    '학교생활기록부',
    '학생건강기록부',
    '학부모서비스 이용자 명단',
    '홈페이지 회원정보',
    '민원사무처리부',
    '학교운영위원회 명부',
    '스쿨뱅킹(CMS) 정보',
    '발전기금 기탁자 명부',
  ];

  const TableContent3 = [
    '행정실062-949-6806\n1학년 062-949-6813\n2학년 062-949-6821\n3학년\n062-949-6834',
    '062-949-6820',
    '1학년 062-949-6813\n2학년 062-949-6821\n3학년 062-949-6834',
    '062-949-6850',
    '062-949-6806',
    '062-949-6804',
    '062-949-6806',
    '062-949-6808',
  ];

  return (
    <>
      <T.TableTitle>
        <T.TableTitleContent>열람 요구 접수 처리부서명</T.TableTitleContent>
        <T.TableContent>
          {TableContent1.map((content, index) => (
            <T.TableRowContent key={index}>{content}</T.TableRowContent>
          ))}
        </T.TableContent>
      </T.TableTitle>
      <T.TableTitle>
        <T.TableTitleContent>개인정보파일명</T.TableTitleContent>
        <T.TableContent>
          {TableContent2.map((content, index) => (
            <T.TableRowContent key={index}>{content}</T.TableRowContent>
          ))}
        </T.TableContent>
      </T.TableTitle>
      <T.TableTitle>
        <T.TableTitleContent>문의처</T.TableTitleContent>
        <T.TableContent>
          {TableContent3.map((content, index) => (
            <T.TableRowContent key={index}>{content}</T.TableRowContent>
          ))}
        </T.TableContent>
      </T.TableTitle>
    </>
  );
};

export default Table900;
