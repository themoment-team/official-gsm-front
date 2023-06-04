import styled from '@emotion/styled';

export const PaginationWrapper = styled.div`
  display: flex;
`;

export const PageNumberWrapper = styled.div`
  display: flex;
  margin: 0 1.625rem;
`;

export const CursorPointer = styled.div`
  cursor: pointer;
`;

export const PageNumber = styled.p`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #050505;
  margin: 0 0.75rem;
  cursor: pointer;

  ${({ isCurrent }: { isCurrent?: boolean }) => isCurrent && `color: #888888;`}
`;
