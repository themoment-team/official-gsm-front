import styled from '@emotion/styled';

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  width: 100vw;
  border-bottom: 0.0625rem solid #eeeeee;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(0.6875rem);
  padding: 0 4.8vw;
`;

export const ApproveSection = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

export const ApproveRequest = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  position: relative;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const Notification = styled.div`
  position: absolute;
  top: 0;
  right: -0.313rem;
  width: 0.25rem;
  height: 0.25rem;
  background-color: #f93535;
  border-radius: 50%;
`;

export const LogoutSection = styled.div`
  position: relative;
`;

export const LogoutButton = styled.button`
  color: #505050;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
