import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 800px;
  height: 269px;
  background: #eeeeee;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  img {
    object-fit: cover;
  }
`;

export const TextWrapper = styled.div`
  width: 800px;
  margin-top: 24px;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  color: #050505;
`;

export const DetailWrapper = styled.div`
  width: 126px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 24px;
`;

export const Details = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #828282;
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: #828282;
`;

export const Description = styled.p`
  width: 800px;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.0096em;
  color: #505050;
`;
