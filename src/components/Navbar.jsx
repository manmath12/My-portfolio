import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/logo.png';
import { navItems } from '../constants'; // Update your navItems to include 'href'

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
            <div className="container px-4 mx-auto relative text-sm">
                <div className='flex justify-between items-center '>
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-12 w-16 mr-2" src={logo} alt='logo' />
                        <span className='text-xl tracking-tight'>manmathcode.com</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12 text-lg'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <ScrollLink
                                    to={item.href}
                                    smooth={true}
                                    duration={500}
                                    offset={-70} // Adjust based on your header height
                                    className="cursor-pointer"
                                >
                                    {item.label}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                    <div className='hidden lg:flex justify-center space-x-12 items-center'>
                        <a href='mailto:ashturemanoj@gmail.com' className='py-2 px-2 border rounded-md'>
                            Email
                        </a>
                        <a href='./resume.pdf' className='bg-gradient-to-r from-purple-500 to-purple-20 py-2 px-3 rounded-md' target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4 ">
                                    <ScrollLink
                                        to={item.href}
                                        smooth={true}
                                        duration={500}
                                        offset={-70} // Adjust based on your header height
                                        className="cursor-pointer"
                                        onClick={toggleNavbar} // Close mobile drawer on click
                                    >
                                        {item.label}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href='#' className='py-2 px-2 border rounded-md'>
                                Sign In
                            </a>
                            <a href='#' className='bg-gradient-to-r from-purple-500 to-purple-20 py-2 px-3 rounded-md'>
                                Create an account
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
