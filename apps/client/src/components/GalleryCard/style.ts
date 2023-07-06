import Link from 'next/link';

import styled from '@emotion/styled';

export const GalleryCard = styled(Link)`
  width: 18.25rem;
  height: 18.9375rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  position: relative;
  :hover {
    img {
      filter: brightness(60%);
    }
  }
`;

export const IMGWrapper = styled.div`
  width: 18.25rem;
  height: 11.25rem;
  border-radius: 1.25rem;
  overflow: hidden;
  position: relative;
  img {
    object-fit: cover;
    transition: filter ease-in-out 0.3s;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  .text {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`;

export const Title = styled.h5`
  font-weight: 600;
  -webkit-line-clamp: 1;
  ${({ theme }) => theme.typo.h5}
  color: ${({ theme }) => theme.color.gray['090']};
`;

export const ContentPreview = styled.p`
  height: 2.5rem;
  font-weight: 400;
  -webkit-line-clamp: 2;
  ${({ theme }) => theme.typo.body2}
  color: ${({ theme }) => theme.color.gray['080']};
`;
