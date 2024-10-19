import React from 'react'
import ArrowRight from "../public/assets/arrow-right.svg"
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex items-center justify-center text-sm bg-black py-3 text-white gap-3'>
        <h1>Get Started for Free</h1>
        <Image
        src={ArrowRight}
        alt='Arrow Right'
        width={32}
        height={32}
        className='mt-1'
         />
    </div>
  )
}

export default Header
