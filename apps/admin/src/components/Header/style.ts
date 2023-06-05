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
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(0.625rem);
  padding: 0 4.8vw;
  font-weight: 600;
  font-size: 0.875rem;
`;

export const ApproveSection = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  .teacher {
    color: #505050;
  }
`;

export const ApproveRequest = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  position: relative;
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
