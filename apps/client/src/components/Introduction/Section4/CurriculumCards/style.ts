import styled from '@emotion/styled';

export const SectionCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.875rem;
`;

export const CardTemplate = styled.div<{ isSmall: boolean; bgColor: string }>`
  width: ${({ isSmall }) => (isSmall ? '30.9375rem' : '44.6875rem')};
  height: 21.6875rem;
  border-radius: 1.875rem;
  position: relative;
  padding: 3rem 0 0 3rem;
  background-color: ${({ bgColor }) => bgColor};
`;

export const CardImg = styled.div<{ top: string; right: string }>`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};

  img {
    object-fit: cover;
  }
`;

export const CardTitle = styled.h1<{ color: string }>`
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 2.5625rem;
  color: ${({ color }) => color};
  position: relative;

  span {
    color: ${({ color }) => color};
    opacity: 60%;
  }
`;
