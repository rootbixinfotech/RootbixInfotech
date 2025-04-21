import React, { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
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
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ConsultationBox = () => {
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
            return phone.length === requiredLength;
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
            {/* desktop view */}
            <div className='w-full h-[170px] md:flex flex-col items-center bg-primary-default hidden'>
                <div className='w-[80%] h-full flex flex-row'>
                    <div className='w-[78%] h-full flex flex-col items-start justify-center gap-2'>
                        <h1 className='text-3xl font-bold'>Get Free Consultation</h1>
                        <p className='font-semibold text-white'>As your trusted SAP consulting company based in India, Rasta Infotech provides a comprehensive suite of services within the realm of SAP Digital Logistics and SAP Digital Supply Chain. Our services encompass Implementation, Development, Integration, Migration, Maintenance, Support, Industrial Training and Staffing solutions. Count on us to provide reliable and effective services tailored to align seamlessly with your business requirements.</p>
                    </div>
                    <div className='w-[22%] h-full flex flex-col items-center justify-center'>
                        <button className='bg-black text-white p-2.5 rounded-md hover:bg-white hover:text-black duration-300 font-semibold'
                            onClick={onOpen}
                        >
                            CONTACT NOW
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile view */}
            <div className='w-full h-40 mt-20 flex flex-col items-center bg-primary-default md:hidden'>
                <div className='w-[80%] h-full flex flex-col items-center justify-center gap-4'>
                    <div className='h-fit flex flex-col items-start justify-center gap-2'>
                        <h1 className='text-3xl font-bold'>Get Free Consultation</h1>
                    </div>
                    <div className='h-fit flex flex-col items-center justify-center'>
                        <button className='bg-black text-white p-2.5 rounded-md hover:bg-white hover:text-black duration-300 font-semibold'
                            onClick={onOpen}
                        >
                            CONTACT NOW
                        </button>
                    </div>
                </div>
            </div>

            {/* modal */}
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

export default ConsultationBox