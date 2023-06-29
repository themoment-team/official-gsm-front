import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  position: absolute;
  left: -100%;
  top: 2rem;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  width: 8.4375rem;
  padding: 1.25rem 0rem 0.875rem 0rem;
  background-color: #fcfcfc;
  border-radius: 20px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.11);
`;

export const Teacher = styled.p`
  color: #050505;
  font-weight: 700;
  line-height: 1.5rem;
`;

export const Logout = styled.button`
  color: #616161;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const Line = styled.div`
  width: 8.4375rem;
  height: 0.0625rem;
  background-color: #eeeeee;
`;
