'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="z-0 gradient-02" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About VR" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[28px] text-[14px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Virtual Reality</span> is an stimulated experience in the mordern world, where you can <span className="font-extrabold text-white"> immerse yourself </span> in a virtual world, the surroundings are there to make the sensation as vivid as possible, because this is {' '}
        <span className="font-extrabold text-white">
        the astonishing of today's the virtual reality
        </span>{' '}
        , using {' '}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the world you want, turn your dreams into
        reality. Let's{' '}
        <span className="font-extrabold text-white">explore</span> the madness
        of the virtual universe by scrolling down.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;