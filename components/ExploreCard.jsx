'use client';
import {motion} from 'framer-motion';
import styles from '../styles';
import {fadeIn} from '../utils/motion'
const ExploreCard = ({id, imgUrl, title, index, active, handleClick}) => (
  <motion.div
  variants={fadeIn("right", "spring", index * 0.5, 0.75)}
  className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex[0.5] flex-[2]' }
  flex items-center justify-center min-w-[170px] h-p[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
  onClick={() => handleClick(id)}
  >
    <img src={imgUrl} alt={title} className="absolute w-full h-full object-cover rounded-[24px]" />
    {active !== id ? (
      <h2 className="font-semibold sm:text-[22px] text-[14px] text-white absolute z-0 lg:bottom-28 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h2>
    ) :(
      <div className="absolute bottom-0 p-10 justify-start w-full flex-col  bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
          <img src="/headset.svg" alt="headset" className='object-contain w-1/2 h-1/2'/>
        </div>
        <p className='font-normal text-[16px] leading-[20px] text-white uppercase'>
          Enter The Metaverse
        </p>
        <h2 className="mt-[24px] lg:bottom-28 font-semibold sm:text-[20px] text-[14px] text-white ">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
