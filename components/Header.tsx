import React from 'react'
import ArrowRight from "../public/assets/arrow-right.svg"
import Image from 'next/image'

const Header = () => {
  return (
    <header>

      <div className='flex items-center justify-center text-lg bg-black py-3 text-white gap-1 md:gap-3'>
        <span className='text-white/60 hidden md:block'>Streamline your workflow and boost your productivity</span>
        <h1>Get Started for Free</h1>
        <Image
          src={ArrowRight}
          alt='Arrow Right'
          width={32}
          height={32}
          className='mt-1'
        />
      </div>
      <div>
        <div className='flex items-center justify-between px-5 py-3'>
          <Image
            src={"/assets/logosaas.png"}
            alt='Arrow Right'
            width={48}
            height={32}
            className=''
          />
          <Image
            src={"/assets/menu.svg"}
            alt='Arrow Right'
            width={48}
            height={32}
            className='md:hidden'
          />
          <nav className='hidden md:flex items-center gap-5 text-black/60 text-xl'>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Updates</a>
            <button className='bg-black p-2 rounded-md text-white text-lg'>Get Started</button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
