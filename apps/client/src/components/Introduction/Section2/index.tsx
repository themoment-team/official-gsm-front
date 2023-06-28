import type { ReactNode } from 'react';
import { useRef } from 'react';

import { useGetScrollHeight } from 'client/hooks';

import Content from './Content';
import * as S from './style';

const ContentItem: ReactNode[] = [
  <>
    도전과 실력으로 미래의 가치를 <br />
    창출하는 <S.Point>무한 상상인 💡</S.Point>
  </>,
  <>
    지덕체를 공유하고 능동적으로 <br />
    협업하는 <S.Point> SW 개발인 🙋🏻‍♂️</S.Point>
  </>,

  <>
    AI 중심 사회를 주도할 <br />
    가슴 따뜻한 <S.Point>글로벌인 🤖</S.Point>
  </>,
  <>
    인성과 감성으로 감동을 만드는 <br />
    <S.Point>광주소프트웨어마이스터고등학교 🏫</S.Point>
  </>,
];

const Section2 = () => {
  const scrollRef = useRef(null);
  const scrollHeight = useGetScrollHeight(scrollRef);

  return (
    <S.Layout>
      <S.ScrollSection ref={scrollRef}>
        <S.ContentSection>
          {ContentItem.map((subTitle, i) => (
            <Content key={i} index={i} scrollHeight={scrollHeight ?? 0}>
              {subTitle}
            </Content>
          ))}
        </S.ContentSection>
      </S.ScrollSection>
    </S.Layout>
  );
};

export default Section2;
