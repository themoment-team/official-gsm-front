import {
  Footer,
  Header,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
} from 'client/components';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '학교소개',
};

export default function AboutPage() {
  return (
    <>
      <Header segment='about' />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </>
  );
}
