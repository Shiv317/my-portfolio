import React from 'react';
import logo from "../assets/logo.webp";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className='relative z-50 mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                {/* Adjust the size of the logo */}
                <img className="mx-2 w-16 h-16" src={logo} alt="logo" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/shivail-anand-02371b221/" target="_blank" rel="noopener noreferrer" className='hover:opacity-80 cursor-pointer'>
                    <FaLinkedin className='text-white' />
                </a>
                {/* GitHub */}
                <a href="https://github.com/Shiv317" target="_blank" rel="noopener noreferrer" className='hover:opacity-80 cursor-pointer'>
                    <FaGithub className='text-white' />
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/shivail.a/" target="_blank" rel="noopener noreferrer" className='hover:opacity-80 cursor-pointer'>
                    <FaInstagram className='text-white' />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
