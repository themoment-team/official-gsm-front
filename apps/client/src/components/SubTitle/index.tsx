import React, { useRef, useEffect, useState } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

const SubTitle = ({ arrContent }: any) => {
  const [isCentered, setIsCentered] = useState<any>(null);
  const observer = useRef<any>();
  const subtitleRef = useRef<any>();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((element) => {
          console.log(element);
          if (element.isIntersecting) {
            setIsCentered(true);
          } else if (!element.isIntersecting) {
            setIsCentered(false);
          }
        });
      },
      { threshold: 1 }
    );

    const node = subtitleRef.current;
    // node가 존재하면 observe 호출
    if (node) observer.current.observe(node);

    return () => {
      // 컴포넌트가 언마운트되면 observer 해제
      if (node) observer.current.unobserve(node);
    };
  }, []);

  return (
    <SubTitleStyle
      ref={subtitleRef}
      isCentered={isCentered}
      css={
        isCentered &&
        css`
          font-size: 3.75rem;
          line-height: 4.5rem;
          font-weight: 700;
        `
      }
    >
      {arrContent}
    </SubTitleStyle>
  );
};

export default SubTitle;

const SubTitleStyle = styled.h3<{ isCentered: boolean }>`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.color.white};
  opacity: ${({ isCentered }) => (isCentered ? 1 : 0.3)};

  transition: all 3s;

  margin-bottom: 120px;

  &:nth-of-type(1) {
    margin-top: 200px;
  }

  &:nth-of-type(4) {
    margin-bottom: 200px;
  }
`;
