import styled from '@emotion/styled';
export const IdealTalent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const Line = styled.div`
  background-color: #eeeeee;
  width: 357px;
  height: 1px;
`;
export const Title = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  font-weight: 600;
  ${({ theme }) => theme.typo.h3};

  color: ${({ theme }) => theme.color.gray['090']};
  .emoji {
    margin-left: 100px;
    background-color: palegoldenrod;
  }
`;
export const SubTitle = styled.li`
  font-weight: 400;

  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.gray['090']};
  list-style: initial;
  list-style-position: inside;
`;
