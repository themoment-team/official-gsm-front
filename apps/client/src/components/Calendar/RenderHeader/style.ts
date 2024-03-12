import styled from '@emotion/styled';

export const Title = styled.div`
  ${({ theme }) => theme.typo.h3};
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15.8125rem;
  height: 2.25rem;
  position: relative;
  bottom: 2.5rem;
  svg {
    cursor: pointer;
  }
`;
