'use client';

import {
  Header,
  Section1,
  Section2,
  Section3,
  Section5,
  Section7,
} from 'client/components';

export default function AboutPage() {
  return (
    <>
      <Header isBackgroundWhite={true} segment='about' />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
      <Section7 />
    </>
  );
}
