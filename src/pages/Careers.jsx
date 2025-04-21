import React, { useState } from 'react';
import careers from '../assets/careers.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import ConsultationBox from '../components/ConsultationBox';
import { Input, HStack, Stack, InputGroup, InputLeftAddon } from '@chakra-ui/react'

const Careers = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className='bg-black w-full h-20'></div>
      <div className='h-[380px] w-full relative'>
        <div
          style={{ backgroundImage: `url(${careers})` }}
          className='h-full w-full bg-cover bg-center relative'
        >
        </div>
      </div>

      <div>
        <div className='w-full md:h-[35px] md:p-0 p-2 bg-[#4B4B4B] text-white font-bold'>
          <div className='h-full w-[40%] flex flex-row items-center justify-center gap-2'>
            <Link to="/"><p className='uppercase'>HOME</p></Link>
            <p>/</p>
            <Link to="/careers"><p className='text-primary-default uppercase'>Career</p></Link>
          </div>
        </div>
      </div>

      <div className='h-full w-full text-[#3C3C3C] font-semibold flex flex-col items-center'>
        <div className='w-full h-[170px] flex flex-col items-center justify-center text-4xl font-serif'>Career - Rasta Infotech Pvt. Ltd.</div>
        <div className='min-h-36 w-full'>
          <div className='flex flex-col items-center justify-center h-full'>
            <div className='w-[70%] flex flex-row text-xl justify-between'>
              <div className={`w-[49.5%] flex flex-col items-center rounded-t-lg ${toggle ? "bg-gray-200" : "bg-primary-default"} p-2 cursor-pointer duration-200`} onClick={() => setToggle(false)}><h1>JOB OPENING</h1></div>
              <div className={`w-[49.5%] flex flex-col items-center rounded-t-lg ${toggle ? "bg-primary-default" : "bg-gray-200"} p-2 cursor-pointer duration-200`} onClick={() => setToggle(true)}><h1>UPLOAD CV</h1></div>
            </div>
            <div className='md:w-[71%] min-w-[71%] flex flex-row text-xl justify-between border border-gray-400 min-h-24 rounded-lg border-t-0 md:p-0'>
              {toggle ?
                (
                  <div className='m-8 w-full'>
                    <h2 className='mb-12'>Upload Your CV</h2>
                    <form>
                      <Stack spacing={6}>
                        <HStack>
                          <Input placeholder='Name*' size='md' required />
                          <InputGroup>
                            <InputLeftAddon>+91</InputLeftAddon>
                            <Input type='tel' placeholder='Contact Number*' required />
                          </InputGroup>
                        </HStack>
                        <HStack>
                          <Input placeholder='Email*' size='md' required />
                          <InputGroup>
                            <Input type='text' placeholder='Total Experience*' required />
                          </InputGroup>
                        </HStack>
                        <Input placeholder='Applying For*' size='md' required />
                        <textarea className='border border-gray-200 focus:border-blue-500 outline-none p-2 pl-4' placeholder='Message'>
                        </textarea>
                        <HStack>
                          <label className='text-base font-normal'>Upload Your CV</label>
                          <input type='file' className='border border-gray-200 focus:border-blue-500 outline-none p-2 pl-4 text-base font-normal' required />
                        </HStack>
                        <button className='bg-primary-default text-white font-bold py-2.5 px-4 mt-5 rounded-md md:w-[20%] hover:bg-gray-400'>Submit</button>
                      </Stack>
                    </form>

                  </div>
                ) :
                (
                  <div className='w-full flex flex-col items-center'>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-20'>
        <ConsultationBox />
      </div>
      <div className=''>
        <Footer />
      </div>
    </>
  )
}

export default Careers