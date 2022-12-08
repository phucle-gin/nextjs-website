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

export const TitleText = () => (
  <h2>Title Text</h2>
);
