import * as T from './style';

const TableContent1 = [
  '개인정보 침해신고센터(한국인터넷진흥원 운영)',
  '개인정보 분쟁조정위원회\n(개인정보보호위원회 운영)',
  '경찰청 사이버안전국',
  '대검찰청 사이버수사과',
];

const TableContent2 = [
  'http://privacy.kisa.or.kr',
  'http://www.kopico.go.kr',
  'http://cyberbureau.police.go.kr',
  'http://www.spo.go.kr',
];

const TableContent3 = [
  '(국번없이) 118',
  '1833-6972',
  '(국번없이) 182',
  '(국번없이) 1301',
];

const Table900 = () => (
  <>
    <T.TableTitle>
      <T.TableTitleContent>구분</T.TableTitleContent>
      <T.TableContent>
        {TableContent1.map((content, index) => (
          <T.TableRowContent key={index}>{content}</T.TableRowContent>
        ))}
      </T.TableContent>
    </T.TableTitle>

    <T.TableTitle>
      <T.TableTitleContent>홈페이지</T.TableTitleContent>
      <T.TableContent>
        {TableContent2.map((content, index) => (
          <T.TableRowContent key={index}>{content}</T.TableRowContent>
        ))}
      </T.TableContent>
    </T.TableTitle>

    <T.TableTitle>
      <T.TableTitleContent>전화</T.TableTitleContent>
      <T.TableContent>
        {TableContent3.map((content, index) => (
          <T.TableRowContent key={index}>{content}</T.TableRowContent>
        ))}
      </T.TableContent>
    </T.TableTitle>
  </>
);

export default Table900;
