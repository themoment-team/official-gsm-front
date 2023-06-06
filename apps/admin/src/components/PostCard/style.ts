import Link from 'next/link';

import styled from '@emotion/styled';

export const PostCard = styled(Link)`
  height: 4.375rem;
  width: 67.5rem;
  border-radius: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9375rem 2.6875rem 0.9375rem 1.5rem;
  cursor: pointer;
  :hover {
    background: #eeeeee;
    transition: ease-in-out 300ms;
  }
`;

export const TitleWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  color: #050505;
`;

export const ContentPreview = styled.p`
  width: 25rem;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1rem;
  white-space: nowrap;
  color: #424242;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const WriterDateWrap = styled.div`
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1rem;
  display: flex;
  width: 8.125rem;
  color: rgba(130, 130, 130, 1);
  justify-content: space-between;
  align-items: center;
`;

export const Writer = styled.div``;

export const Dot = styled.div`
  height: 0.25rem;
  width: 0.25rem;
  border-radius: 100%;
  background-color: rgba(130, 130, 130, 1);
`;
