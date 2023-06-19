import styled from '@emotion/styled';
export const IdealTalent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.div`
  height: 2.25rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.gray['090']};
  .emoji {
    padding-left: 0.1875rem;
  }
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.color.gray['040']};
  width: 22.3125rem;
  height: 0.0625rem;
`;

export const SubTitleWrap = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 23.8125rem;
  height: 3.875rem;
`;

export const SubTitle = styled.li`
  font-weight: 400;
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.gray['090']};
  list-style: initial;
  list-style-position: inside;
`;
