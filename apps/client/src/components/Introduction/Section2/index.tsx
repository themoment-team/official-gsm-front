import SubTitle from 'client/components/SubTitle';

import * as S from './style';

const Section2 = () => {
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
          도전과 실력으로 미래의 가치를 <br />
          창출하는 <S.Point>무한 상상인 💡</S.Point>
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          도전과 실력으로 미래의 가치를 <br />
          창출하는 <S.Point>무한 상상인 💡</S.Point>
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

  return (
    <S.Test>
      <S.Layout>
        <S.TitleSection>
          {array.map((arr) => (
            <SubTitle key={arr.id} arrContent={arr.content} />
          ))}
        </S.TitleSection>
      </S.Layout>
    </S.Test>
  );
};

export default Section2;
