'use client';

import { BulletItem } from 'client/components';
import { useGetWindowWidth } from 'client/hooks';

import * as S from './style';

const 설치대수설치위치및촬영범위 = [
  '설치대수: 45대',
  '설치 위치 및 촬영범위: 본교 건물 내ㆍ외부 및 주차장',
];

const 개인영상정보의확인방법및장소에관한사항 = [
  '확인방법: 영상정보 관리책임자에게 미리 연락하고 개인영상정보(열람, 존재확인) 청구서로 요청한 후 확인 가능합니다.',
  '확인장소: 행정실',
];

const 영상정보의안전성확보조치 = [
  '귀하는 개인영상정보에 관하여 열람 또는 존재확인, 삭제를 원하는 경우 언제든지 영상정보처리기기 운영자에게 요구하실 수 있습니다. 단, 귀하가 촬영된 개인영상정보 및 명백히 정보주체의 급박한 생명, 신체, 재산의 이익을 위하여 필요한 개인영상정보에 한정됩니다.',
  '본 기관은 개인영상정보에 관하여 열람 또는 존재확인, 삭제를 요구한 경우 지체없이 필요한 조치를 하겠습니다.',
];

const MediaPolicy = () => {
  const width = useGetWindowWidth();

  return (
    <S.ContentWrapper>
      <S.Section>
        <S.Title>영상정보처리기기 운영ㆍ관리 방침</S.Title>
        <S.SubContentWrapper>
          <S.RegularSubTitle>영상정보처리기기 운영.관리 방침</S.RegularSubTitle>
          <S.Description>
            본 광주소프트웨어마이스터고등학교(이하 본 기관이라 함)는
            영상정보처리기기 운영․관리 방침을 통해 본 기관에서 처리하는
            영상정보가 어떠한 용도와 방식으로 이용ㆍ관리되고 있는지
            알려드립니다.
          </S.Description>
        </S.SubContentWrapper>
        <S.SubContentWrapper>
          <S.BoldSubTitle>
            영상정보처리기기의 설치 근거 및 설치 목적
          </S.BoldSubTitle>
          <BulletItem>
            쿠키의 사용 목적 : 자주 찾는 서비스를 설정할 수 있도록 하여
            이용자에게 최적화된 정보 제공을 위해 사용됩니다.
          </BulletItem>
          <S.Description>
            - 시설안전 및 화재 예방
            <br /> - 차량도난 및 파손방지 : 주차장에 설치하는 경우
            <br /> - 주차대수 30대를 초과하는 규모의 경우「주차장법
            시행규칙」제6조제1항을 근거로 설치ㆍ운영 가능
          </S.Description>
        </S.SubContentWrapper>
        <S.SubContentWrapper>
          <S.BoldSubTitle>설치 대수, 설치 위치 및 촬영범위</S.BoldSubTitle>
          {설치대수설치위치및촬영범위.map((text, index) => (
            <BulletItem key={index}>{text}</BulletItem>
          ))}
        </S.SubContentWrapper>
        <S.SubContentWrapper>
          <S.BoldSubTitle>관리책임자 및 접근권한자</S.BoldSubTitle>
          <S.Description>
            귀하의 영상정보를 보호하고 개인영상정보와 관련한 불만을 처리하기
            위하여 아래와 같이 개인영상정보 보호책임자를 두고 있습니다.
          </S.Description>
          {width > 1024 ? (
            <S.Wrap>
              <S.TableTitle className='first'>
                <S.TableTitleContent>구분</S.TableTitleContent>
                <S.TableTitleContent>이름</S.TableTitleContent>
                <S.TableTitleContent>직위</S.TableTitleContent>
                <S.TableTitleContent>소속</S.TableTitleContent>
                <S.TableTitleContent>연락처</S.TableTitleContent>
                <S.TableContent className='first'>
                  <S.TableRowContent>관리책임자</S.TableRowContent>
                  <S.TableRowContent>이수연</S.TableRowContent>
                  <S.TableRowContent>실장</S.TableRowContent>
                  <S.TableRowContent>행정실</S.TableRowContent>
                  <S.TableRowContent>062-949-6803</S.TableRowContent>
                  <S.TableRowContent>접근관리자</S.TableRowContent>
                  <S.TableRowContent>장희연</S.TableRowContent>
                  <S.TableRowContent>주무관</S.TableRowContent>
                  <S.TableRowContent>행정실</S.TableRowContent>
                  <S.TableRowContent>062-949-6808</S.TableRowContent>
                </S.TableContent>
              </S.TableTitle>
            </S.Wrap>
          ) : (
            <>
              <S.Wrap>
                <S.TableTitle className='first'>
                  <S.TableTitleContent>구분</S.TableTitleContent>
                  <S.TableTitleContent>이름</S.TableTitleContent>
                  <S.TableTitleContent>직위</S.TableTitleContent>
                  <S.TableContent className='first'>
                    <S.TableRowContent>관리책임자</S.TableRowContent>
                    <S.TableRowContent>이수연</S.TableRowContent>
                    <S.TableRowContent>실장</S.TableRowContent>
                    <S.TableRowContent>접근관리자</S.TableRowContent>
                    <S.TableRowContent>장희연</S.TableRowContent>
                    <S.TableRowContent>주무관</S.TableRowContent>
                  </S.TableContent>
                </S.TableTitle>
                <S.TableTitle className='divide'>
                  <S.TableTitleContent>소속</S.TableTitleContent>
                  <S.TableTitleContent>연락처</S.TableTitleContent>
                  <S.TableContent className='divide'>
                    <S.TableRowContent>행정실</S.TableRowContent>
                    <S.TableRowContent>062-949-6803</S.TableRowContent>
                    <S.TableRowContent>행정실</S.TableRowContent>
                    <S.TableRowContent>062-949-6808</S.TableRowContent>
                  </S.TableContent>
                </S.TableTitle>
              </S.Wrap>
            </>
          )}
        </S.SubContentWrapper>
        <S.SubContentWrapper>
          <S.BoldSubTitle>
            영상정보의 촬영시간, 보관기간, 보관장소 및 처리방법
          </S.BoldSubTitle>
          <BulletItem>
            처리방법: 개인영상정보의 목적 외 이용, 제3자 제공, 파기, 열람 등
            요구에 관한 사항을 기록ㆍ관리하고, 보관기간 만료 시 복원이 불가능한
            방법으로 영구 삭제(출력물의 경우 파쇄 또는 소각)합니다.
          </BulletItem>
          <S.TableTitle className='second'>
            <S.TableTitleContent>촬영시간</S.TableTitleContent>
            <S.TableTitleContent>연락처</S.TableTitleContent>
            <S.TableTitleContent>연락처</S.TableTitleContent>
            <S.TableContent className='second'>
              <S.TableRowContent>24시간</S.TableRowContent>
              <S.TableRowContent>
                - 촬영일로부터 20일
                <br />- 보유기관 경과 자동삭제
              </S.TableRowContent>
              <S.TableRowContent>중앙통제실(당직실)</S.TableRowContent>
            </S.TableContent>
          </S.TableTitle>
        </S.SubContentWrapper>
        <S.SubContentWrapper>
          <S.BoldSubTitle>
            개인영상정보의 확인 방법 및 장소에 관한 사항
          </S.BoldSubTitle>
          {개인영상정보의확인방법및장소에관한사항.map((text, index) => (
            <BulletItem key={index}>{text}</BulletItem>
          ))}
        </S.SubContentWrapper>
        <S.SubContentWrapper>
          <S.BoldSubTitle>
            정보주체의 영상정보 열람 등 요구에 대한 조치
          </S.BoldSubTitle>
          <BulletItem>
            본 기관에서 처리하는 영상정보는 다음과 같이 안전성 확보조치(관리적,
            기술적, 물리적 조치)를 통해 안전하게 관리되고 있습니다. 본 기관은
            개인영상정보를 위한 관리적 대책으로서 개인정보에 대한 접근 권한을
            차등부여하고 있고, 개인영상정보의 위ㆍ변조 방지를 위하여
            개인영상정보의 생성 일시, 열람시 열람 목적, 열람자, 열람 일시 등을
            기록하여 관리하고 있습니다. 이 외에도 개인영상정보의 안전한 물리적
            보관을 위하여 잠금장치를 설치하고 있습니다.
          </BulletItem>
        </S.SubContentWrapper>
        <S.SubContentWrapper>
          <S.BoldSubTitle>영상정보의 안전성 확보조치</S.BoldSubTitle>
          {영상정보의안전성확보조치.map((text, index) => (
            <BulletItem key={index}>{text}</BulletItem>
          ))}
        </S.SubContentWrapper>
        <S.SubContentWrapper>
          <S.BoldSubTitle>영상정보 처리방침 변경에 관한 사항</S.BoldSubTitle>
          <BulletItem>
            이 영상정보처리기기 운영․관리방침은 2019년 11월 22일에 제정되었으며
            법령ㆍ정책 또는 보안기술의변경에 따라 내용의 추가ㆍ삭제 및 수정이
            있을 시에는 본 기관 홈페이지를 통해 변경사유 및 내용 등을 공지하도록
            하겠습니다.
            <br />
            공고일자 : 2019년 12월 2일 / 시행일자 : 2019년 12월 2일
          </BulletItem>
        </S.SubContentWrapper>
      </S.Section>
    </S.ContentWrapper>
  );
};

export default MediaPolicy;
