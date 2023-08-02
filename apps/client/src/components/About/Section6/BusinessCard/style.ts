import styled from '@emotion/styled';

export const Business = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 21.25rem;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 21.25rem;
  height: 21.25rem;
  margin-bottom: 2.5rem;

  img {
    border-radius: 50%;
    object-fit: cover;
  }
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
  color: ${({ theme }) => theme.color.gray['090']};
  font-weight: 600;
`;

export const MobileCircle = styled.div`
  display: none;
  width: 6.25rem;
  height: 6.25rem;
  filter: blur(5rem);
  position: absolute;
  bottom: 6.25rem;

  @media ${({ theme }) => theme.breakPoint['1024']} {
    display: block;
  }
`;
