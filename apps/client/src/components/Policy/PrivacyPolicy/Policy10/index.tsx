import * as S from 'client/components/Policy/PrivacyPolicy/style';

import Table900 from './Table900';
import * as T from './style';

interface Props {
  width: number;
}

const Policy10 = ({ width }: Props) => (
  <S.PolicyContentBox>
    <S.PolicyTitle>제 10조 (권익침해 구제방법)</S.PolicyTitle>
    <S.SubTitle>
      개인정보주체는 개인정보침해로 인한 피해를 구제 받기 위하여 개인정보
      분쟁조정위원회, 한국인터넷진흥원 개인정보침해 신고센터 등에 분쟁해결이나
      상담 등을 신청할 수 있습니다.
    </S.SubTitle>
    <S.TableWrap>
      {width > 900 && (
        <T.TableTitle>
          <T.TableTitleContent>구분</T.TableTitleContent>
          <T.TableTitleContent>홈페이지</T.TableTitleContent>
          <T.TableTitleContent>전화</T.TableTitleContent>
          <T.TableContent>
            <T.TableRowContent>
              개인정보 침해신고센터(한국인터넷진흥원 운영)
            </T.TableRowContent>
            <T.TableRowContent>http://privacy.kisa.or.kr</T.TableRowContent>
            <T.TableRowContent>(국번없이) 118</T.TableRowContent>
            <T.TableRowContent>
              개인정보 분쟁조정위원회(개인정보보호위원회 운영)
            </T.TableRowContent>
            <T.TableRowContent>http://www.kopico.go.kr</T.TableRowContent>
            <T.TableRowContent>1833-6972</T.TableRowContent>
            <T.TableRowContent>경찰청 사이버안전국</T.TableRowContent>
            <T.TableRowContent>
              http://cyberbureau.police.go.kr
            </T.TableRowContent>
            <T.TableRowContent>(국번없이) 182</T.TableRowContent>
            <T.TableRowContent>대검찰청 사이버수사과</T.TableRowContent>
            <T.TableRowContent>http://www.spo.go.kr</T.TableRowContent>
            <T.TableRowContent>(국번없이) 130118</T.TableRowContent>
          </T.TableContent>
        </T.TableTitle>
      )}
      {width < 900 && <Table900 />}
    </S.TableWrap>
  </S.PolicyContentBox>
);

export default Policy10;
