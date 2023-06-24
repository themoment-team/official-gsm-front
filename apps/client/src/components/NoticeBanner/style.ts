import styled from '@emotion/styled';
import Image from 'next/image';

export const Banner = styled.div`
  width: 1240px;
  height: 239px;
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: ${({ theme: { color } }) => color.primary.navy};
  color: ${({ theme: { color } }) => color.white};
`;

export const DonutImage = styled(Image)`
  position: absolute;
  width: 206.42px;
  height: 239px;
  right: 28.58px;
  top: 0px;
`;

export const TextBox = styled.div`
  width: 550px;
  height: 121px;
  margin-right: 624px;

  h4,
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

export const Text = styled.h5`
  font-weight: 600;
  ${({ theme: { typo } }) => typo.h5};
`;

export const Title = styled.p`
  margin-top: 16px;
  font-weight: 700;
  ${({ theme: { typo } }) => typo.title};
`;

export const Preview = styled.h4`
  margin-top: 8px;
  font-weight: 400;
  ${({ theme: { typo } }) => typo.h4};
`;
