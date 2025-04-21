import React from 'react';
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { TbSettingsCheck } from "react-icons/tb";
import sapsilverpartnerimg from '../assets/sapsilverpartnerimg.png';


const Page4 = () => {
    return (
        <div className='bg-white py-10 md:h-80 flex flex-col items-center justify-center gap-2'>
            <div className='font-serif text-4xl text-blue-900 font-semibold'>Collaborate</div>
            <div className='-mt-2 font-serif text-4xl text-blue-400 font-semibold'>With Trust</div>
            <div className='md:w-1/3 text-wrap text-center text-[#3C3C3C] font-semibold text-lg'>We help you with SAP Transportation Management Solutions by bridging gaps in processes and leveraging technology to help you elevate your business</div>
            <div className='flex flex-row items-center justify-center gap-8 mt-6'>
                <div className='flex flex-row items-center justify-center w-[50%] gap-2'>
                    <div><AiOutlineSafetyCertificate style={{fontSize: '40px'}} className='text-primary-default'/></div>
                    <div>
                        SAP Certified
                        Consultants
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center w-[50%] gap-2'>
                    <div><TbSettingsCheck style={{fontSize: '40px'}} className='text-primary-default'/></div>
                    <div>
                        21+ Successful Projects with High-end clients
                    </div>
                </div>
                {/* <div className='flex flex-row items-center justify-center w-[24%] gap-2'>
                    <div className='h-10 w-[5rem]'><img src={sapsilverpartnerimg} alt="" /></div>
                    <div>
                        We are a SAP Silver Partner
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Page4