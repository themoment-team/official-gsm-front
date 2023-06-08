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
`;

export const IMGWrapper = styled.div`
  width: 21.8125rem;
  height: 13.75rem;
  background: #eeeeee;
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
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #212121;
  margin-bottom: 0.5625rem;
`;

export const ContentPreview = styled.p`
  width: 100%;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #424242;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const WiterAndDateWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

export const Writer = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #9e9e9e;
`;
