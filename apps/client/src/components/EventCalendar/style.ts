import styled from '@emotion/styled';

export const EventCalendar = styled.div`
  width: 14.75rem;
  min-height: 13.5rem;
  height: auto;
  overflow: hidden;

  border-radius: 1.25rem;
  background: ${({ theme }) => theme.color.white};

  box-shadow: 0rem 0.25rem 2.5rem 0rem ${({ theme }) => theme.elevation.blue};
  padding: 1.5rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.typo.h4};
  display: flex;
  width: 5rem;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  padding-bottom: 0.75rem;
  svg {
    position: relative;
    bottom: 0.125rem;
  }
`;

export const Point = styled.div`
  background-color: ${({ theme }) => theme.color.primary.lime};
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
`;

export const SubtitleBox = styled.div`
  ${({ theme }) => theme.typo.h5};
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 300;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  position: relative;
  top: -0.0625rem;
  width: 9.5625rem;
`;
