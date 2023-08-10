/** @jsxImportSource @emotion/react */

'use client';

import { BulletItem } from 'client/components';

import FifthTable from './FifthTable';
import FirstTable from './FirstTable';
import FourthTable from './FourthTable';
import SecondTable from './SecondTable';
import SixthTable from './SixthTable';
import ThirdTable from './ThirdTable';
import * as S from './style';

const PrivacyPolicy = () => (
  <S.SectionWrap>
    <S.Title>개인정보처리방침</S.Title>
    <S.PolicyContentWrap>
      <S.IntroContentBox>
        <S.IntroTitle>
          광주소프트웨어마이스터고등학교 홈페이지를 이용하시면서
        </S.IntroTitle>
        <BulletItem isDark={true} isSmall={true}>
          광주소프트웨어마이스터고등학교가 취급하는 모든 개인정보는
          개인정보보호법 등 관련 법령상의 개인정보보호 규정을 준수하여 이용자의
          개인정보보호 및 권익을 보호
          <br />
          하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록
          다음과 같은 처리방침을 두고 있습니다.{' '}
        </BulletItem>
        <BulletItem isDark={true} isSmall={true}>
          이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
          변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일
          전부터 공지사항을 통하여 고<br />
          지할 것입니다.
        </BulletItem>
      </S.IntroContentBox>
      <S.PolicyContentBox>
        <S.PolicyTitle>제 1조 (개인정보의 처리 목적)</S.PolicyTitle>
        <S.SubTitle>
          <span>1&nbsp;.&nbsp;</span> 광주소프트웨어마이스터고등학교는 대국민
          서비스 제공 및 민원처리, 소관업무 수행 등의 목적으로 필요에 의한
          최소한의 개인정보를 수집하고 있습니다.
        </S.SubTitle>
        <S.SubTitle>
          <span>2&nbsp;.&nbsp;</span> 제1항에 대한 사항은
          광주소프트웨어마이스터고등학교 및 각 부서에서 운영하는 소관업무
          홈페이지에 게재하여 정보주체가 확인할 수 있도록 안내를 하고 있습니다.
        </S.SubTitle>
      </S.PolicyContentBox>
      <S.PolicyContentBox>
        <S.PolicyTitle>제 2조 (개인정보의 처리 및 보유기간)</S.PolicyTitle>
        <S.SubTitle>
          <span>1&nbsp;.&nbsp;</span> 광주소프트웨어마이스터고등학교에서
          처리하는 개인정보는 수집 이용 목적으로 명시한 범위 내에서 처리하며,
          개인정보보호법 및 관련 법령에서 정하는 보유기간을 준용하여 이행하고
          있습니다.
        </S.SubTitle>
        <S.SubTitle>
          <span>2&nbsp;.&nbsp;</span> 개인정보파일은 연1회 조사하여 대장
          정비하며, 이후 등록 대상 발생 건은 별도 처리합니다.
        </S.SubTitle>
        <S.SubTitle>
          <span>3&nbsp;.&nbsp;</span> 광주소프트웨어마이스터고등학교는 각
          부서에서 운영하는 소관업무 및 홈페이지를 통해서 수집 보유하고 있는
          주요 개인정보파일을 다음과 같이 안내하고 있습니다.
        </S.SubTitle>
        <S.SubTitle>
          [ 세부 내용은 개인정보보호 포털(https://www.privacy.go.kr) ▶
          개인서비스 ▶ 정보주체 권리행사 ▶ 개인정보의 열람등 요구 ▶ 개인정보파일
          (목록) 검색 ▶ 기관명에 “광주소프트웨어마이스터고등학교” 입력 후 검색
          광주소프트웨어마이스터고등학교 [개인정보파일 목록] 보기(클릭)
        </S.SubTitle>
        <FirstTable />
      </S.PolicyContentBox>
      <S.PolicyContentBox>
        <S.PolicyTitle>
          제 3조 (개인정보 자동 수집 장치의 설치,운영 및 거부에 관한 사항)
        </S.PolicyTitle>
        <S.SubTitle>
          <span>1&nbsp;.&nbsp;</span>
          광주소프트웨어마이스터고등학교 홈페이지 이용자에게 서비스를 제공하기
          위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
        </S.SubTitle>
        <S.SubTitle>
          <span>2&nbsp;.&nbsp;</span>
          쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터
          브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의
          하드디스크에 저장되기도 합니다.
        </S.SubTitle>
        <S.BulletItemWrap>
          <BulletItem isSmall={true}>
            쿠키의 사용 목적 : 자주 찾는 서비스를 설정할 수 있도록 하여
            이용자에게 최적화된 정보 제공을 위해 사용됩니다.
          </BulletItem>
          <BulletItem isSmall={true}>
            쿠키의 설치·운영 및 거부 : 웹브라우저 상단의 도구 {'>'} 인터넷 옵션
            {'>'} 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부할 수
            있습니다.
          </BulletItem>
          <BulletItem isSmall={true}>
            쿠키 저장을 거부할 경우 일부 서비스 이용에 어려움이 발생할 수
            있습니다.
          </BulletItem>
        </S.BulletItemWrap>
      </S.PolicyContentBox>
      <S.PolicyContentBox>
        <S.PolicyTitle>
          제 4조 (개인정보 자동 수집 장치의 설치,운영 및 거부에 관한 사항)
        </S.PolicyTitle>
        <S.SubTitle>
          <span>1&nbsp;.&nbsp;</span>
          광주소프트웨어마이스터고등학교는 원칙적으로 정보주체의 개인정보를
          수집·이용 목적으로 명시한 범위 내에서 처리하며, 다음의 경우를
          제외하고는 정보주체의 사전 동의 없이는 본래의 목적 범위를 초과하여
          처리하거나 제3자에게 제공하지 않습니다.
        </S.SubTitle>
        <S.BulletItemWrap>
          <BulletItem isSmall={true}>
            정보주체로부터 별도의 동의를 받는 경우
          </BulletItem>
          <BulletItem isSmall={true}>
            법률에 특별한 규정이 있는 경우 있습니다.
          </BulletItem>
          <BulletItem isSmall={true}>
            보주체 또는 법정대리인이 의사표시를 할 수 없는 상태에 있거나
            주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체
            또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고
            인정되는 경우
          </BulletItem>
          <BulletItem isSmall={true}>
            통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서 특정 개인을
            알아 볼 수 없는 형태로 개인정보를 제공하는 경우
          </BulletItem>
          <BulletItem isSmall={true}>
            개인정보를 목적 외의 용도로 이용하거나 이를 제3자에게 제공하지
            아니하면 다른 법률에서 정하는 소관 업무를 수행할 수 없는 경우로서
            보호위원회의 심의·의결을 거친 경우
          </BulletItem>
          <BulletItem isSmall={true}>
            조약, 그 밖의 국제협정의 이행을 위하여 외국정보 또는 국제기구에
            제공하기 위하여 필요한 경우
          </BulletItem>
          <BulletItem isSmall={true}>
            범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우
          </BulletItem>
          <BulletItem isSmall={true}>
            범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우
          </BulletItem>
          <BulletItem isSmall={true}>
            형 및 감호, 보호처분의 집행을 위하여 필요한 경우
          </BulletItem>
        </S.BulletItemWrap>
      </S.PolicyContentBox>
      <S.PolicyContentBox>
        <S.PolicyTitle>제 5조 (개인정보의 처리 위탁에 관한 사항)</S.PolicyTitle>
        <S.SubTitle>
          <span>1&nbsp;.&nbsp;</span>
          광주소프트웨어마이스터고등학교는 개인정보의 처리 업무를 위탁하는 경우
          다음의 내용이 포함된 문서에 의하여 처리하고 있습니다.
        </S.SubTitle>
        <S.BulletItemWrap>
          <BulletItem isSmall={true}>
            위탁업무 수행 목적 외 개인정보의 처리 금지에 관한 사항
          </BulletItem>
          <BulletItem isSmall={true}>
            개인정보의 관리적·기술적 보호조치에 관한 사항
          </BulletItem>
          <BulletItem isSmall={true}>
            개인정보의 안전관리에 관한 사항
          </BulletItem>
          <S.MiniTitle>
            <span>-</span>
            위탁업무의 목적 및 범위, 재 위탁 제한에 관한 사항, 개인정보 안전성
            확보 조치에 관한 사항, 위탁업무와 관련하여 보유하고 있는 개인정보의
            관리현황점검 등 감독에 관한 사항, 수탁자가 준수하여야할 의무를
            위반한 경우의 손해배상책임에 관한 사항
          </S.MiniTitle>
        </S.BulletItemWrap>
        <SecondTable />
      </S.PolicyContentBox>
      <S.PolicyContentBox>
        <S.PolicyTitle>
          제 6조 (정보추제의 권리, 의무 및 그 행사방법에 관한 사항)
        </S.PolicyTitle>
        <S.SubTitle>
          <span>1&nbsp;.&nbsp;</span>
          광주소프트웨어마이스터고등학교는 개인정보의 처리 업무를 위탁하는 경우
          다음의 내용이 포함된 문서에 의하여 처리하고 있습니다.
        </S.SubTitle>
        <S.BulletItemWrap>
          <BulletItem isSmall={true}>개인정보 열람요구</BulletItem>
          <BulletItem isSmall={true}>오류 등이 있을 경우 정정 요구</BulletItem>
          <BulletItem isSmall={true}>삭제요구</BulletItem>
          <BulletItem isSmall={true}>처리정지 요구</BulletItem>
        </S.BulletItemWrap>
        <S.SubTitle>
          <span>2&nbsp;.&nbsp;</span>
          제1항에 따른 권리 행사는 개인정보보호법 시행규칙 별지 제8호 서식에
          따라 작성 후 서면 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며,
          기관은 이에 대해 지체 없이 조치하겠습니다.
        </S.SubTitle>
        <S.SubTitle>
          <span>3&nbsp;.&nbsp;</span>
          정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는
          정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지
          않겠습니다.
        </S.SubTitle>
        <S.SubTitle>
          <span>4&nbsp;.&nbsp;</span>
          제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등
          대리인을 통하여 하실 수 있습니다. 이 경우 개인정보보호법 시행규칙 별제
          제11호 서식에 따른 위임장을 제출하셔야 합니다.
        </S.SubTitle>
        <S.SubTitle>
          <span>5&nbsp;.&nbsp;</span>
          개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제5항, 제37조
          제2항에 의하여 정보주체의 권리를 제한 할 수 있습니다.
        </S.SubTitle>
        <S.SubTitle>
          <span>6&nbsp;.&nbsp;</span>
          개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집
          대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
        </S.SubTitle>
        <S.SubTitle>
          <span>7&nbsp;.&nbsp;</span>
          정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시
          열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
        </S.SubTitle>
        <S.SubTitle>
          <span>8&nbsp;.&nbsp;</span>
          광주소프트웨어마이스터고등학교에서 보유중인 개인정보파일의 열람,
          정정ㆍ삭제, 처리정지 요구 등을 접수ㆍ처리하는 해당 부서는 다음과
          같습니다.
        </S.SubTitle>
        <ThirdTable />
      </S.PolicyContentBox>
      <S.PolicyContentBox>
        <S.PolicyTitle>제 7조 (처리하는 개인정보의 항목)</S.PolicyTitle>
        <S.SubTitle>
          광주소프트웨어마이스터고등학교에서 처리하는 개인정보는 소관업무 및
          법령에서 정한 최소한의 개인정보만을 처리하며 자세한 사항은 정보주체가
          확인할 수 있도록 제2조 3항에서 안내하고 있습니다.
        </S.SubTitle>
      </S.PolicyContentBox>
      <S.PolicyContentBox>
        <S.PolicyTitle>제 8조 (개인정보 파기절차 및 방법)</S.PolicyTitle>
        <S.SubTitle>
          <span>1&nbsp;.&nbsp;</span>
          광주소프트웨어마이스터고등학교는 원칙적으로 개인정보 처리목적이 달성된
          개인정보는 지체 없이 파기합니다. 다만, 다른 법령에 따라 보존하여야
          하는 경우에는 그러하지 않을 수 있습니다. 파기의 절차, 기한 및 방법은
          다음과 같습니다.
        </S.SubTitle>
        <S.BulletItemWrap>
          <BulletItem isSmall={true}>파기절차</BulletItem>
          <S.MiniTitle isPadding={true}>
            <span>-</span>
            불필요한 개인정보 및 개인정보파일은 개인정보책임자의 책임 하에
            내부방침 절차에 따라 다음과 같이 처리하고 있습니다.
          </S.MiniTitle>
          <S.MiniTitle isPadding={true}>
            <span>-</span>
            개인정보의 파기
          </S.MiniTitle>
          <S.MiniTitle isPadding={true}>
            <span>-</span>
            보유기간이 경과한 개인정보는 종료일로부터 지체없이 파기합니다.
          </S.MiniTitle>
          <S.MiniTitle>
            <span>-</span>
            보유기간이 경과한 개인정보는 종료일로부터 지체없이 파기합니다.
          </S.MiniTitle>
          <S.MiniTitle isPadding={true}>
            <span>-</span>
            개인정보파일의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그
            개인정보파일이 불필요하게 되었을 때에는 개인정보의 처리가 불필요한
            것으로 인정되는 날로부터 지체 없이 그 개인정보파일을 파기합니다.
          </S.MiniTitle>
          <S.MiniTitle isPadding={true}>
            <span>-</span>
            전자적 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.
          </S.MiniTitle>
          <S.MiniTitle isPadding={true}>
            <span>-</span>
            종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
            파기합니다.
          </S.MiniTitle>
          <BulletItem isSmall={true}>파기방법</BulletItem>
          <S.MiniTitle isPadding={true}>
            <span>-</span>
            전자적 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.
          </S.MiniTitle>
          <S.MiniTitle isPadding={true}>
            <span>-</span>
            종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
            파기합니다.
          </S.MiniTitle>
        </S.BulletItemWrap>
      </S.PolicyContentBox>
      <S.PolicyContentBox>
        <S.PolicyTitle>제 9조 (개인정보 안정성 확보조치)</S.PolicyTitle>
        <S.SubTitle>
          <span>1&nbsp;.&nbsp;</span>
          광주소프트웨어마이스터고등학교는 원칙적으로 개인정보 처리목적이 달성된
          개인정보는 지체 없이 파기합니다. 다만, 다른 법령에 따라 보존하여야
          하는 경우에는 그러하지 않을 수 있습니다. 파기의 절차, 기한 및 방법은
          다음과 같습니다.
        </S.SubTitle>
        <S.BulletItemWrap>
          <BulletItem isSmall={true}>
            개인정보 취급 직원의 최소화 및 교육 개인정보를 취급하는 직원은
            반드시 필요한 인원에 한하여 지정 관리하고 있으며, 취급직원을
            대상으로 안전한 관리를 위한 교육을 실시하고 있습니다.
          </BulletItem>
          <BulletItem isSmall={true}>
            개인정보에 대한 접근 제한 개인정보를 처리하는 개인정보처리시스템에
            대한 접근권한의 부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를
            위한 필요한 조치를 하고 있으며 침입차단시스템을 이용하여
            외부로부터의 무단 접근을 통제하고 있습니다.
          </BulletItem>
          <BulletItem isSmall={true}>
            접속기록의 보관 개인정보처리시스템에 접속한 기록을 최소 6개월 이상
            보관하고 있습니다.
          </BulletItem>
          <BulletItem isSmall={true}>
            개인정보의 암호화 개인정보는 암호화 등을 통해 안전하게 저장 및
            관리되고 있습니다. 또한 중요한 데이터는 저장 및 전송 시 암호화하여
            사용하는 등의 별도 보안기능을 사용하고 있습니다.
          </BulletItem>
          <BulletItem isSmall={true}>
            보안프로그램 설치 및 주기적 점검 갱신 해킹이나 컴퓨터 바이러스 등에
            의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고,
            주기적인 갱신·점검하고 있습니다.
          </BulletItem>
          <BulletItem isSmall={true}>
            비인가자에 대한 출입 통제 개인정보를 보관하고 있는
            개인정보처리시스템의 물리적 보관 장소를 별도로 두고 이에 대해
            출입통제 절차를 수립, 운영하고 있습니다.
          </BulletItem>
        </S.BulletItemWrap>
      </S.PolicyContentBox>
      <S.PolicyContentBox>
        <S.PolicyTitle>제 10조 (권익침해 구제방법)</S.PolicyTitle>
        <S.SubTitle>
          개인정보주체는 개인정보침해로 인한 피해를 구제 받기 위하여 개인정보
          분쟁조정위원회, 한국인터넷진흥원 개인정보침해 신고센터 등에
          분쟁해결이나 상담 등을 신청할 수 있습니다.
        </S.SubTitle>
        <FourthTable />
      </S.PolicyContentBox>
      <S.PolicyContentBox>
        <S.PolicyTitle>
          제 11조 (개인정보보호 (분야별) 책임자 및 담당자 연락처)
        </S.PolicyTitle>
        <S.SubTitle>
          <span>1&nbsp;.&nbsp;</span>
          광주소프트웨어마이스터고등학교는 개인정보를 보호하고 개인정보와 관련한
          불만을 처리하기 위하여 아래와 같이 개인정보 보호책임자 및 담당자를
          지정하고 있습니다.
        </S.SubTitle>
        <FifthTable />
        <S.SubTitle>
          <span>2&nbsp;.&nbsp;</span>
          광주소프트웨어마이스터고등학교는 각 부서의 장을 개인정보보호 분야별
          책임자로 아래와 같이 지정하고 있습니다.
        </S.SubTitle>
        <SixthTable />
      </S.PolicyContentBox>
      <S.PolicyContentBox>
        <S.PolicyTitle>제 12조 (개인정보 처리방침의 변경)</S.PolicyTitle>
        <S.SubTitle>
          본 개인정보처리방침은 시행일로부터 적용되며, 이전의 개인정보
          처리방침은 아래에서 확인할 수 있습니다.
        </S.SubTitle>
        <S.StartDateTitle>시행일자 : 2022. 09. 28.</S.StartDateTitle>
        <S.DateTitle>
          2016. 7. 20. ~ 2017. 2. 28.
          <span>개인정보처리방침 보기</span>
        </S.DateTitle>
        <S.DateTitle>
          2016. 3. 01. ~ 2018. 2. 28.
          <span>개인정보처리방침 보기</span>
        </S.DateTitle>
        <S.DateTitle>
          2016. 3. 01. ~ 2018. 4. 1.
          <span>개인정보처리방침 보기</span>
        </S.DateTitle>
        <S.DateTitle>
          2016. 4. 02. ~ 2019. 3. 19.
          <span>개인정보처리방침 보기</span>
        </S.DateTitle>
        <S.DateTitle>
          2016. 3. 20. ~ 2019. 12. 1.
          <span>개인정보처리방침 보기</span>
        </S.DateTitle>
      </S.PolicyContentBox>
    </S.PolicyContentWrap>
  </S.SectionWrap>
);

export default PrivacyPolicy;
