'use client';
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew } from '../sections';
import { LazyMotion, domAnimation } from "framer-motion"
import { Suspense } from 'react';

const Page = () => (
  <LazyMotion features={domAnimation}>
    <Suspense>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <Insights />
      <Feedback />
      <Footer />
    </Suspense>
  </LazyMotion>
);

export default Page;
