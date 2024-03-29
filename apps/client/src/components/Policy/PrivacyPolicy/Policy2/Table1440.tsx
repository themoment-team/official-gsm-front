import * as T from './style';

const Table1440 = () => {
  const TableTitle = ['개인정보 파일명', '보유목적', '보유근거'];

  const TableContent1 = [
    `학교생활 기록부`,
    `학생의 학업성취도 평가를 통한 내실화 도모`,
    `-「초ㆍ중등교육법」제25조\n -「초ㆍ중등교육법 시행규칙」제21조`,
    `학생건강 기록부`,
    `학생건강기록 관리`,
    `-「학교건강검사 규칙」제9조\n -「학생건강기록부 전산처리 및 관리지침」제14조`,
    `학부모서비스 이용자명단`,
    `학부모의 학생정보 열람`,
    `「교육기본법」제23조의3`,
    `홈페이지 회원정보`,
    `홈페이지회원관리`,
    `정보주체 동의`,
    `민원사무 처리부`,
    `민원접수 및 처리 관리`,
    `-「민원 처리에 관한 법률 시행령」제6조\n-「민원 처리에 관한 법률 시행규칙」제3조`,
    `학교운영위원회명부`,
    `학교운영위원회 구성 및 운영관리`,
    `-「초ㆍ중등교육법」제34조\n-「초ㆍ중등교육법 시행규칙」제62조`,
    `스쿨뱅킹(CMS)정보`,
    `수납금 처리`,
    `정보주체 동의`,
    `발전기금 기탁자명부`,
    `학교발전기금 기탁자 및 내역 관리`,
    `「초ㆍ중등교육법 시행규칙」제52조`,
  ];

  const TableContent2 = [
    '-학생: 성명,주민번호,주소\n -보호자: 성명, 생년월일',
    '준영구',
    '각 학년부, 행정실',
    '이름, 주민번호, 학년, 반, 번호, 성별,\n 혈액형, 키, 몸무게, 비만도',
    '졸업후 5년',
    '보건실',
    '-학부모: 성명, 주민번호\n-학생: 성명, 주민번호',
    '회원탈퇴시까지',
    '각 학년부',
    '이름,학년,반,번호',
    '졸업/회원탈퇴시\n 까지',
    '인문교육 정보부',
    '이름,집주소,E-mail,연락처',
    '10년',
    '행정실',
    '-학생: 이름,생년월일,학년,반,번호\n -보호자: 이름,연락처,생년월일,계좌정보',
    '5년',
    '행정실',
    '성명,주소,생년월일, 직업,연락처',
    '10년',
    '행정실',
    '성명, 생년월일, 주소, 연락처',
    '5년',
    '행정실',
  ];

  return (
    <>
      <T.TableTitle>
        {TableTitle.map((title, index) => (
          <T.TableTitleContent key={index}>{title}</T.TableTitleContent>
        ))}
        <T.TableContent>
          {TableContent1.map((content, index) => (
            <T.TableRowContent key={index}>{content}</T.TableRowContent>
          ))}
        </T.TableContent>
      </T.TableTitle>
      <T.TableTitle>
        <T.TableTitleContent>항목</T.TableTitleContent>
        <T.TableTitleContent>보유기간</T.TableTitleContent>
        <T.TableTitleContent>
          열람요구
          <br />
          접수처리부서
        </T.TableTitleContent>
        <T.TableContent>
          {TableContent2.map((content, index) => (
            <T.TableRowContent key={index}>{content}</T.TableRowContent>
          ))}
        </T.TableContent>
      </T.TableTitle>
    </>
  );
};

export default Table1440;
