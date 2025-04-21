import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const services = [
    { title: "Business Process Services", description: "Outsource, manage and automate business processes", link: "/business-process" },
    { title: "Cloud", description: "Accelerate your journey, 2x faster than industry standard", link: "/cloud" },
    { title: "Data & AI", description: "Leverage data to drive intelligent business outcomes", link: "/data-ai" },
    { title: "Digital IT Operations", description: "Run, optimize and secure applications and infrastructure", link: "/digital-it" },
    { title: "Digital & Software", description: "Deliver powerful software solutions to your users", link: "/digital-software" },
    { title: "Enterprise Platform Services", description: "Enable scalable and secure enterprise solutions", link: "/enterprise-platform" },
];

const offerings = [
    "Application Services", "Cybersecurity", "Digital Workplace", "Enterprise Automation",
    "Generative AI", "Global Capability Centers", "Sustainability Services", "Testing"
];

const ServicesPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-blue-700 mb-10">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <Link to={service.link} key={index} className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition flex justify-between items-center hover:bg-blue-100 hover:text-white">
                            <div>
                                <h2 className="text-xl font-semibold text-blue-600">{service.title}</h2>
                                <p className="text-gray-600 mt-2">{service.description}</p>
                            </div>
                            <div className="bg-gray-300 p-2 rounded-full">
                                <FaChevronRight className="text-blue-700" />
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Offerings</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {offerings.map((offering, index) => (
                            <div key={index} className="bg-blue-50 p-3 rounded-lg text-blue-600 text-center font-medium hover:bg-blue-100 cursor-pointer flex justify-between items-center">
                                {offering}
                                {/* <div className="bg-gray-300 p-2 rounded-full">
                                    <FaChevronRight className="text-gray-700" />
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
