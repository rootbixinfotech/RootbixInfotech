import React, { useEffect, useRef, useState } from 'react'
import logo_white from '../assets/logo_white.png'
import logo from '../assets/logo.svg'
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaAngleUp } from "react-icons/fa";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { services } from '../components/OurServicesBox';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { modules } from '../components/SAPModuleBox';
import { MdMenuOpen } from "react-icons/md";
import { RiMenuFold2Line } from "react-icons/ri";

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react';
import logo_name_white from '../assets/rastainfotech_white.png';
import logo_name_black from '../assets/rastainfotech_black.png';



const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const [isScrolled, setIsScrolled] = useState(false);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);
    const tooltipRef = useRef(null);
    const menuRef = useRef(null);


    const handleScroll = () => {
        if (window.scrollY > 40) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }
    window.addEventListener('scroll', handleScroll)

    const handleMenuClick = (event) => {
        event.stopPropagation();
        setIsTooltipVisible(!isTooltipVisible);
    };

    const handleClickOutside = (event) => {
        if (
            tooltipRef.current && !tooltipRef.current.contains(event.target) &&
            menuRef.current && !menuRef.current.contains(event.target)
        ) {
            setIsTooltipVisible(false);
        }
    };

    useEffect(() => {
        if (isTooltipVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isTooltipVisible]);


    return (
        <>
            {/* For desktop view */}
            <div className={`fixed h-20 z-20 w-full transition-all scroll-smooth hidden md:block`}>
                <div className={`container mx-auto flex justify-center items-center h-full w-full gap-20 border-none ${isTooltipVisible ? "rounded-none" : "rounded-b-2xl"}
                                ${isScrolled ? 'bg-gray-200 text-blue-400 shadow-lg' : 'bg-transparent text-white transition-all scroll-smooth'}`}>
                    <Link to='/'>
                        <div className={`cursor-pointer mr-24 flex flex-row items-center gap-1 ${isScrolled ? "text-black" : "text-white"} w-fit h-fit hover:-translate-y-1 duration-300`}>
                            {isScrolled ?
                                <img src={logo} alt='logo' className='h-16 w-16' />
                                :
                                <img src={logo_white} alt='logo' className='h-16 w-16' />
                            }
                            {isScrolled ?
                                <img src={logo_name_black} alt='logo' className='h-24 w-24' />
                                :
                                <img src={logo_name_white} alt='logo' className='h-8 w-[4.5rem] ml-2.5' />
                            }
                        </div>
                    </Link>
                    <div className='flex gap-6'>
                        <div>
                            <div
                                ref={menuRef}
                                className={`${isScrolled ? 'hover:text-black' : 'hover:text-blue-400'} cursor-pointer`}
                                onClick={handleMenuClick}
                            >
                                What we do {isTooltipVisible ? <FaAngleUp className="inline ml-2" /> : <FaAngleDown className="inline ml-2" />}
                            </div>
                            <div
                                ref={tooltipRef}
                                className={`absolute mt-6 left-1/2 transform -translate-x-1/2 p-4 shadow-lg z-50 w-full transition-all duration-300 ease-in-out ${isTooltipVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                                    } ${isScrolled ? 'bg-gray-200 text-blue-400' : 'bg-black text-white'}`}
                            >
                                {/* Tooltip content */}
                                <h1 className={`font-semibold mb-2 flex flex-row items-center justify-start gap-4 text-4xl pl-10 pt-16 ${isScrolled ? "text-black" : "text-white"}`}>
                                    <p>What we do</p> <BsArrowRightSquareFill className='inline text-blue-400' />
                                </h1>
                                <div className='flex flex-row items-center gap-20'>
                                    <ul className='mt-12'>
                                        <p className='ml-16 mb-6 text-gray-400'>Our Services</p>
                                        {services?.map((service, index) => (
                                            service.title === "OUR SERVICES" ? null : (
                                                <li className='flex flex-row gap-2.5 items-center ml-4 mb-2.5 group' key={index}>
                                                    <div className='transform transition-transform duration-300 group-hover:translate-x-2 text-primary-default'>
                                                        <MdOutlineKeyboardDoubleArrowRight />
                                                    </div>
                                                    <Link to={service.link}>
                                                        <p className={`${isScrolled ? "hover:text-black" : "hover:text-primary-default"} cursor-pointer`}>{service.title}</p>
                                                    </Link>
                                                </li>
                                            )
                                        ))}
                                    </ul>
                                    <ul className='mt-12'>
                                        <p className='ml-16 mb-6 text-gray-400'>Our Modules</p>
                                        {modules?.map((module, index) => (
                                            module.title === "OUR MODULES" ? null : (
                                                <li className='flex flex-row gap-2.5 items-center ml-4 mb-2.5 group' key={index}>
                                                    <div className='transform transition-transform duration-300 group-hover:translate-x-2 text-primary-default'>
                                                        <MdOutlineKeyboardDoubleArrowRight />
                                                    </div>
                                                    <Link to={module.link}>
                                                        <p className={`${isScrolled ? "hover:text-black" : "hover:text-primary-default"} cursor-pointer`}>{module.title}</p>
                                                    </Link>
                                                </li>
                                            )
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={`${isScrolled ? 'hover:text-black' : 'hover:text-blue-400'} cursor-pointer`}>
                            <Link to="/articles">What we think</Link>
                        </div>
                        {/* <div className={`${isScrolled ? 'hover:text-black' : 'hover:text-blue-400'} cursor-pointer`}>
                        Who we are <FaAngleDown className='inline ml-2' />
                     </div> */}
                        <div className={`${isScrolled ? 'hover:text-black' : 'hover:text-blue-400'} cursor-pointer`}>
                            <Link to="/careers">Careers</Link>
                        </div>
                        <div className={`${isScrolled ? 'hover:text-black' : 'hover:text-blue-400'} cursor-pointer`}>
                            <Link to='/trainings'>Trainings</Link>
                        </div>
                        <div className={`${isScrolled ? 'hover:text-black' : 'hover:text-blue-400'} cursor-pointer`}>
                            <Link to='/docs'>Documents</Link>
                        </div>
                        <div className={`${isScrolled ? 'hover:text-black' : 'hover:text-blue-400'} cursor-pointer`}>
                            <Link to='/servicepage'>Services</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* For mobile view */}
            <div className='md:hidden fixed h-20 z-20 w-full transition-all scroll-smooth bg-gray-200 text-blue-400 rounded-b-2xl flex items-center justify-between px-4'>
                <Link to='/'>
                    <div className='cursor-pointer flex flex-row items-center gap-2'>
                        <img src={logo} alt='logo' className='h-16 w-16' />
                        <p className='text-black text-lg'>RASTA INFOTECH</p>
                    </div>
                </Link>
                <div className='border border-gray-400 rounded-2xl hover:bg-gray-300 p-2' onClick={onOpen}>
                    <MdMenuOpen className='text-black text-3xl' />
                </div>
            </div>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent className='h-full'>
                    <DrawerCloseButton />
                    <DrawerHeader><img src={logo} alt='logo' className='h-16 w-16' /></DrawerHeader>
                    <DrawerBody className='overflow-y-auto'>
                        <nav className='flex flex-col gap-4'>
                            <Link to="/" onClick={onClose}>Home</Link>
                            <Link to="/articles" onClick={onClose}>What we think</Link>
                            <Link to="/careers" onClick={onClose}>Careers</Link>
                            <Link to='/trainings' onClick={onClose}>Trainings</Link>
                            <Link to='/docs' onClick={onClose}>Documents</Link>
                            <div onClick={handleMenuClick} className='cursor-pointer'>
                                What we do {isTooltipVisible ? <FaAngleUp className="inline ml-2" /> : <FaAngleDown className="inline ml-2" />}
                            </div>
                            {isTooltipVisible && (
                                <div ref={tooltipRef} className='mt-4'>
                                    <div>
                                        <h1 className='font-semibold mb-2 text-2xl'>What we do</h1>
                                        <div className='flex flex-col gap-2'>
                                            <ul>
                                                <p className='mb-2 text-gray-400'>Our Services</p>
                                                {services?.map((service, index) => (
                                                    service.title === "OUR SERVICES" ? null : (
                                                        <li key={index} className='mb-2'>
                                                            <Link to={service.link} onClick={onClose} className='text-blue-400 hover:text-black'>{service.title}</Link>
                                                        </li>
                                                    )
                                                ))}
                                            </ul>
                                            <ul>
                                                <p className='mb-2 text-gray-400'>Our Modules</p>
                                                {modules?.map((module, index) => (
                                                    module.title === "OUR MODULES" ? null : (
                                                        <li key={index} className='mb-2'>
                                                            <Link to={module.link} onClick={onClose} className='text-blue-400 hover:text-black'>{module.title}</Link>
                                                        </li>
                                                    )
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </nav>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>


        </>
    )
}

export default NavBar