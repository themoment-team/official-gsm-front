import styled from "@emotion/styled";
import Image from "next/image";

export const CardWrpapper = styled.div`
  width: 21.8125rem;
  height: 23.8125rem;
  cursor: pointer;
`;

export const IMGWrpapper = styled.div`
  width: 21.8125rem;
  height: 13.75rem;
  background: #eeeeee;
  border-radius: 1.25rem;
  margin-bottom: 1rem;
`;

export const ContentIMG = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 1.25rem;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  font-feature-settings: "ss10" on;
  color: #000000;
  margin-bottom: 0.5rem;
`;

export const Text = styled.pre`
  font-weight: 400;
  font-size: 0.9375rem;
  line-height: 1.5rem;
  letter-spacing: 0.0096em;
  font-feature-settings: "ss10" on;
  color: #505050;
  margin-bottom: 1.5rem;
`;

export const DetailWrpapper = styled.div`
  width: 8.125rem;
  display: flex;
  justify-content: space-between;
`;

export const Details = styled.p`
  font-weight: 600;
  font-size: 0.8125rem;
  line-height: 1rem;
  font-feature-settings: "ss10" on;
  color: #828282;
`;
