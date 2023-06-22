import React, { useRef, useEffect, useState } from 'react';

import styled from '@emotion/styled';

const SubTitle = ({ arrContent, id }: any) => {
  const [isCentered, setIsCentered] = useState(false);
  const observer = useRef<any>();
  const subtitleRef = useRef<any>();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === subtitleRef.current) {
            setIsCentered(entry.isIntersecting);
          }
        });
      },
      { threshold: [0.5, 0.7] }
    );

    const node = subtitleRef.current;
    if (node) observer.current.observe(node);

    return () => {
      if (node) observer.current.unobserve(node);
    };
  }, []);

  return (
    <SubTitleStyle
      ref={subtitleRef}
      isCentered={isCentered}
      className={id}
      id={id}
    >
      {arrContent}
    </SubTitleStyle>
  );
};

export default SubTitle;

const SubTitleStyle = styled.h3<{ isCentered: boolean; id: string }>`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.color.white};
  opacity: ${({ isCentered }) => (isCentered ? 1 : 0.3)};
  transition: all 1s;
  transform: ${({ isCentered }) => (isCentered ? 'scale(1.3)' : 'scale(1)')};
  margin-bottom: 120px;

  &:nth-of-type(1) {
    margin-top: 200px;
  }

  &:nth-of-type(4) {
    height: 500px;
  }
`;
