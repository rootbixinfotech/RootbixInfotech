import React from 'react'
import logo from "../assets/logo_white.png"
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { services } from './OurServicesBox';
import { modules } from './SAPModuleBox';
import { FaHouse } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



const Footer = () => {
    return (
        <>
            {/* desktop view */}
            <div className='w-full md:h-[380px] h-fit bg-black text-white flex flex-col items-center '>
                <div className='grid md:grid-cols-4 grid-rows-4 w-[90%] h-[88%]'>
                    <div className='flex flex-col justify-center gap-2 items-center h-fit mt-6'>
                        <div className='w-full flex items-center justify-center mb-2'>
                            <Link to='/'>
                                <img src={logo} alt='logo' className='h-28 w-28 hover:-translate-y-2 duration-300' />
                            </Link>
                        </div>
                        <h1 className='font-bold text-lg'>Few Words About Rasta Infotech</h1>
                        <p className='ml-2'>We are passionate about delivering the best SAP services and training for companies that want to improve their performance.</p>
                        <div className='text-primary-default flex flex-row gap-2 text-xl mt-2'>
                            <a href="https://www.linkedin.com/company/rastainfotech/about/" target='_blank'>
                                <FaLinkedinIn className='hover:text-white cursor-pointer' />
                            </a>
                            <TfiYoutube className='hover:text-white cursor-pointer' />
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-6'>
                        <h1 className='mt-6 text-2xl font-bold ml-10'>SAP Modules</h1>
                        <ul className=''>
                            {modules?.map((module, index) => (
                                module.title === "SAP MODULES" ? null : (
                                    <li className='flex flex-row gap-2.5 items-center ml-4 mb-2.5 group' key={index}>
                                        <div className='transform transition-transform duration-300 group-hover:translate-x-2 text-primary-default'>
                                            <MdOutlineKeyboardDoubleArrowRight />
                                        </div>
                                        <Link to={module.link}>
                                            <p className='hover:text-primary-default cursor-pointer'>{module.title}</p>
                                        </Link>
                                    </li>
                                )
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col items-start gap-6'>
                        <h1 className='mt-6 text-2xl font-bold ml-10'>What We Do</h1>
                        <ul className=''>
                            {services?.map((service, index) => (
                                service.title === "OUR SERVICES" ? null : (
                                    <li className='flex flex-row gap-2.5 items-center ml-4 mb-2.5 group' key={index}>
                                        <div className='transform transition-transform duration-300 group-hover:translate-x-2 text-primary-default'>
                                            <MdOutlineKeyboardDoubleArrowRight />
                                        </div>
                                        <Link to={service.link}>
                                            <p className='hover:text-primary-default cursor-pointer'>{service.title}</p>
                                        </Link>
                                    </li>
                                )
                            ))}
                        </ul>
                    </div>
                    <div className=''>
                        <h1 className='mt-6 text-2xl font-bold ml-10'>Get In Touch</h1>
                        <div>
                            <div className='flex flex-row items-center w-full mt-6 border-b border-gray-400 pb-6'>
                                <FaHouse className='text-primary-default text-2xl w-[20%]' />
                                <p className='text-lg w-[80%] pr-2'><strong>Office Address</strong> : 23 2nd Cros, Near Malnad, Coaching Centr MHR Layout, Bangalore North, Karnataka, India, 560090</p>
                            </div>
                            <div className='flex flex-row items-center w-full mt-4'>
                                <MdEmail className='text-primary-default text-2xl w-[20%]' />
                                <p className='text-lg w-[80%] pr-2'>
                                    <a href="mailto:info@rastainfotech.com">info@rastainfotech.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[12%] border-t border-gray-400 flex flex-row items-center justify-center'>
                    <div className='flex md:flex-row flex-col w-[90%] justify-between'>
                        <div>Copyright © 2024 | All rights reserved | Rasta Infotech Pvt. Ltd.</div>
                        <div className='flex flex-row gap-2 text-primary-default'>
                            <Link to="/privacy-policy">
                                <p className='hover:text-white'>Privacy Policy</p>
                            </Link> | <Link to="/terms-and-conditions">
                                <p className='hover:text-white'>Terms & Conditions</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer