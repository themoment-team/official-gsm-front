import * as T from './style';

const FifthTable900 = () => {
  const TableContent1 = ['담당부서', '성명', '전화번호'];

  const TableContent2 = [
    '광주소프트웨어마이스터고등학교장',
    '최홍진',
    '062-949-6801',
  ];

  const TableContent3 = ['인문정보부', '정문정', '062-949-6850'];

  return (
    <>
      <T.FifthTableTitle>
        <T.FifthTableTitleContent>구분</T.FifthTableTitleContent>
        <T.FifthTableContent>
          {TableContent1.map((content, index) => (
            <T.FifthTableRowContent key={index}>
              {content}
            </T.FifthTableRowContent>
          ))}
        </T.FifthTableContent>
      </T.FifthTableTitle>

      <T.FifthTableTitle>
        <T.FifthTableTitleContent>개인정보 보호책임자</T.FifthTableTitleContent>
        <T.FifthTableContent>
          {TableContent2.map((content, index) => (
            <T.FifthTableRowContent key={index}>
              {content}
            </T.FifthTableRowContent>
          ))}
        </T.FifthTableContent>
      </T.FifthTableTitle>

      <T.FifthTableTitle>
        <T.FifthTableTitleContent>개인정보 보호담당자</T.FifthTableTitleContent>
        <T.FifthTableContent>
          {TableContent3.map((content, index) => (
            <T.FifthTableRowContent key={index}>
              {content}
            </T.FifthTableRowContent>
          ))}
        </T.FifthTableContent>
      </T.FifthTableTitle>
    </>
  );
};

export default FifthTable900;
