import styled from '@emotion/styled';

export const Banner = styled.div`
  width: 77.5rem;
  height: 14.9375rem;
  border-radius: 1.25rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: ${({ theme: { color } }) => color.primary.navy};
  color: ${({ theme: { color } }) => color.white};
`;

export const DonutImageWrapper = styled.div`
  position: absolute;
  width: 12.9012rem;
  height: 14.9375rem;
  right: 1.7862rem;
  top: 0rem;
`;

export const TextBox = styled.div`
  width: 34.375rem;
  height: 7.5625rem;
  margin-right: 39rem;

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
  margin-top: 1rem;
  font-weight: 700;
  ${({ theme: { typo } }) => typo.title};
`;

export const Preview = styled.h4`
  margin-top: 0.5rem;
  font-weight: 400;
  ${({ theme: { typo } }) => typo.h4};
`;
