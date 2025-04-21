import React, { useEffect } from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { usePath } from '../contexts/PathContext';

const ServicesSidebar = ({ services }) => {

    const path = usePath();

    return (
        <div className='w-[380px] h-[350px]'>
            {services?.map((service, index) => {
                return (
                    <Link to={service.link} key={index}>
                        <div
                            className={`w-full h-[14.3%] flex flex-row items-center gap-2 pl-4 border-b border-gray-400
                            ${service.title === "OUR SERVICES" || service.title === "SAP MODULES" ? "justify-center bg-primary-default font-bold text-lg cursor-default text-white" : "justify-start bg-white font-normal text-gray-600 text-base cursor-pointer hover:text-white border-x "}
                            ${path.trim() === service.link.trim() ? "text-primary-default" : ""} hover:bg-primary-default transition-colors `}
                        >
                            {(service.title === "OUR SERVICES" || service.title === "SAP MODULES") ? null : <FaArrowCircleRight />}
                            <p>{service.title}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default ServicesSidebar