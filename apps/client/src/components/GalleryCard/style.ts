import Link from 'next/link';

import styled from '@emotion/styled';

export const GalleryCard = styled(Link)`
  width: 292px;
  height: 303px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
  position: relative;
  :hover {
    img {
      filter: brightness(60%);
    }
  }
`;

export const IMGWrapper = styled.div`
  width: 292px;
  height: 180px;
  border-radius: 20px;
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
  gap: 4px;
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
  font-weight: 400;
  -webkit-line-clamp: 2;
  ${({ theme }) => theme.typo.body2}
  color: ${({ theme }) => theme.color.gray['080']};
`;
