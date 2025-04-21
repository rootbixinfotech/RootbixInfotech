import React from 'react'
import fillervid from '../assets/fillervid.mp4'
import fillervidmobile from '../assets/fillervid-mobile.gif'

const Page2 = () => {
  return (
    <>

      {/* desktop view */}
      <div className=' text-black w-full h-[200px] bg-[#FBFCFC] md:block hidden'>
        <div className='w-full h-full flex flex-row'>
          <div className='flex flex-row w-[30%] h-full justify-center items-center gap-2 text-4xl font-bold font-serif'>
            <h1>SAP</h1>
            <h1 className='text-primary-default'>Modules</h1>
          </div>
          <div className='flex flex-row items-center justify-center h-full'>
            <div className='border border-primary-default h-1/4'></div>
          </div>
          <div className='w-[70%] flex flex-row justify-start items-center'>
            <p className='w-[70%] text-gray-600 ml-16 font-serif'>
              Streamline your supply chain operations with ease. Let Rasta Infotech's <strong>SAP supply chain consulting services</strong> guide you in planning and executing your SAP processes. From strategy refinement to implementation, software optimization, ERP integration and more, we provide expert advice to help you optimize your supply chain management.
            </p>
          </div>
        </div>
        {/* <div className='w-full h-3/4 flex flex-col'>
          <div className='flex flex-row w-full h-10 items-center '>
            <div className='w-7/12 ml-48 h-full flex flex-row items-center justify-between font-extrabold font-serif'>
              <p className=''>SAP EWM</p>
              <p>SAP WR</p>
              <p>SAP YL</p>
            </div>
          </div>
          <div className='w-full flex items-center justify-center'>
            <video src={fillervid} autoPlay muted loop></video>
          </div>
          <div className='flex flex-row w-full h-10 items-center '>
            <div className='w-7/12 ml-[404px] h-full flex flex-row items-center justify-between font-extrabold font-serif'>
              <p className=''>SAP TM</p>
              <p>SAP BNL</p>
              <p>S/4 HANA</p>
            </div>
          </div>
        </div> */}
      </div>

      {/* mobile view */}
      <div className='md:hidden h-fit'>
        <div className='w-full h-[350px] flex flex-col items-center justify-center mt-8 p-2 gap-2'>
          <div className='flex flex-row w-[80%] justify-center items-center gap-2 text-4xl font-bold font-serif'>
            <h1>SAP</h1>
            <h1 className='text-primary-default'>Modules</h1>
          </div>
          <div className='w-[20%] border border-blue-400'></div>
          <p className='w-[85%] text-gray-600 font-serif'>
            Streamline your supply chain operations with ease. Let Rasta Infotech's <strong>SAP supply chain consulting services</strong> guide you in planning and executing your SAP processes. From strategy refinement to implementation, software optimization, ERP integration and more, we provide expert advice to help you optimize your supply chain management.
          </p>
        </div>
        {/* <div className='flex flex-col items-center justify-center'>
          <img src={fillervidmobile} className='w-[75%]' />
        </div> */}
      </div>
    </>
  )
}

export default Page2