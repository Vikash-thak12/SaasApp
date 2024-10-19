import Image from 'next/image'
import React from 'react'

const CallToAction = () => {
    return (
        <section className='bg-gradient-to-b from-white to-[#D2DCFF] py-12 md:py-36 px-4 overflow-x-clip'>
            <div className="container relative">
                <h2 className='text-center font-bold text-3xl'>Sign up for Free Today</h2>
                <p className='section-desc py-5 max-w-md mx-auto'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
                <Image src={"/assets/star.png"} alt='Logo' width={300} height={200} className='absolute hidden md:block md:-top-24 md:-left-40 lg:-top-30 lg:left-20' />
                <Image src={"/assets/spring.png"} alt='Logo' width={300} height={200} className='absolute hidden md:block md:-bottom-20 md:-right-32 lg:-bottom-36 lg:right-32' />
                <div className='flex items-center justify-center gap-6'>
                    <button className='btn btn-primary'>Get for free</button>
                    <button className='btn'>Learn more</button>
                </div>
            </div>
        </section>
    )
}

export default CallToAction
