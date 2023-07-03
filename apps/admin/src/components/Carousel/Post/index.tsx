import { useState } from 'react';

import Image from 'next/image';

import { css } from '@emotion/react';

import { filterImages } from 'common';

import { CarouselController } from 'admin/components';
import * as S from 'admin/components/Carousel/style';

import { useGetPostDetail } from 'api/client';

interface PostCarouselProps {
  postSeq: number;
}

const PostCarousel: React.FC<PostCarouselProps> = ({ postSeq }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { data } = useGetPostDetail(postSeq);

  const imageFiles = filterImages(data?.fileInfo);

  return (
    <S.PostCarouselWrapper>
      <S.IMGOuterWrapper
        css={css`
          width: 29.75rem;
          height: 43.0625rem;
        `}
      >
        <S.IMGContainer>
          <S.MoveContainer
            css={css`
              right: ${currentIndex * 29.75}rem;
            `}
          >
            {imageFiles?.map((file, i) => (
              <S.IMGWrapper
                key={file.fileName + i}
                css={css`
                  width: 29.75rem;
                  height: 43.0625rem;
                  ${currentIndex === i &&
                  css`
                    transition: opacity 0.3s;
                    z-index: 1;
                    opacity: 1;
                  `}
                `}
              >
                <Image alt='content image' src={file.fileUrl} fill />
              </S.IMGWrapper>
            ))}
          </S.MoveContainer>
        </S.IMGContainer>
      </S.IMGOuterWrapper>
      {imageFiles?.length !== 0 && (
        <CarouselController
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          postSeq={postSeq}
        />
      )}
    </S.PostCarouselWrapper>
  );
};

export default PostCarousel;
