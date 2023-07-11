import styled from '@emotion/styled';

export const ScrollSection = styled.div`
  width: 100%;
  height: 850px;
  background: #f5f9fb;
  padding-top: 7.5rem;
`;
export const TitleSection = styled.div`
  margin-left: 3.75rem;
  display: flex;
  flex-direction: column;
`;

export const MajorWrap = styled.div`
  margin-top: 3.75rem;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none;
  height: 27.5625rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MajorContainer = styled.div`
  height: 27.5625rem;
  padding: 0;
  display: flex;
  gap: 2.5rem;
`;
