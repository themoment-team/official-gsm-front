import styled from '@emotion/styled';

import { AuthModel } from 'admin/components';

export const SignInPage = styled.div`
  height: 16.5rem;
  padding-top: 4.375rem;
  position: relative;
  @media (max-height: 26.5rem) {
    margin: 5rem 0;
  }
`;

export const ModelWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
`;

export const SignInModel = styled(AuthModel)`
  margin-top: 0;
  position: relative;
  z-index: 0;
`;

export const ModelCover = styled.div`
  width: 13.75rem;
  height: 13.75rem;
  backdrop-filter: blur(0.4688rem);
  background: rgba(14, 15, 16, 0.6);
  z-index: 1;
  position: absolute;
  top: 0;
`;

export const SignInContent = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  color: #ffffff;
`;

export const LimeHighlight = styled.span`
  color: #b2e449;
`;

export const SkyBlueHighlight = styled.span`
  color: #7acdf4;
`;

export const GoogleOAuthLink = styled.a`
  width: 21.4375rem;
  height: 3.0625rem;
  background: #fcfcfc;
  border-radius: 1.25rem;
  color: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5625rem;
  font-weight: 700;
  font-size: 0.9375rem;
  cursor: pointer;
`;
