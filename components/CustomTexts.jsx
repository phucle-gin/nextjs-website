'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal sm:text-[32px] text-[20px] text-secondary-white  ${textStyles}`}
  >
    {Array.from(title).map((letter, item) => (
      <motion.span variants={textVariant2} key={item}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span> 
    ))}
  </motion.p>
);

export const TitleText = ({title, textStyles}) => (
  <motion.h2
  variants={textVariant2}
  initial="hidden"
  whileInView="show"
  className={`mt-[8px] font-bold sm:text-[28px] text-[14px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
