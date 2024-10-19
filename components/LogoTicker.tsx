'use client'
import { data } from '@/data';
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';

const LogoTicker = () => {
  return (
    <section className='py-3 md:py-5 md:px-20 bg-white'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>

      <motion.div className='flex items-center flex-none gap-5 md:gap-20 pr-20' animate={{
        translateX: "-50%",
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear"
      }}
      >
         {
             data.map((item) => (
                <Image
                key={item.id}
                src={item.src}
                alt='Logo'
                width={180}
                height={40}
                />
            ))
        }
                 {
             data.map((item) => (
                <Image
                key={item.id}
                src={item.src}
                alt='Logo'
                width={180}
                height={40}
                />
            ))
        }
      </motion.div>
        </div>
    </section>
  )
}

export default LogoTicker
