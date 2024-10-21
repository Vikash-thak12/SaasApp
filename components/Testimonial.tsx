'use client'
import { testimonials } from '@/data'
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';

const firstCol = testimonials.slice(0, 3);
const secondCol = testimonials.slice(3, 6);
const thridCol = testimonials.slice(6, 9);

const TestimonialColumns = (props: { className?: string, testimonials: typeof testimonials, duration?: number }) => (
  <div className={props.className}>
    <motion.div 
    animate={{
      translateY: "-50%",
    }}
    transition={{
      duration: props.duration || 10, 
      repeat: Infinity, 
      repeatType: "loop",
      ease: "linear"
    }}
    className='flex flex-col gap-5 items-center justify-center mb-6 pr-5'>
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {
            props.testimonials.map(({ text, name, imageSrc, username }) => (
              <div key={username} className='card'>
                <div className='text-gray-600'>{text}</div>
                <div className='flex items-center gap-5 mt-2'>
                  <Image src={imageSrc} alt='Logo' height={48} width={48} />
                  <div>
                    <h2 className='font-bold'>{name}</h2>
                    <h2 className='font-semibold'>{username}</h2>
                  </div>
                </div>
              </div>
            ))
          }
        </React.Fragment>
      ))}
    </motion.div>
  </div>
)

const Testimonial = () => {
  return (
    <section className='py-10' id='customers'>
      <div className="container">
        <div className='px-4'>
          <h1 className='text-center font-bold text-xl'>Version 2.O is here</h1>
          <h1 className='text-center font-bold text-5xl'>What our users say</h1>
          <p className='text-center font-xl py-5'>Form intutive design to powerful features, our app has become an essential tool for users around the world</p>
        </div>
        <div className='flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] mt-10 border border-black'>
          <TestimonialColumns testimonials={firstCol} duration={10} />
          <TestimonialColumns testimonials={secondCol} className='hidden md:block' duration={8} />
          <TestimonialColumns testimonials={thridCol} className='hidden lg:block' duration={12} />
        </div>
      </div>
    </section>
  )
}

export default Testimonial
