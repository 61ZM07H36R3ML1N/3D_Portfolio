import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`} >
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[violet]' />
        <div className='w-1 sm:h-80 h-40 violet-gradient' />

        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>Hi, I'm <span className='text-[#FF0000]'></span>Brian Jamiel</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am an aspiring frontend developer. I mainly do frontend development and UI/UX development.
          </p>
        </div>

        <ComputersCanvas />
      </div>
      </div>  
    </section>
    
  )
}

export default Hero