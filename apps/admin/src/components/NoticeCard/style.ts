import styled from "@emotion/styled";

export const NoticeCard = styled.div`
  height: 4.375rem;
  width: 67.5rem;
  border-radius: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    background: rgba(238, 238, 238, 1);
    transition: ease-in-out 300ms;
  }
`;

export const TitleWrap = styled.div`
  margin-left: 1.5rem;
`;

export const Title = styled.div`
  height: 1.25rem;
  width: 14.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
`;

export const SubTitle = styled.div`
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1rem;
  padding-top: 0.25rem;
`;

export const WriterDateWrap = styled.div`
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0em;
  display: flex;
  width: 8.125rem;
  margin-right: 2.6875rem;
  color: rgba(130, 130, 130, 1);
  justify-content: space-between;
  align-items: center;
`;

export const Writer = styled.div``;

export const Dot = styled.div`
  height: 0.25rem;
  width: 0.25rem;
  border-radius: 6.25rem;
  background-color: rgba(130, 130, 130, 1);
`;

export const Date = styled.div``;
