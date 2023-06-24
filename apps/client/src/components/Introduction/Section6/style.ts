import styled from '@emotion/styled';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 180px 340px;
  gap: 107px;
  height: 1099px;
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
  width: 340px;
`;

export const ImgWrapper = styled.div`
  width: 340px;
  height: 340px;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 208px;
  height: 81px;

  background: rgba(122, 205, 244, 0.2);
  border-radius: 100px;

  font-weight: 700;
  font-size: 28px;
  line-height: 41px;
  /* identical to box height, or 146% */

  text-align: center;

  /* primary_sky */

  color: #7acdf4;
  margin-bottom: 16px;
`;

export const SubTitle = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height, or 150% */

  text-align: center;

  /* gray090 */

  color: #212121;
`;
