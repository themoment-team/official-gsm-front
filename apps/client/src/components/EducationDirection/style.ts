import styled from '@emotion/styled';

export const EducationDirectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 24.25rem;
  height: 19.125rem;
  padding: 2rem;
  background-color: #ffffff;
  box-shadow: 0rem 0.25rem 2.5rem rgba(175, 198, 209, 0.2);
  border-radius: 1.875rem;
`;

export const Title = styled.h3`
  font-weight: 600;
  ${({ theme }) => theme.typo.h3};

  color: ${({ theme }) => theme.color.gray['090']};
`;

export const SubTitle = styled.li`
  font-weight: 400;

  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.gray['090']};
  list-style: initial;
  list-style-position: inside;
`;