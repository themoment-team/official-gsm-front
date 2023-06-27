import React, { useEffect, useRef, useState } from 'react';

import styled from '@emotion/styled';

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

  const elementTop = rect.top;
  const elementLeft = rect.left;
  const elementHeight = rect.height;
  const elementWidth = rect.width;

  const verticalInView =
    elementTop <= windowHeight / 2 &&
    elementTop + elementHeight >= windowHeight / 2;
  const horizontalInView =
    elementLeft <= windowWidth / 2 &&
    elementLeft + elementWidth >= windowWidth / 2;

  return verticalInView && horizontalInView;
}

const SubTitle = ({ arrContent }: any) => {
  const subTitleRef = useRef(null);
  const [isCentered, setIsCentered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = subTitleRef.current;
      if (element) {
        if (isElementInViewport(element)) {
          setIsCentered(true);
        } else {
          setIsCentered(false);
        }
      }
    };

    handleScroll(); // 초기 로드 시 위치 확인

    const scrollElement = typeof window !== 'undefined' ? window : null;
    scrollElement.addEventListener('scroll', handleScroll);
    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(isCentered);

  return <SubTitleStyle ref={subTitleRef}>{arrContent}</SubTitleStyle>;
};

export default SubTitle;

const SubTitleStyle = styled.h3`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.color.white};
`;
