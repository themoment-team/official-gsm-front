import styled from "@emotion/styled";
import Image from "next/image";

export const CardWrpapper = styled.div`
  width: 349px;
  height: 381px;
`;

export const IMGWrpapper = styled.div`
  width: 349px;
  height: 220px;
  background: #eeeeee;
  border-radius: 20px;
  margin-bottom: 16px;
`;

export const ContentIMG = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  font-feature-settings: "ss10" on;
  color: #000000;
  margin-bottom: 8px;
`;

export const Text = styled.pre`
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.0096em;
  font-feature-settings: "ss10" on;
  color: #505050;
  margin-bottom: 24px;
`;

export const DetailWrpapper = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-between;
`;

export const Details = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  font-feature-settings: "ss10" on;
  color: #828282;
`;
