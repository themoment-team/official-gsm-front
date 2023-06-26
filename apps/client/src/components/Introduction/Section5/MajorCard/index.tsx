import Image from 'next/image';

import { css, useTheme } from '@emotion/react';

import type { MajorType } from 'client/types/introduce';
import type { PointColorType } from 'client/types/title';

import * as S from './style';

type MajorInformationType = {
  [key in MajorType]: {
    content: JSX.Element;
    title: string;
    hashTag: string[];
    keyword: JSX.Element[];
    color: PointColorType;
  };
};

const majorInformation: MajorInformationType = {
  SW: {
    content: (
      <>
        SW개발의 계획에서부터 <span>분석, 설계, 코딩, 테스팅, 유지보수</span>
        까지 전반적인 학습 / 맞춤형 실무교육을 통해 정보 시스템 개발과
        웹/모바일, 콘텐츠 제작이 가능하도록 전문 인재 양성
      </>
    ),
    title: '소프트웨어 개발과',
    hashTag: ['운영체제', 'C', 'C++', 'JAVA', '네트워크', '모바일'],
    keyword: [
      <>
        소프트웨어
        <br />
        개발 회사
      </>,
      <>
        인트라넷
        <br />
        관련분야
      </>,
      <>
        모바일
        <br />
        프로그래밍 분야
      </>,
    ],
    color: 'sky',
  },
  IOT: {
    content: (
      <>
        사물에 내장된 컴퓨터가 수행할 수 있는 소프트웨어개발 사물에 센서를
        부착해 <span>실시간으로 데이터를 인터넷으로 주고받는 기술</span>인
        IT융합 소프트웨어를 설계, 개발이 가능한 전문 인재를 양성
      </>
    ),
    title: '스마트 IOT과',
    hashTag: ['리눅스', '라즈베리파이', '아두이노', '하드웨어'],
    keyword: [
      <>
        모바일
        <br />
        운용기기
      </>,
      <>
        정보통신기기 <br />
        연구분야
      </>,
      <>멀티미디어</>,
    ],
    color: 'lime',
  },
  AI: {
    content: (
      <>
        인공지능, 빅데이터, 사물인터넷을 바탕으로 한 인공지능 기반 기술을
        교육하여{' '}
        <span>
          인공지능 서비스의 요구사항을 실현하기 위한 인공지능 플랫폼 구현,
          인공지능 서비스 기획 전문 인재
        </span>
        를 양성
      </>
    ),
    title: '인공 지능(AI)과',
    hashTag: ['빅데이터', '사물인터넷', '머신러닝', '딥러닝'],
    keyword: [
      <>
        인공지능
        <br />
        플랫폼 설계
      </>,
      <>
        IT 융합
        <br />
        전문가
      </>,
      <>미래 산업 기술</>,
    ],
    color: 'navy',
  },
};

const MajorCard = ({ major }: { major: MajorType }) => {
  const selectedMajor = majorInformation[major];
  const theme = useTheme();
  const majorColor = theme.color.primary[selectedMajor.color];

  return (
    <S.CardLayout>
      <Image
        src={`/images/about/section5/${major}.png`}
        width={630}
        height={250}
        alt=''
      />

      <S.ContentSection>
        <S.Title>{selectedMajor.title}</S.Title>
        <S.Content
          css={css`
            span {
              color: ${majorColor};
            }
          `}
        >
          {selectedMajor.content}
        </S.Content>
        <S.HashTagSection>
          {selectedMajor.hashTag.map((tag) => (
            <S.HashTag
              key={tag}
              css={css`
                color: ${majorColor};
                background-color: ${majorColor}1A;
              `}
            >
              #{tag}
            </S.HashTag>
          ))}
        </S.HashTagSection>
        <S.Line />
        <S.KeywordSection>
          {selectedMajor.keyword.map((word, index) => (
            <S.Keyword key={index}>{word}</S.Keyword>
          ))}
        </S.KeywordSection>
      </S.ContentSection>
    </S.CardLayout>
  );
};

export default MajorCard;
