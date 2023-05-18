import styled from "@emotion/styled";

export const NoticeCard = styled.div`
  height: 70px;
  width: 1080px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    background: rgba(238, 238, 238, 1);
    transition: ease-in-out 300ms;
  }
`;

export const TitleWrap = styled.div`
  margin-left: 24px;
`;

export const Title = styled.div`
  height: 20px;
  width: 230px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
`;

export const SubTitle = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  padding-top: 4px;
`;

export const WriterDateWrap = styled.div`
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  display: flex;
  width: 130px;
  margin-right: 43px;
  color: rgba(130, 130, 130, 1);
  justify-content: space-between;
  align-items: center;
`;

export const Writer = styled.div``;

export const Dot = styled.div`
  height: 4px;
  width: 4px;
  border-radius: 100px;
  background-color: rgba(130, 130, 130, 1);
`;

export const Date = styled.div``;
