import * as S from './style';

const Policy10 = () => (
  <S.PolicyContentBox>
    <S.PolicyTitle>제 10조 (권익침해 구제방법)</S.PolicyTitle>
    <S.SubTitle>
      개인정보주체는 개인정보침해로 인한 피해를 구제 받기 위하여 개인정보
      분쟁조정위원회, 한국인터넷진흥원 개인정보침해 신고센터 등에 분쟁해결이나
      상담 등을 신청할 수 있습니다.
    </S.SubTitle>
    <S.TableTitle>
      <S.TableTitleContent>구분</S.TableTitleContent>
      <S.TableTitleContent>홈페이지</S.TableTitleContent>
      <S.TableTitleContent>전화</S.TableTitleContent>
      <S.TableContent>
        <S.TableRowContent>
          개인정보 침해신고센터(한국인터넷진흥원 운영)
        </S.TableRowContent>
        <S.TableRowContent>http://privacy.kisa.or.kr</S.TableRowContent>
        <S.TableRowContent>(국번없이) 118</S.TableRowContent>
        <S.TableRowContent>
          개인정보 분쟁조정위원회(개인정보보호위원회 운영)
        </S.TableRowContent>
        <S.TableRowContent>http://www.kopico.go.kr</S.TableRowContent>
        <S.TableRowContent>1833-6972</S.TableRowContent>
        <S.TableRowContent>경찰청 사이버안전국</S.TableRowContent>
        <S.TableRowContent>http://cyberbureau.police.go.kr</S.TableRowContent>
        <S.TableRowContent>(국번없이) 182</S.TableRowContent>
        <S.TableRowContent>대검찰청 사이버수사과</S.TableRowContent>
        <S.TableRowContent>http://www.spo.go.kr</S.TableRowContent>
        <S.TableRowContent>(국번없이) 130118</S.TableRowContent>
      </S.TableContent>
    </S.TableTitle>
  </S.PolicyContentBox>
);

export default Policy10;
