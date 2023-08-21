import * as T from './style';

const SixthTable900 = () => {
  const TableContent1 = [
    '교육기획부',
    '교육연구부',
    '학생생활안전부',
    '마이스터부',
    '전문교육부',
    '취업진로교육부',
    '창체방과후교육부',
    '보건실',
    '상담실',
    '도서실',
    '행정실',
  ];

  const TableContent2 = [
    '부장',
    '',
    '부장',
    '',
    '부장',
    '',
    '부장',
    '',
    '부장',
    '',
    '부장',
    '',
    '부장',
    '',
    '보건교사',
    '',
    '상담교사',
    '',
    '사서',
    '',
    '실장',
    '',
  ];

  return (
    <>
      <T.SixthTableTitle>
        <T.FifthTableTitleContent>구분</T.FifthTableTitleContent>
        <T.FifthTableTitleContent>소속</T.FifthTableTitleContent>
        <T.BigSixthTableTitle>
          <T.SixthTableTitleContent>
            개인정보
            <br />
            보호 분야
            <br />별 책임자
          </T.SixthTableTitleContent>
        </T.BigSixthTableTitle>
        <T.FifthTableContent>
          {TableContent1.map((content, index) => (
            <T.SixthTableRowContent key={index}>
              {content}
            </T.SixthTableRowContent>
          ))}
        </T.FifthTableContent>
      </T.SixthTableTitle>

      <T.SixthResTableTitle>
        <T.SixthTableTitleContent>직위</T.SixthTableTitleContent>
        <T.SixthTableTitleContent>비고</T.SixthTableTitleContent>
        <T.SixthResTableContent>
          {TableContent2.map((content, index) => (
            <T.SixthTableRowContent key={index}>
              {content}
            </T.SixthTableRowContent>
          ))}
        </T.SixthResTableContent>
      </T.SixthResTableTitle>
    </>
  );
};

export default SixthTable900;
