import styled from '@emotion/styled';

export const SectionCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.875rem;
`;

export const smallCardTemplate = styled.div`
  width: 30.9375rem;
  height: 21.6875rem;
  overflow: hidden;
  border-radius: 1.875rem;
  position: relative;
  padding: 3rem 0 0 3rem;

  @media ${({ theme }) => theme.breakPoint[1440]} {
    width: 100%;
  }
`;

export const bigCardTemplate = styled.div`
  width: 44.6875rem;
  height: 21.6875rem;
  overflow: hidden;
  border-radius: 1.875rem;
  position: relative;
  padding: 3rem 0 0 3rem;

  @media ${({ theme }) => theme.breakPoint[1440]} {
    width: 100%;
  }
`;

export const Card1 = styled(smallCardTemplate)`
  background-color: #0033651a;
`;

export const Card2 = styled(bigCardTemplate)`
  background-color: #f8fadb;
`;

export const Card3 = styled(bigCardTemplate)`
  background-color: #7acdf433;
`;

export const Card4 = styled(smallCardTemplate)`
  background-color: #ff98771a;
`;

export const CardImgTemplate = styled.div`
  position: absolute;
  bottom: 0;

  img {
    object-fit: cover;
  }
`;

export const Card1Img = styled(CardImgTemplate)`
  width: 14.625rem;
  height: 13.75rem;

  right: 2.1875rem;

  @media ${({ theme }) => theme.breakPoint[1440]} {
    width: 17.875rem;
    height: 15.125rem;

    right: 3.6875rem;
  }

  @media ${({ theme }) => theme.breakPoint[600]} {
    width: 13.5625rem;
    height: 12.4375rem;

    right: 1.25rem;
  }
`;

export const Card2Img = styled(CardImgTemplate)`
  width: 18.125rem;
  height: 16.25rem;

  right: 2.1875rem;

  @media ${({ theme }) => theme.breakPoint[1440]} {
    width: 18.375rem;
    height: 17.75rem;

    right: 2.5625rem;
  }

  @media ${({ theme }) => theme.breakPoint[600]} {
    width: 14rem;
    height: 13.75rem;

    right: 1.375rem;
  }
`;

export const Card3Img = styled(CardImgTemplate)`
  width: 22.5rem;
  height: 13.75rem;

  right: 1.375rem;

  @media ${({ theme }) => theme.breakPoint[1440]} {
    width: 21.875rem;
    height: 16.625rem;

    right: 2.4375rem;
  }

  @media ${({ theme }) => theme.breakPoint[600]} {
    width: 17.1875rem;
    height: 13.125rem;

    right: 1.6875rem;
  }
`;

export const Card4Img = styled(CardImgTemplate)`
  width: 15.75rem;
  height: 13.75rem;

  right: 0;

  @media ${({ theme }) => theme.breakPoint[1440]} {
    width: 17.25rem;
    height: 15rem;

    right: 1.875rem;
  }

  @media ${({ theme }) => theme.breakPoint[600]} {
    width: 15.375rem;
    height: 13.375rem;

    right: 0;
  }
`;

export const CardTitle = styled.h1<{ fontColor: string }>`
  color: ${({ fontColor }) => fontColor};
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 2.5625rem;
  position: relative;

  span {
    color: ${({ fontColor }) => fontColor};
    opacity: 60%;
  }

  @media ${({ theme }) => theme.breakPoint[600]} {
    font-size: 1.5rem;
  }
`;
