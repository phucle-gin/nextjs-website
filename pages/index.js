'use client';
import dynamic from 'next/dynamic'
// import { Footer, Navbar } from '../components';
// import { Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import { LazyMotion, domAnimation } from "framer-motion"
import { Suspense } from 'react';
const About = dynamic(() => import('../sections/About'), {
  suspense: true,
})
const Hero = dynamic(() => import('../sections/Hero'), {
  suspense: true,
})
const Explore = dynamic(() => import('../sections/Explore'), {
  suspense: true,
})
const Feedback = dynamic(() => import('../sections/Feedback'), {
  suspense: true,
})
const GetStarted = dynamic(() => import('../sections/GetStarted'), {
  suspense: true,
})
const Insights = dynamic(() => import('../sections/Insights'), {
  suspense: true,
})
const WhatsNew = dynamic(() => import('../sections/WhatsNew'), {
  suspense: true,
})

const Footer = dynamic(() => import('../components/Footer'), {
  suspense: true,
})
const Navbar = dynamic(() => import('../components/Navbar'), {
  suspense: true,
})
const Page = () => (
  <div className="overflow-hidden bg-primary-black">
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
  </div>
);

export default Page;
