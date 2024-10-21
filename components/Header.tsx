'use client'
import React, { useState } from 'react'
import ArrowRight from "../public/assets/arrow-right.svg"
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCrossCircled } from 'react-icons/rx';

const Header = () => {

  const [toggle, setToggle] = useState(false)
  const toggleButton = () => {
    setToggle((prev) => !prev);
  }
  return (
    <header className='sticky top-0 backdrop-blur-sm z-50'>
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
          {
            toggle ? (
              <div className='relative'>
                <button onClick={toggleButton} className='md:hidden relative z-50'>
                  <RxCrossCircled className='h-8 w-8 text-black' />
                </button>
                <div className='flex flex-col gap-5 px-10 py-3 absolute top-2 right-5 bg-white shadow-lg'>
                  <a href="#about">About</a>
                  <a href="#dashboard">Dashboard</a>
                  <a href="#customers">Customers</a>
                  <a href="#updates">Updates</a>
                </div>
              </div> 
            ) : (
              <button onClick={toggleButton} className='md:hidden'>
                <GiHamburgerMenu className='h-8 w-8 text-black' />
              </button>
            )
          }

          <nav className='hidden md:flex items-center gap-5 text-black/60 text-xl'>
          <a href="#about">About</a>
                  <a href="#dashboard">Dashboard</a>
                  <a href="#customers">Customers</a>
                  <a href="#updates">Updates</a>
            <button className='bg-black p-2 rounded-md text-white text-lg'>Get Started</button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
