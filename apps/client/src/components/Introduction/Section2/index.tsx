import SubTitle from './SubTitle';
import * as S from './style';

const array = [
  {
    id: 1,
    content: (
      <>
        도전과 실력으로 미래의 가치를 <br />
        창출하는 <S.Point>무한 상상인 💡</S.Point>
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        지덕체를 공유하고 능동적으로 <br />
        협업하는 <S.Point> SW 개발인 🙋🏻‍♂️</S.Point>
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        AI 중심 사회를 주도할 <br />
        가슴 따뜻한 <S.Point>글로벌인 🤖</S.Point>
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        도전과 실력으로 미래의 가치를 <br />
        창출하는 <S.Point>무한 상상인 💡</S.Point>
      </>
    ),
  },
];

const Section2 = () => (
  <S.Layout>
    <S.TitleSection>
      {array.map((arr) => (
        <SubTitle key={arr.id} arrContent={arr.content} id={arr.id} />
      ))}
    </S.TitleSection>
  </S.Layout>
);

export default Section2;
