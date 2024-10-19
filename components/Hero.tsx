import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className='p-5 mt-2 md:mt-5 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'>
            <div className='md:grid md:grid-cols-2 items-center'>
                <div className='md:max-w-4xl md:px-10 md:py-10'>
                    <span className='border border-[#222]/10 inline p-2 rounded-md'>Version 2.0 is here</span>
                    <h1 className='text-5xl font-bold my-5 bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>Pathway to Productivity</h1>
                    <p className='font-semibold tracking-tighter my-2 md:pr-10'>Celebrate the joy of accomplishment with an app desgned to track your progess, motivate your efforts, and celebrate your success.</p>
                    <div className='flex gap-2 mt-2'>
                        <button className='btn btn-primary'>Get for Free</button>
                        <button className='btn flex items-center'>
                            <span>Learn More</span>
                            {/* <Image
                                src={"/assets/arrow-right.svg"}
                                alt='Arrow Right'
                                width={32}
                                height={32}
                                // className='mt-1'
                            /> */}
                        </button>
                    </div>
                </div>
                <div className='mt-20 flex items-center justify-center relative'>
                    <Image
                        src={"/assets/cog.png"}
                        alt='Arrow Right'
                        width={500}
                        height={100}
                        className=''
                    />
                    <Image
                        src={"/assets/cylinder.png"}
                        alt='Arrow Right'
                        width={200}
                        height={100}
                        className='hidden md:block absolute md:-top-20 md:-left-24 lg:-top-20 lg:-left-0'
                    />
                    <Image
                        src={"/assets/noodle.png"}
                        alt='Arrow Right'
                        width={200}
                        height={100}
                        className='hidden lg:block absolute -bottom-20 right-0 rotate-[40deg]'
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
