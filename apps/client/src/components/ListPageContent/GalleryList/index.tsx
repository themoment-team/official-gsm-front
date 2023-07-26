import styled from '@emotion/styled';

import { GalleryCard } from 'client/components';

import type { ContentType } from 'types';

interface ListPageGalleryListProps {
  postList: ContentType[];
}

const ListPageGalleryList: React.FC<ListPageGalleryListProps> = ({
  postList,
}) => (
  <List>
    {postList.map((post) => (
      <GalleryCard key={post.postSeq} post={post} />
    ))}
  </List>
);

export default ListPageGalleryList;

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
