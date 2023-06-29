import Link from 'next/link';

import styled from '@emotion/styled';

export const LinkToHelloGSMWrapper = styled(Link)`
  width: 77.375rem;
  height: 8.0625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #35d391;
  border-radius: 1.25rem;
  margin: 7.75rem 0;
  z-index: 1;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    right: 0;
    height: inherit;
    z-index: -1;
    border-radius: 1.25rem;
    background: linear-gradient(
      90deg,
      #35d391 0%,
      #6cabe4 48.96%,
      #c0fbff 100%
    );
    box-shadow: inset 0.125rem 0.125rem 0.125rem 0rem rgba(255, 255, 255, 0.5),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }
  &:hover:after {
    left: 0;
    width: inherit;
  }
`;

export const TextWrapper = styled.div`
  height: 4.5625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const AdmissionText = styled.h3`
  ${({ theme: { typo } }) => typo.h3}
  color: ${({ theme: { color } }) => color.white};
  font-weight: 700;
`;

export const HashTagWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const HashTag = styled.h4`
  ${({ theme: { typo } }) => typo.h4}
  color: ${({ theme: { color } }) => color.white};
  font-weight: 400;
`;
