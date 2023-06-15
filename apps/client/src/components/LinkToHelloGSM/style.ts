import styled from '@emotion/styled';

export const LinkToHelloGSMWrapper = styled.div`
  width: 77.375rem;
  height: 8.0625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #35d391 0%, #6cabe4 48.96%, #c0fbff 100%);
  border-radius: 1.25rem;
`;

export const TextWrapper = styled.div`
  height: 4.5625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const AdmissionText = styled.h3`
  font-weight: 700;
  font-size: ${({ theme: { typo } }) => typo.h3.fontSize};
  line-height: ${({ theme: { typo } }) => typo.h3};
  color: ${({ theme: { color } }) => color.white};
`;

export const HashTagWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const HashTag = styled.h4`
  font-weight: 400;
  font-size: ${({ theme: { typo } }) => typo.h4.fontSize};
  line-height: ${({ theme: { typo } }) => typo.h4};
  color: ${({ theme: { color } }) => color.white};
`;
