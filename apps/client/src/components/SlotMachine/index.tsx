import { useState, useEffect } from 'react';

import { UnderscoreIcon } from 'client/assets';

import * as S from './style';

const Items = ['🎨', '💻', '🎮', '🛠️', '📱'];

const SlotMachine = () => {
  const [shuffledItems, setShuffledItems] = useState(Items);

  useEffect(() => {
    const shuffled = [...Items].sort(() => Math.random() - 0.5);
    setShuffledItems(shuffled);
  }, []);

  return (
    <S.SlotMachineAnimation>
      <span>뭐든지</span>
      <S.ListIconWrap>
        <S.ListWrap>
          <span>{'['}</span>
          <S.Wrap className='wrap'>
            <S.List className='rolling'>
              {shuffledItems.map((item) => (
                <S.Item key={item}>{item}</S.Item>
              ))}
            </S.List>
          </S.Wrap>
          <span>{']'}</span>
        </S.ListWrap>
      </S.ListIconWrap>
      <span className='second'>
        할 수 있어
        <S.Point>.</S.Point>
      </span>
      <S.Icon>
        <UnderscoreIcon />
      </S.Icon>
    </S.SlotMachineAnimation>
  );
};

export default SlotMachine;
