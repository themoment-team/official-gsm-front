import * as S from 'client/components/Policy/PrivacyPolicy/style';

import FifthTable900 from './FifthTable900';
import SixthTable900 from './SixthTable900';
import * as T from './style';

interface Props {
  width: number;
}

const TableTitle1 = ['구분', '개인정보 보호책임자', '개인정보 보호담당자'];
const TableTitle2 = ['구분', '소속', '직위', '비고'];

const TableContent1 = [
  '담당부서',
  '광주소프트웨어마이스터고등학교장',
  '인문정보부',
  '성명',
  '최홍진',
  '정문정',
  '전화번호',
  '062-949-6801',
  '062-949-6801',
];

const TableContent2 = [
  '교육기획부',
  '부장',
  '',
  '교육연구부',
  '부장',
  '',
  '학생생활안전부',
  '부장',
  '',
  '마이스터부',
  '부장',
  '',
  '전문교육부',
  '부장',
  '',
  '취업진로교육부',
  '부장',
  '',
  '창체방과후교육부',
  '부장',
  '',
  '보건실',
  '보건교사',
  '',
  '상담실',
  '상담교사',
  '',
  '도서실',
  '사서',
  '',
  '행정실',
  '실장',
  '',
];

const Policy11: React.FC<Props> = ({ width }) => (
  <S.PolicyContentBox>
    <S.PolicyTitle>
      제 11조 (개인정보보호 (분야별) 책임자 및 담당자 연락처)
    </S.PolicyTitle>
    <S.SubTitle>
      <span>1.&nbsp;</span>
      광주소프트웨어마이스터고등학교는 개인정보를 보호하고 개인정보와 관련한
      불만을 처리하기 위하여 아래와 같이 개인정보 보호책임자 및 담당자를
      지정하고 있습니다.
    </S.SubTitle>
    <S.TableWrap>
      {width > 900 && (
        <T.FifthTableTitle>
          {TableTitle1.map((title, index) => (
            <T.FifthTableTitleContent key={index}>
              {title}
            </T.FifthTableTitleContent>
          ))}
          <T.FifthTableContent>
            {TableContent1.map((content, index) => (
              <T.FifthTableRowContent key={index}>
                {content}
              </T.FifthTableRowContent>
            ))}
          </T.FifthTableContent>
        </T.FifthTableTitle>
      )}
      {width < 900 && <FifthTable900 />}
    </S.TableWrap>
    <S.SubTitle>
      <span>2.&nbsp;</span>
      광주소프트웨어마이스터고등학교는 각 부서의 장을 개인정보보호 분야별
      책임자로 아래와 같이 지정하고 있습니다.
    </S.SubTitle>
    <S.TableWrap>
      {width > 900 && (
        <T.SixthTableTitle>
          {TableTitle2.map((title, index) => (
            <T.FifthTableTitleContent key={index}>
              {title}
            </T.FifthTableTitleContent>
          ))}
          <T.BigSixthTableTitle>
            <T.SixthTableTitleContent>
              개인정보보호 분야별 책임자
            </T.SixthTableTitleContent>
          </T.BigSixthTableTitle>
          <T.SixthTableContent>
            {TableContent2.map((content, index) => (
              <T.FifthTableRowContent key={index}>
                {content}
              </T.FifthTableRowContent>
            ))}
          </T.SixthTableContent>
        </T.SixthTableTitle>
      )}
      {width < 900 && <SixthTable900 />}
    </S.TableWrap>
  </S.PolicyContentBox>
);

export default Policy11;
