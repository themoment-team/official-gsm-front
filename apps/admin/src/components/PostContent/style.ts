import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 50rem;
  height: 16.8125rem;
  background: #eeeeee;
  border-radius: 1.25rem;
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
  width: 50rem;
  margin-top: 1.5rem;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 1.0625rem;
  line-height: 1.5625rem;
  color: #050505;
`;

export const DetailWrapper = styled.div`
  width: 7.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 1.5rem;
`;

export const Details = styled.p`
  font-weight: 600;
  font-size: 0.8125rem;
  line-height: 1rem;
  color: #828282;
`;

export const Dot = styled.div`
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  background: #828282;
`;

export const Description = styled.p`
  width: 50rem;
  font-weight: 400;
  font-size: 0.9375rem;
  line-height: 1.5rem;
  letter-spacing: 0.0096em;
  color: #505050;
`;
