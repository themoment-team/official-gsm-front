import styled from '@emotion/styled';

export const CardLayout = styled.div`
  width: 630px;
  height: 100%;

  /* white */
  background: #ffffff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
`;

export const ImageSection = styled.div`
  height: 250px;
  background-color: yellow;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const ContentSection = styled.div`
  padding: 32px 32px 40px;

  flex: 1;
`;

export const Title = styled.h3`
  font-size: 34px;
  line-height: 50px;
  /* identical to box height, or 147% */

  text-align: center;

  /* primary_navy */

  color: #003365;
  text-align: left;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Content = styled.div`
  font-size: 20px;
  line-height: 29px;
  /* or 145% */

  /* gray090 */

  color: #212121;
  margin-bottom: 20px;
`;

export const TagSection = styled.div`
  display: flex;
  gap: 10px;
  height: 41px;
`;

export const Tag = styled.div`
  padding: 6px 12px;
  font-size: 20px;
  height: 100%;
  line-height: 30px;

  /* identical to box height, or 145% */

  /* primary_sky */

  color: #7acdf4;
  background: rgba(122, 205, 244, 0.1);
  border-radius: 100px;
  font-weight: 600;
`;

export const Line = styled.div`
  border: 0.5px solid #e0e0e0;
  margin: 40px 0;
`;

export const KeywordSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Keyword = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 27px;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  font-weight: 600;
  font-size: 18px;
  color: #003365;
  background: #ffffff;
  border: 1px solid rgba(0, 51, 101, 0.6);
`;
