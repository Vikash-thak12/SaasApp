import Image from 'next/image'
import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaInstagram, FaPinterest, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className='p-4 bg-black text-[#BCBCBC] text-sm text-center'>
            <div className="container">
                <div className='flex items-center justify-center'>
                    <Image src={"/assets/logosaas.png"} alt="main Logo" width={40} height={40} className='' />
                </div>
                <nav className='my-5 flex flex-col md:flex-row font-semibold text-base items-center justify-center gap-2'>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Customer</a>
                    <a href="#">Pricing</a>
                    <a href="#">Help</a>
                    <a href="#">Careers</a>
                </nav>
                <div className='flex items-center justify-center gap-5 mt-5'>
                    <FaXTwitter className='footer-icon' />
                    <FaInstagram className='footer-icon' />
                    <CiLinkedin className='footer-icon' />
                    <FaPinterest className='footer-icon' />
                    <FaYoutube className='footer-icon' />
                </div>
            </div>
        </footer>
    )
}

export default Footer
