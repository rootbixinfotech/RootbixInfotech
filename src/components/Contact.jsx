// import React, { useEffect, useState } from "react";
// import { Input, HStack, Stack, InputGroup, InputLeftAddon } from '@chakra-ui/react';
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const Contact = () => {
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [validPhoneNumber, setValidPhoneNumber] = useState(true);
//     const handleChange = (event) => {
//         console.log(event);
//         const phone = event;
//         setPhoneNumber(phone);
//         setValidPhoneNumber(validatePhoneNumber(phone));
//     }
//     const validatePhoneNumber = (phone) => {
//         const phoneRegex = /^\d{10}$/;
//         return phoneRegex.test(phone);
//     }
//     useEffect(() => {
//         console.log(validPhoneNumber);
//     }, [validPhoneNumber])

//     return (
//         <div className='flex flex-col gap-4 h-full w-[80] items-center bg-white pb-10'>
//             <div className='text-primary-default text-3xl font-bold mx-auto'>Contact Us</div>
//             <form className='md:p-0 p-2'>
//                 <Stack spacing={3}>
//                     <HStack>
//                         <Input placeholder='Name*' size='md' required />
//                         {/* <InputGroup>
//                             <InputLeftAddon>+91</InputLeftAddon>
//                             <Input type='tel' placeholder='Contact Number*' required/>
//                         </InputGroup> */}
//                         <PhoneInput
//                             country={'in'}
//                             placeholder='Contact Number*'
//                             value={phoneNumber}
//                             onChange={handleChange}
//                             enableSearch={true}
//                             inputProps={{
//                                 required: true,
//                                 // valid: validPhoneNumber
//                             }}  
//                         />
//                     </HStack>
//                     <Input placeholder='Email*' size='md' required />
//                     <textarea className='border border-gray-200 focus:border-blue-500 outline-none p-2 pl-4' placeholder='Message*' required>
//                     </textarea>
//                     <button className='bg-primary-default text-white font-bold py-2.5 px-4 mt-5 rounded-md md:w-[20%] hover:bg-gray-400'>Submit</button>
//                 </Stack>
//             </form>
//         </div>
//     )
// }

// export default Contact


import React, { useState } from "react";
import { Input, Stack, Select } from '@chakra-ui/react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [validPhoneNumber, setValidPhoneNumber] = useState(true);

    const validatePhoneNumber = (phone, country) => {
        if (country && country.format) {
            const requiredLength = (country.format.match(/\./g) || []).length;
            return phone.length === requiredLength;
        }
        return false;
    };

    const handleChange = (value, country) => {
        setPhoneNumber(value);
        setValidPhoneNumber(validatePhoneNumber(value, country));
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='bg-white p-6 md:p-8 rounded-lg shadow-lg w-96'>
                <h2 className='text-center text-lg font-bold mb-4'>Book a free Call Back</h2>
                <form className='space-y-4'>
                    <Input placeholder='Full Name' size='md' required className='border border-gray-300 p-2 rounded-md w-full' />
                    <Input placeholder='Email id' size='md' required className='border border-gray-300 p-2 rounded-md w-full' />
                    
                    {/* Phone Input with Clean UI */}
                    <div className='relative w-full'>
                        <PhoneInput
                            country={'in'}
                            placeholder='Phone No'
                            value={phoneNumber}
                            onChange={handleChange}
                            isValid={validPhoneNumber}
                            enableSearch={true}
                            inputProps={{ required: true }}
                            inputClass='w-full p-2 border border-gray-300 rounded-md outline-none'
                        />
                    </div>

                    <Select placeholder='Select Our Services' required className='border border-gray-300 p-2 rounded-md w-full'>
                        <option value='WEBSITE DESIGNING' className="text-sm">WEBSITE DESIGNING</option>
                        <option value='WEBSITE DEVELOPMENT' className="text-sm">WEBSITE DEVELOPMENT</option>
                        <option value='DIGITAL MARKETING' className="text-sm">DIGITAL MARKETING</option>
                        <option value='SEO' className="text-sm">SEO</option>
                        <option value='SAP SERVICES' className="text-sm">SAP SERVICES</option>
                        <option value='SALESFORCE SERVICES'className="text-sm">SALESFORCE SERVICES</option>
                        <option value='LOGO DESIGN'className="text-sm">LOGO DESIGN</option>
                        <option value='RECRUITMENT AND HIRING'className="text-sm">RECRUITMENT AND HIRING</option>
                        <option value='CORPORATE IT TRAININGS'className="text-sm">CORPORATE IT TRAININGS</option>
                        <option value='LEARNING MANAGEMENT SYSTEM'className="text-sm">LEARNING MANAGEMENT SYSTEM</option>
                        <option value='SYSTEM INTEGRATION'className="text-sm">SYSTEM INTEGRATION</option>


                    </Select>
                    <Input placeholder='Enter City' size='md' required className='border border-gray-300 p-2 rounded-md w-full' />
                    <textarea className='border border-gray-300 p-2 rounded-md w-full h-24 resize-none' placeholder='Any Query' required />
                    <button
                        className={`w-full py-3 text-white font-bold rounded-md ${validPhoneNumber ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
                        disabled={!validPhoneNumber}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
