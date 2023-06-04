'use client';

import { GalleryContent } from 'admin/components';

const props = {
  post: {
    postSeq: 1,
    fileIsExist: true,
    thumbnailUrl: 'https://i.ytimg.com/vi/FBEBPnWafTk/mqdefault.jpg',
    postWriter: '최장우',
    postTitle:
      '2023년도 광주소프트웨어마이스터고등학교 교무실무사(마이스터 업무지원) 채용 재공고',
    createdAt: '2023-05-03T19:47:01.250197',
  },
  fileInfo: [
    {
      fileUrl:
        'http://bucket.ottokeng.site/743d7afd-690c-404a-b7fb-b6fe97598504.jpg',
      fileName: 'images.jpg',
    },
    {
      fileUrl:
        'http://bucket.ottokeng.site/743d7afd-690c-404a-b7fb-b6fe97598504.jpg',
      fileName: 'images.jpg',
    },
  ],
  description: `2023년 공동교육과정 거점학교 운영 지원 사업의 일환으로 「교실온닷 스티커 공모전 」을 아래와 같이 개최하오니,
관심있는 학생들의 많은 참여바랍니다.
가. 공모전명: 교실온닷 스티커 공모전
나. 공모주제: 실시간 쌍방향 온라인 수업에서 사용할 수 있는 스티커

＊＊ 온라인 공동교육과정 시스템 교실온닷에서 이루어지는 온라인 수업 중 자신의 감정 및 생각을 표현하기 위해 사용하는 이미지

다. 공모기간: 2023. 5. 11.(목) 09:00 ~ 5. 31.(수) 24:00

라. 참가대상: 온라인 공동교육과정 참여 경험이 있는 전국 고등학교 재학생
※ 개인 또는 팀으로 참가 가능 마.

참가방법: [붙임1] 참고하여 참가 신청서, 스티커 디자인 파일, 스티커 디자인 설명서, 개인 정보 수집 이용 및 제공 동의서, 청렴 서약서를 이메일(classon@kedi.re.kr)로 제출
바. 시상내역: 대상 1명, 최우수상 2명, 우수상 3명
※ 스티커 공모전 수상자를 제외한 참가자 전원에게 참가 기념품 발송(1만원 상당 기프티콘)

단, 팀으로 참가한 경우 팀당 1건을 대표자에게 발송붙임 1. 교실온닷 스티커 공모전 운영 계획 1부. 2. 온라인 게시용 공모전 포스터 1부. 끝.
  `,
};

export default function DetailPage() {
  return (
    <div>
      <GalleryContent
        post={props.post}
        fileInfo={props.fileInfo}
        description={props.description}
      />
    </div>
  );
}
