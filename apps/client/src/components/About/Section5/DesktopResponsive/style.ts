import styled from '@emotion/styled';

import { sectionHeight } from 'client/components/About/Section5/sectionHeight';

import { pxToRem } from 'common';

export const ScrollSection = styled.div`
  width: 100vw;

  height: ${pxToRem(sectionHeight.scrollSectionHeightPx)}rem;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: 100%;
    height: 104.875rem;
  }
`;

export const MajorLayout = styled.div`
  background: #f5f9fb;
  height: ${pxToRem(sectionHeight.contentSectionHeightPx)}rem;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    height: 100%;
  }
`;

export const StickySection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${pxToRem(sectionHeight.scrollSectionHeightPx)}rem;
  position: sticky;
  top: 0;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: 100%;
    height: 104.875rem;
    position: relative;
  }
`;

export const MajorSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6.25rem;
  width: 100%;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    display: flex;
    flex-direction: column;
    align-content: space-between;

    width: 51.5rem;
    height: 82.375rem;
  }
`;

export const TitleSection = styled.div`
  height: 48.625rem;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    height: 100%;
    margin-right: 14.875rem;
  }
`;

export const MajorSelect = styled.div`
  position: relative;
  margin-top: 3.375rem;
  height: 11rem;
  display: flex;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  width: 24.5rem;
`;

export const Line = styled.div`
  position: absolute;
  width: 0rem;
  height: 100%;
  border: 0.125rem solid #cdd5e2;
  top: 0rem;
  left: calc(2rem / 2);
  margin: 0;
  z-index: 1;
  transform: translateX(-50%);
`;

export const MajorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`;

export const MajorName = styled.p`
  display: inline-flex;
  gap: 0.75rem;
  align-items: center;
  cursor: pointer;
  width: fit-content;

  &::before {
    content: '';
    width: 2rem;
    height: 2rem;
    background: #ffffff;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
  }

  &:hover {
    color: #00336566;
    &::before {
      border-color: #00336566;
    }
  }
`;
