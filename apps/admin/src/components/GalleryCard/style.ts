import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  width: 21.8125rem;
  height: 23.8125rem;
  cursor: pointer;
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
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: #000000;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 0.9375rem;
  line-height: 1.5rem;
  letter-spacing: 0.0096em;
  color: #505050;
  margin-bottom: 1.5rem;
  word-break: keep-all;
`;
