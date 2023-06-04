import styled from '@emotion/styled';

export const PaginationWrapper = styled.div`
  display: flex;
`;

export const PageNumberWrapper = styled.div`
  display: flex;
  margin: 0 26px;
`;

export const CursorPointer = styled.div`
  cursor: pointer;
`;

export const PageNumber = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #050505;
  margin: 0 12px;
  cursor: pointer;

  ${({ isCurrent }: { isCurrent?: boolean }) => isCurrent && `color: #888888;`}
`;
