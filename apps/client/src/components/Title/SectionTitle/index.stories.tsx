import { AboutTitle, SubTitle } from 'client/components';

import SectionTitle from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/Title/SectionTitle',
  component: SectionTitle,
  parameters: {},
} as Meta<typeof SectionTitle>;

type Story = StoryObj<typeof SectionTitle>;

export const Section3: Story = {
  args: {
    children: (
      <>
        <AboutTitle pointColor='sky'>학교가 추구하는 교육 방향</AboutTitle>
        <SubTitle>창의 융합력을 갖춘 글로벌 소프트웨어 마이스터 육성</SubTitle>
      </>
    ),
  },
};

export const Section4: Story = {
  args: {
    children: (
      <>
        <AboutTitle pointColor='lime'>
          소프트웨어 인재 양성을 위한 교육 과정
        </AboutTitle>
        <SubTitle>스스로 삶의 힘을 키우고 상생의정신을 함양하는 학교</SubTitle>
      </>
    ),
  },
};

export const Section5: Story = {
  args: {
    textAlign: 'left',
    children: (
      <>
        <AboutTitle pointColor='sky'>
          창의 융합력을 갖춘 <br />
          글로벌 소프트웨어 학과 소개
        </AboutTitle>
        <SubTitle>체계적인 교육과정을 제공하는 소프트웨어 학과</SubTitle>
      </>
    ),
  },
};

export const Section6: Story = {
  args: {
    children: (
      <>
        <AboutTitle pointColor='lime'>꿈 끼 업(UP) 고(GO) 특색사업</AboutTitle>
        <SubTitle>꿈˙끼˙업(UP)˙고(GO)</SubTitle>
      </>
    ),
  },
};

export const Section7: Story = {
  args: {
    textAlign: 'left',
    children: (
      <>
        <AboutTitle pointColor='sky'>GSM이 원하는 학교상</AboutTitle>
        <SubTitle>소프트웨어 시대를 이끌어 나갈 인재</SubTitle>
      </>
    ),
  },
};

export const Section8: Story = {
  args: {
    children: (
      <>
        <AboutTitle pointColor='lime'>GSM과 함께하는 MOU 기업</AboutTitle>
        <SubTitle>꿈˙끼˙업(UP)˙고(GO)</SubTitle>
      </>
    ),
  },
};
