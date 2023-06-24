import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionContentWraper = styled.div`
  width: 1240px;
  height: 919px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SectionTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SectionSubTitle = styled.h3`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #616161;
`;

export const SectionCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const SmallCard = styled.div<{ bgColor: string }>`
  width: 495px;
  height: 347px;
  border-radius: 30px;
  position: relative;
  padding: 48px 0 0 48px;
  background-color: ${({ bgColor }) => bgColor};
`;

export const BigCardTemplate = styled.div<{ bgColor: string }>`
  width: 715px;
  height: 347px;
  border-radius: 30px;
  position: relative;
  padding: 48px 0 0 48px;
  background-color: ${({ bgColor }) => bgColor};
`;

export const CardImg = styled.div<{ top: string; right: string }>`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};

  img {
    object-fit: cover;
  }
`;

export const CardTitle = styled.h1<{ color: string }>`
  font-weight: 700;
  font-size: 28px;
  line-height: 41px;
  color: ${({ color }) => color};
  position: relative;

  span {
    color: ${({ color }) => color};
    opacity: 60%;
  }
`;
