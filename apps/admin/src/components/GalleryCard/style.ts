import Link from 'next/link';

import styled from '@emotion/styled';

export const GalleryCard = styled(Link)`
  display: block;
  width: 21.8125rem;
  height: 21.9375rem;
  cursor: pointer;
  position: relative;
  :hover {
    img {
      filter: brightness(60%);
    }
  }
  .text {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`;

export const IMGWrapper = styled.div`
  width: 21.8125rem;
  height: 13.75rem;
  background: ${({ theme }) => theme.color.gray['040']};
  border-radius: 1.25rem;
  margin-bottom: 1rem;
  overflow: hidden;
  position: relative;
  img {
    object-fit: cover;
    transition: filter ease-in-out 0.3s;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typo.body1};
  line-height: 1.5rem;
  color: ${({ theme }) => theme.color.gray['090']};
  margin-bottom: 0.5625rem;
  -webkit-line-clamp: 1;
`;

export const ContentPreview = styled.p`
  ${({ theme }) => theme.typo.body2};
  width: 100%;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.color.gray['080']};
  -webkit-line-clamp: 2;
`;

export const WiterAndDateWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

export const Writer = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1rem;
  color: ${({ theme }) => theme.color.gray['060']};
`;
