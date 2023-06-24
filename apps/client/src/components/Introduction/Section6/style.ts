import styled from '@emotion/styled';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 180px 21.25rem;
  gap: 6.6875rem;
  height: 68.6875rem;
`;

export const BusinessLayout = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
`;

export const Business = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 21.25rem;
`;

export const ImgWrapper = styled.div`
  width: 21.25rem;
  height: 21.25rem;
  border-radius: 50%;
  background-color: #f8f8f8;
  margin-bottom: 2.5rem;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typo.title};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13rem;
  height: 5.0625rem;
  background-color: rgba(122, 205, 244, 0.2);
  border-radius: 6.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary['sky']};
  margin-bottom: 1rem;
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.typo.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.color.gray['090']};
`;
