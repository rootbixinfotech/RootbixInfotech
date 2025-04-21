import { Icon } from '@chakra-ui/react';
import React from 'react';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';
import { Link } from 'react-router-dom';

const Page3 = () => {
    const servicerow1 = [
        {
            title: 'SAP Consulting Services',
            desc: 'Rasta Infotech offers an array of services from experienced SAP technology consultants. Our team of experts ensures efficient performance...',
            Icon: icon1,
            link: '/services/sap-consulting',
        },
        {
            title: 'SAP Implementation & Development Services',
            desc: 'As an experienced SAP service provider, Our team offers SAP custom development services that can help you achieve your unique business...',
            Icon: icon2,
            link: '/services/sap-implementation',
        },
        {
            title: 'SAP Managed Services & Support',
            desc: 'Rasta Infotech will cover everything you need to know about SAP Managed Services, including what it is, why it is important...',
            Icon: icon3,
            link: '/services/sap-managed',
        }
    ]
    const servicerow2 = [
        {
            title: 'SAP Enterprise Digital Transformation',
            desc: "Rasta Infotech Inc A SAP consulting company can play a pivotal role in guiding an organization's digital transformation journey by leveraging...",
            Icon: icon4,
            link: '/services/sap-enterprise',
        },
        {
            title: 'SAP Data Migration & Upgrade Services',
            desc: 'SAP data migration is the process of moving data from one SAP system to another. This can be a complex task, but it is essential for businesses...',
            Icon: icon5,
            link: '/services/sap-data-migration',
        },
        {
            title: 'SAP Staffing Services',
            desc: 'Rasta Infotech PVT. LTD. is a leading provider of SAP staffing solutions across various modules. Our expert team of SAP professionals...',
            Icon: icon6,
            link: '/services/sap-staffing',
        }
    ]
    return (
        <div className='md:h-fit bg-white text-black font-serif'>
            <div className='w-full h-2/4 md:flex flex-row pt-8 hidden'>
                <div className='flex flex-row w-[30%] h-full justify-center items-center gap-2 text-4xl font-bold font-serif'>
                    <h1>OUR</h1>
                    <h1 className='text-primary-default'>SERVICES</h1>
                </div>
                <div className='flex flex-row items-center justify-center h-10'>
                    <div className='border border-primary-default h-full'></div>
                </div>
                <div className='w-[68%] flex flex-row justify-start items-center'>
                    <p className='w-[70%] text-gray-600 ml-16 font-serif' style={{ letterSpacing: "0.5px" }}>
                        At Rasta Infotech a <strong>SAP supply chain consulting company/Firm</strong>, we pride ourselves on providing an extensive array of <strong>SAP Digital Supply Chain Management services</strong>. Our offerings encompass everything from Development, Integration, Migration, Maintenance, to Support Services for SAP Digital Logistics, SAP Digital Supply Chain, and Staffing. By availing our services, businesses can elevate their supply chain operations and bolster their overall operational efficiency. Our team of seasoned experts boasts a track record of success in assisting companies in enhancing their supply chain operations. Connect with us today to discover how we can assist you in attaining your business objectives.
                    </p>
                </div>
            </div>
            {/* mobile view */}
            <div className='md:hidden block h-fit pt-24'>
                <div className='w-full h-[350px] flex flex-col items-center justify-center mt-8 p-2 gap-2'>
                    <div className='flex flex-row w-[80%] justify-center items-center gap-2 text-4xl font-bold font-serif'>
                        <h1>OUR</h1>
                        <h1 className='text-primary-default'>SERVICES</h1>
                    </div>
                    <div className='w-[20%] border border-blue-400'></div>
                    <p className='w-[85%] text-gray-600 font-serif' style={{ letterSpacing: "0.5px" }}>
                        At Rasta Infotech a <strong>SAP supply chain consulting company/Firm</strong>, we pride ourselves on providing an extensive array of <strong>SAP Digital Supply Chain Management services</strong>. Our offerings encompass everything from Development, Integration, Migration, Maintenance, to Support Services for SAP Digital Logistics, SAP Digital Supply Chain, and Staffing. By availing our services, businesses can elevate their supply chain operations and bolster their overall operational efficiency. Our team of seasoned experts boasts a track record of success in assisting companies in enhancing their supply chain operations. Connect with us today to discover how we can assist you in attaining your business objectives.
                    </p>
                </div>
            </div>

            <div className='w-full md:h-[80vh] md:mt-10 mt-28'>
                <div className='flex flex-col justify-center items-center h-full w-full gap-10'>
                    <div className='flex md:flex-row flex-col gap-8 items-center justify-center'>
                        {servicerow1.map((service, index) => (
                            <div className='w-96 h-60 border border-gray-400 flex flex-col hover:bg-blue-400 transition-colors duration-500 rounded-2xl cursor-pointer' key={index} onClick={() => console.log("outer clicked")}>
                                <Link to={service.link}>
                                    <div className='flex flex-row h-[37%] items-center'>
                                        <div className='rounded-full h-20 w-20 flex flex-col items-center justify-center mr-5 ml-2'>
                                            <img src={service.Icon} className='h-12 w-12' alt="" />
                                        </div>
                                        <h1 className='text-xl font-semibold'>{service.title}</h1>
                                    </div>
                                    <div className='mt-4 w-full flex flex-col items-center justify-center'>
                                        <p className='text-gray-600 w-[85%]'>
                                            {service.desc}
                                        </p>
                                    </div>
                                    <p className='ml-8 text-blue-900 hover:underline transition cursor-pointer' onClick={() => console.log("inner clicked")}>Read More</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className='flex md:flex-row flex-col gap-8 items-center justify-center'>
                        {servicerow2.map((service, index) => (
                            <div className='w-96 h-60 border border-gray-400 flex flex-col hover:bg-blue-400 transition-colors duration-500 rounded-2xl cursor-pointer' key={index}>
                                <Link to={service.link}>
                                    <div className='flex flex-row h-[37%] items-center'>
                                        <div className='rounded-full h-20 w-20 flex flex-col items-center justify-center mr-5 ml-2'>
                                            <img src={service.Icon} className='h-12 w-12' alt="" />
                                        </div>
                                        <h1 className='text-xl font-semibold'>{service.title}</h1>
                                    </div>
                                    <div className='mt-4 w-full flex flex-col items-center justify-center'>
                                        <p className='text-gray-600 w-[85%]'>
                                            {service.desc}
                                        </p>
                                    </div>
                                    <p className='ml-8 text-blue-900 hover:underline transition cursor-pointer'>Read More</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page3