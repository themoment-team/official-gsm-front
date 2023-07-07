'use client';

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

export default function AboutPage() {
  return (
    <>
      <Header isBackgroundWhite={true} segment='about' />
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
