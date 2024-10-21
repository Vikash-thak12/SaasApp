'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const ProductPage = () => {
    return (
        <section id='dashboard' className='py-12 md:py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]'>
            <div className=''>
                <div className='flex items-center justify-center'>

                    <h1 className='font-bold text-base round text-center'>Boost Your Productivity</h1>
                </div>
                <div className='px-10 md:px-16'>
                    <h2 className='font-semibold my-5 text-3xl md:text-7xl max-w-4xl mx-auto text-center tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>A more efficient way to track your progress</h2>
                    <h2 className='text-center text-xl tracking-tighter py-2 text-[#010D3E]'>Effortlessly turn your ideas into a fully functional, responsive, SaaS Website in just minutes with this template</h2>
                </div>
                <div className='flex items-center justify-center relative overflow-x-clip'>
                    <Image
                        src={"/assets/product-image.png"}
                        alt='Product Image'
                        width={1500}
                        height={200}
                    />
                    <motion.img
                        src={"/assets/pyramid.png"}
                        alt='Product Image'
                        width={250}
                        height={200}
                        className='hidden md:block  absolute md:-right-32 md:top-0 lg:-right-20 lg:top-0'
                        animate={{
                            scale: [0.5, 1.5]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: "easeInOut"
                        }}
                    />
                    <motion.img
                        src={"/assets/tube.png"}
                        alt='Product Image'
                        width={250}
                        height={200}
                        className='hidden md:block absolute md:-left-32 md:bottom-0 lg:-left-20 lg:bottom-20'
                        animate={{
                            translateX: [-70, 70],
                        }}
                        transition={{
                            duration: 2, 
                            repeat: Infinity, 
                            repeatType: "mirror",
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default ProductPage
