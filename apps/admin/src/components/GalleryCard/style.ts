import Link from 'next/link';

import styled from '@emotion/styled';

export const CardWrapper = styled(Link)`
  width: 21.8125rem;
  height: 23.8125rem;
  cursor: pointer;
  position: relative;
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
`;

export const DetailWrapper = styled.div`
  width: 8.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

export const Dot = styled.div`
  height: 0.25rem;
  width: 0.25rem;
  border-radius: 100%;
  background-color: rgba(130, 130, 130, 1);
`;

export const Writer = styled.p`
  font-weight: 600;
  font-size: 0.8125rem;
  line-height: 1rem;
  color: #828282;
`;
