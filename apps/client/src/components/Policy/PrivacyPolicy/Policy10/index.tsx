import * as S from 'client/components/Policy/PrivacyPolicy/style';

import Table900 from './Table900';
import * as T from './style';

interface Props {
  width: number;
}

const Policy10 = ({ width }: Props) => {
  const TableTitle = ['구분', '홈페이지', '전화'];

  const TableContent = [
    '개인정보 침해신고센터(한국인터넷진흥원 운영)',
    'http://privacy.kisa.or.kr',
    '(국번없이) 118',
    '개인정보 분쟁조정위원회(개인정보보호위원회 운영)',
    'http://www.kopico.go.kr',
    '1833-6972',
    '경찰청 사이버안전국',
    'http://cyberbureau.police.go.kr',
    '(국번없이) 182',
    '대검찰청 사이버수사과',
    'http://www.spo.go.kr',
    '(국번없이) 130118',
  ];

  return (
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
            {TableTitle.map((title, index) => (
              <T.TableTitleContent key={index}>{title}</T.TableTitleContent>
            ))}
            <T.TableContent>
              {TableContent.map((content, index) => (
                <T.TableRowContent key={index}>{content}</T.TableRowContent>
              ))}
            </T.TableContent>
          </T.TableTitle>
        )}
        {width < 900 && <Table900 />}
      </S.TableWrap>
    </S.PolicyContentBox>
  );
};

export default Policy10;
