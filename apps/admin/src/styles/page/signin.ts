import styled from '@emotion/styled';

import { AuthModel } from 'admin/components';

export const SignInPage = styled.div`
  height: 264px;
  padding-top: 70px;
  position: relative;
  @media (max-height: 424px) {
    margin: 80px 0;
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
  width: 220px;
  height: 220px;
  backdrop-filter: blur(7.5008px);
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
  font-size: 24px;
  line-height: 32px;
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
  width: 343px;
  height: 49px;
  background: #fcfcfc;
  border-radius: 20px;
  color: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
`;
