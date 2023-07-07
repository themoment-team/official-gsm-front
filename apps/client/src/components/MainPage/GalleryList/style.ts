import styled from '@emotion/styled';

export const GalleryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const GalleryList = styled.div`
  display: flex;
  gap: 1.5rem;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
    justify-content: space-between;
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: calc(100vw - 7.5rem);
  }
`;
