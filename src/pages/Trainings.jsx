import React, { useState } from 'react';
import trainings from '../assets/trainings_header.jpg';
import { Link } from 'react-router-dom';
import trainings_img1 from '../assets/trainings_img1.jpg';
import trainings_img2 from '../assets/trainings_img2.jpg';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react';
import { Input, HStack, Stack, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import Contact from '../components/Contact';
import ConsultationBox from '../components/ConsultationBox';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import sidefillerimg from '../assets/sidefillerimg.svg';
import Global2 from "../assets/Global 2.svg"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Companies from '../components/Companies.jsx';


const Trainings = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [name, setName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [validPhoneNumber, setValidPhoneNumber] = useState(true);

    const validatePhoneNumber = (phone, country) => {
        // const phoneRegex = /^\d{10}$/;
        // return phoneRegex.test(phone);
        if (country && country.format) {
            const requiredLength = (country.format.match(/\./g) || []).length;
            if (phone.length === requiredLength) {
                setContactNumber(phone);
                return true;
            }
        }
        return false;
    };

    const handleChange = (value, country) => {
        setPhoneNumber(value);
        setValidPhoneNumber(validatePhoneNumber(value, country));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !contactNumber || !email || !message) {
            alert('Please fill out all required fields.');
            return;
        }

        onClose();
    };
    return (
        <>
            <div className='bg-[#5249BD] w-full md:h-24 h-20'></div>
            <div className='md:h-[360px] w-full relative h-[680px]'>
                <div
                    // style={{ backgroundImage: `url(${trainings})` }}
                    style={{ backgroundColor: `#5249BD` }}
                    className='h-full w-full bg-cover bg-center relative'
                >
                    {/* <div className='absolute inset-0 bg-black bg-opacity-65'></div> */}
                    <div className='h-full w-full flex md:flex-row flex-col'>
                        <div className='h-full md:w-1/2 w-full flex flex-col items-center'>
                            <div className='flex flex-col text-white justify-center gap-8 h-full w-[85%] items-start'>
                                <h1 className='text-3xl font-serif'>We are Training Academy</h1>
                                <p className='text-xl font-sans font-medium'>Join Rasta Infotech, where education meets experience, and success becomes a reality. Your learning journey starts here!</p>
                                <button className='bg-[#9966CC] hover:bg-purple-400 px-12 py-2 rounded-2xl text-sm' onClick={onOpen}>Join for free</button>
                            </div>
                        </div>
                        <div className='h-full md:w-1/2 w-full flex flex-col items-center'>
                            <div className='w-[85%] h-full'>
                                <img src={Global2} alt="" className="w-full h-full" />
                                <a href="https://www.linkedin.com/company/rastainfotech/about/" target='_blank'>
                                    <div className='hidden lg:block absolute top-7 right-80 text-3xl p-2 bg-white rounded-lg hover:-translate-y-2 duration-300'>
                                        <FaLinkedin className='rounded-lg text-blue-500' />
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/company/rastainfotech/about/" target='_blank'>
                                    <div className='hidden lg:block absolute top-28 right-[32rem] text-3xl p-2 bg-white rounded-lg hover:-translate-y-2 duration-300'>
                                        <FaInstagram className='rounded-lg text-[#FA6488]' />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5249BD" fill-opacity="1" d="M0,96L120,112C240,128,480,160,720,165.3C960,171,1200,149,1320,138.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
                </div>
            </div>

            <div className='w-full h-fit bg-white p-4 pt-52'>
                <div className='flex flex-col items-center justify-center w-full h-fit gap-2'>
                    <h1 className='uppercase text-primary-default'>Training</h1>
                    <h2 className='text-[#4B4B4B] font-bold text-3xl'>SAP Training to Ensure your Satisfaction</h2>
                </div>
                <div className='w-full flex flex-col items-center justify-center text-[#3C3C3C] opacity-90 text-base mt-16'>
                    <div className='flex flex-col items-center justify-center gap-2 w-[80%]'>
                        <p className='mb-2'>Within continuously changing and highly competitive environment, companies are subject to adjustments that make their survival difficult. To ensure it, one of the areas to <strong>focus is the training</strong>.</p>
                        <ul className='list-square w-[96%] flex flex-col gap-2'>
                            <li>
                                Rasta Infotech is committed to <strong>quality training in SAP solutions</strong> in the several functional modules in SAP ERP and SAP S/4HANA. We offers specific trainings in SAP solutions in the modules of finance, controlling and logistics, and also ABAP.</li>
                            <li>Our professionals <strong>facilitate the adaptation of users</strong> to the SAP solution implemented and help to optimize the use of the system, preventing the change from negatively affecting the performance of the company.</li>
                            <li>The training can be done <strong>on-site or through online sessions.</strong></li>
                        </ul>
                    </div>
                </div>

                <div className='flex md:flex-row flex-col items-center justify-center gap-16 mt-20 mb-10'>
                    <div className='md:w-[421px] w-[95%] relative'>
                        <div className='w-full border border-gray-200 rounded-lg'>
                            <div className='md:w-[420px] w-[100%]'>
                                <img src={trainings_img1} alt="" className='rounded-t-lg' />
                            </div>
                            <div className='w-full flex flex-col items-center  justify-center'>
                                <div className='w-[90%] flex flex-col items-center gap-2 mt-6'>
                                    <h1 className='text-2xl text-[#3C3C3C] font-bold flex items-center'>Users Training</h1>
                                    <p>A wide variety of courses are offered for finance and logistics modules in SAP ERP and S/4HANA:</p>
                                    <ul className='list-square w-[96%] flex flex-col gap-2 mb-8'>
                                        <li><strong>Theory sessions</strong> to understand the concepts and the flow of existing processes in SAP</li>
                                        <li><strong>Practice sessions</strong> to assimilate the processes within the system</li>
                                        <li><strong>On-site support</strong> to resolve any questions that may arise while using the SAP system</li>
                                        <li><strong>Sessions for advanced users</strong> who wish to improve the potential of SAP</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <button className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 bg-primary-default font-bold text-white text-sm py-2 px-4 rounded hover:bg-white hover:text-primary-default hover:border-2 hover:border-primary-default' onClick={onOpen}>
                                MORE DETAILS
                            </button>
                        </div>
                    </div>
                    <div className='md:w-[421px] w-[95%] relative md:mb-0 mb-10'>
                        <div className='w-full border border-gray-200 rounded-lg'>
                            <div className='md:w-[420px] w-[100%]'>
                                <img src={trainings_img2} alt="" className='rounded-t-lg' />
                            </div>
                            <div className='w-full flex flex-col items-center  justify-center'>
                                <div className='w-[90%] flex flex-col items-center gap-2 mt-6'>
                                    <h1 className='text-2xl text-[#3C3C3C] font-bold flex items-center'>Consultants Training</h1>
                                    <p>Rasta Infotech offers specific training for consultants or developers who wish to improve their knowledge of any area. Among the courses offered, the following stand out:</p>
                                    <ul className='list-square w-[96%] flex flex-col gap-2 mb-8'>
                                        <li>Customizing courses in the following standard <strong>finance modules:</strong> AA, AP, AR, TR, CO and PS</li>
                                        <li>Customizing courses in the following standard <strong>logistics modules:</strong> MM and SD</li>
                                        <li>Technical courses on <strong>ABAP programming</strong> and user role and authorization management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <button className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 bg-primary-default font-bold text-white text-sm py-2 px-4 rounded hover:bg-white hover:text-primary-default hover:border-2 hover:border-primary-default' onClick={onOpen}>
                                MORE DETAILS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-64 w-full bg-white py-4'>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='flex flex-row gap-1'>
                        <p className='font-sans'>Our alumni's are working in</p><p className='text-primary-default font-bold'>100+</p><p className='font-sans'>best organisations</p>
                    </div>
                    <div className='font-serif font-semibold text-xl'>Top Organisations</div>
                </div>
                <div className=''>
                    <Companies />
                </div>
            </div>
            <div className=''>
                <Testimonials />
            </div>
            <div className=''>
                <ConsultationBox />
            </div>
            <div className=''>
                <Footer />
            </div>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <div className='text-primary-default text-3xl font-bold mx-auto'>Contact Us</div>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit} className='mb-4'>
                            <Stack spacing={3}>
                                <Input
                                    placeholder='Name*'
                                    size='md'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <div className='w-full'>
                                    <PhoneInput
                                        country={'in'}
                                        placeholder='Contact Number*'
                                        value={phoneNumber}
                                        onChange={handleChange}
                                        isValid={validPhoneNumber}
                                        enableSearch={true}
                                        inputProps={{
                                            required: true,
                                        }}
                                        containerStyle={{ width: '100%' }}
                                        inputStyle={{ width: '100%' }}
                                    />
                                </div>
                                <Input
                                    placeholder='Email*'
                                    size='md'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <textarea
                                    className='border border-gray-200 focus:border-blue-500 outline-none p-2 pl-4'
                                    placeholder='Message*'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                >
                                </textarea>
                                <button
                                    type='submit'
                                    className='bg-primary-default text-white font-bold py-2.5 px-4 mt-5 rounded-md hover:bg-gray-400'
                                >
                                    Submit
                                </button>
                            </Stack>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Trainings