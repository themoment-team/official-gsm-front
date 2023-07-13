import styled from '@emotion/styled';

export const NoticeBannerWrapper = styled.div`
  width: 77.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: calc(100vw - 7.5rem);
  }
`;

export const SlideContainer = styled.div`
  display: flex;
  position: relative;
  transition: ease-in-out 0.7s;
  gap: 30vw;
`;
