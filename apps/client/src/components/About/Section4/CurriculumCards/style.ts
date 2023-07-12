import styled from '@emotion/styled';

export const SectionCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.875rem;
`;

export const CardTemplate = styled.div`
  overflow: hidden;
  height: 21.6875rem;
  border-radius: 1.875rem;
  position: relative;
  padding: 3rem 0 0 3rem;
`;

export const CardImg = styled.div`
  position: absolute;

  img {
    object-fit: cover;
  }
`;

export const CardTitle = styled.h1`
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 2.5625rem;
  position: relative;
`;
