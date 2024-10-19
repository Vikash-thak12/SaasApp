import Image from 'next/image';
import React from 'react'

const data = [
    {
      id: 1,
      src: "/assets/logo-acme.png",
    },
    {
      id: 3,
      src: "/assets/logo-celestial.png",
    },
    {
      id: 4,
      src: "/assets/logo-echo.png",
    },
    {
      id: 5,
      src: "/assets/logo-pulse.png",
    },
    {
      id: 6,
      src: "/assets/logo-quantum.png",
    },
    {
      id: 7,
      src: "/assets/logo-apex.png",
    }
  ];
  

const LogoTicker = () => {
  return (
    <section className='py-3 md:py-5 md:px-20 bg-white'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>

      <div className='flex items-center flex-none gap-5 md:gap-20'>
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
      </div>
        </div>
    </section>
  )
}

export default LogoTicker
