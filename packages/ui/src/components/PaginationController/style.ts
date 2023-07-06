import styled from '@emotion/styled';

export const PaginationController = styled.div`
  width: fit-content;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin: 2.5rem auto 0;
`;

export const PaginationButton = styled.button`
  :disabled {
    cursor: default;
  }
  svg {
    display: block;
  }
`;

export const PageNumberWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const PageNumberButton = styled.button<{ selected: boolean }>`
  ${({ theme }) => theme.typo.body1}
  width: 2rem;
  color: ${({ theme, selected }) => theme.color.gray[selected ? '090' : '060']};
  font-weight: 600;
  text-align: center;
`;
