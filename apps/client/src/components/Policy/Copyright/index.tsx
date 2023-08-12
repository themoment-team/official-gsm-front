'use client';

import { useEffect } from 'react';

import Image from 'next/image';

import { BulletItem } from 'client/components';

import * as S from './style';

const 저작관신고접수수령인정보 = [
  '성명 및 소속부서 : 광주소프트웨어마이스터고등학교 개인정보보호책임관',
  '전화번호 : 062)949-6801',
  '주소 : 우)62423 광주광역시 광산구 상무대로 312',
];

const 게시중단요청신청방법 = [
  '게시된 저작물에 의해 권리를 침해당하였다고 판단되면 해당 절차에 따라서 게시중단을 요청합니다.',
  '게시된 저작물의 게시중단(복제·전송 중단)을 요청할 경우에는 아래 문서를 다운로드 하여 작성한 후 ‘저작권 신고 접수 수령인’에게 방문 또는 전자우편으로 신청합니다.',
  '정당한 권리 없이 게시중단을 요청하면 법에 의해 손해배상의 책임이 있습니다.',
];

const 재게시요청신청방법 = [
  '게시가 중단된 저작물을 게시한 이용자가 해당 저작물이 정당한 권리에 의한 게시라고 판단되면 해당 절차에 따라서 재게시를 요청합니다.',
  '게시중단을 통보받은 저작물에 대하여 재 게시를 요청할 경우에는 아래 문서를 다운로드 하여 작성한 후 ‘저작권 신고 접수 수령인’에게 방문 또는 전자우편으로 접수합니다.',
  '정당한 권리 없이 게시중단을 요청하면 법에 의해 손해배상의 책임이 있습니다.',
  '게시자 이의신청자가 신청서 소명자료를 제출하여 신청을 하고 이를 신고 수령인이 접수하여 검토 후 YES인 경우는 서비스를 제공하고 NO인 경우는 재게시 불가 통보를한다.',
  '검토 후 YES였던 경우 중 재게시가 발생하게 되면 재게시 승인통보를 한다.',
];

const CopyrightPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.ContentWrapper>
      <S.Section>
        <S.Title>저작권신고 및 보호규정</S.Title>
        <S.SubContentWrapper>
          <S.RegularSubTitle>저작권신고 및 보호규정</S.RegularSubTitle>
          <S.Description>
            저작물의 무단 전재 및 배포시 저작권법 136조에 의거 최고 5년 이하의
            징역 또는 5천만원 이하의 벌금에 처하거나 이를 병과 할 수 있습니다.
            본 서비스는 게시된 저작물로 인하여 저작권을 침해받은 경우 이를
            처리하기 위한 서비스입니다. 다음 사항을 참고하여 신고하여 주시기
            바랍니다.
          </S.Description>
        </S.SubContentWrapper>
        <S.SubContentWrapper>
          <S.BoldSubTitle>저작권 신고 접수 수령인(담당자)</S.BoldSubTitle>
          {저작관신고접수수령인정보.map((text, index) => (
            <BulletItem key={index}>{text}</BulletItem>
          ))}
        </S.SubContentWrapper>
        <S.SubContentWrapper>
          <S.DownloadWrapper>
            <S.BoldSubTitle>게시중단요청 신청</S.BoldSubTitle>
            <S.DownloadButton>양식 다운로드</S.DownloadButton>
          </S.DownloadWrapper>
          {게시중단요청신청방법.map((text, index) => (
            <BulletItem key={index}>{text}</BulletItem>
          ))}
        </S.SubContentWrapper>
      </S.Section>
      <S.Section>
        <Image
          alt='개시중단요청 신청'
          src='/images/policy/Copyright1.png'
          width={1043}
          height={511}
        />
        <S.SubContentWrapper>
          <S.BoldSubTitle>재게시요청 신청</S.BoldSubTitle>
          {재게시요청신청방법.map((text, index) => (
            <BulletItem key={index}>{text}</BulletItem>
          ))}
        </S.SubContentWrapper>
      </S.Section>
      <Image
        alt='재게시요청 신청'
        src='/images/policy/Copyright2.png'
        width={1043}
        height={511}
      />
    </S.ContentWrapper>
  );
};

export default CopyrightPolicy;
