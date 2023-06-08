import CarouselController from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/CarouselController',
  component: CarouselController,
  parameters: {},
} as Meta<typeof CarouselController>;

type Story = StoryObj<typeof CarouselController>;

const fileInfo = [
  {
    fileUrl:
      'http://bucket.ottokeng.site/743d7afd-690c-404a-b7fb-b6fe97598504.jpg',
    fileName: 'images.jpg',
    fileExtension: 'JPG,',
  },
  {
    fileUrl:
      'https://mediahub.seoul.go.kr/wp-content/uploads/2020/03/53552dfe5d897d0a50138605f19628a6.jpg',
    fileName: 'images.jpg',
    fileExtension: 'JPG,',
  },
  {
    fileUrl:
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/DCE1/production/_104454565_mary-mcgowan_caught-in-the-act_00001294.jpg',
    fileName: 'images.jpg',
    fileExtension: 'JPG,',
  },
  {
    fileUrl:
      'https://cdn.eyesmag.com/content/uploads/sliderImages/2020/12/03/galina-bugaevskaya-koty-vezde-cats-everywhere%20(10)-b3a54e2b-cdd7-4791-b4cb-daba71a4cbf9.jpg',
    fileName: 'images.jpg',
    fileExtension: 'JPG,',
  },
];

export const GalleryCarousel: Story = {
  args: {
    fileInfo: fileInfo,
    isGallery: true,
  },
};

export const PostCarousel: Story = {
  args: {
    fileInfo: fileInfo,
    isGallery: false,
  },
};
