import styled from '@emotion/styled';

import { GalleryCard } from 'client/components';

import type { ContentType } from 'types';

interface GalleryListProps {
  postList: ContentType[];
}

const GalleryList: React.FC<GalleryListProps> = ({ postList }) => (
  <List>
    {postList.map((post) => (
      <GalleryCard key={post.postSeq} post={post} />
    ))}
  </List>
);

export default GalleryList;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 1.5rem;

  @media ${({ theme }) => theme.breakPoint['1024']} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.breakPoint['600']} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
