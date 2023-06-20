import React, { useRef, useEffect, useState } from 'react';

import styled from '@emotion/styled';

const SubTitle = ({ arrContent }: any) => {
  const [isCentered, setIsCentered] = useState(false);
  const observer = useRef<any>();
  const subtitleRef = useRef<any>();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((element) => {
          console.log(element);
          if (
            element.intersectionRatio >= 0.2 &&
            element.intersectionRatio <= 0.6
          ) {
            setIsCentered(true);
          } else {
            setIsCentered(false);
          }
        });
      },
      { threshold: [0.2, 0.6] }
    );

    const node = subtitleRef.current;
    if (node) observer.current.observe(node);

    return () => {
      if (node) observer.current.unobserve(node);
    };
  }, []);

  return (
    <SubTitleStyle ref={subtitleRef} isCentered={isCentered}>
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
  opacity: 0.4;

  transition: all 0.5s;
  transform: ${({ isCentered }) =>
    isCentered && 'scale(2)'}; // 교차 영역이 존재할 때에만 스케일 변경
  margin-bottom: 120px;

  &:nth-of-type(1) {
    margin-top: 200px;
  }

  &:nth-of-type(4) {
    margin-bottom: 200px;
  }
`;
