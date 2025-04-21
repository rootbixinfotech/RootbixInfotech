import React from 'react';
import OurServicesBox from '../../components/OurServicesBox';
import SAPModuleBox from '../../components/SAPModuleBox';
import ewm from '../../assets/sap-ewm.jpg';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import fillerimg from '../../assets/filler-ewm.jpeg'

const EWM = () => {
  return (
    <>
      <div className='bg-black w-full h-20'></div>
      <div className='h-[380px] w-full relative'>
        <div
          style={{ backgroundImage: `url(${ewm})` }}
          className='h-full w-full bg-cover bg-center relative'
        >
          <div className='absolute inset-0 bg-black bg-opacity-65'></div>

          <div className='relative flex items-center justify-center h-full w-full'>
            <div className='flex flex-col items-center gap-2'>
              <p className='text-white text-4xl font-sans font-black'>
                SAP EXTENDED WAREHOUSE MANAGEMENT (SAP EWM)
              </p>
              <div className='border-2 border-primary-default w-[12%]'></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='w-full md:h-[35px] bg-[#4B4B4B] text-white font-bold'>
          <div className='h-full md:w-[40%] flex flex-row items-center justify-center gap-2 md:p-0 p-2'>
            <Link to="/"><p className='uppercase'>HOME</p></Link>
            <p>/</p>
            <Link to="/services/business-network"><p className='uppercase'>Modules</p></Link>
            <p>/</p>
            <Link to="/services/ewm"><p className='text-primary-default uppercase'>SAP EXTENDED WAREHOUSE MANAGEMENT (SAP EWM)</p></Link>
          </div>
        </div>
      </div>

      <div className='flex md:flex-row flex-col justify-between h-fit w-full'>
        <div className='md:w-[40%] h-fit flex flex-col gap-12 items-center pt-20'>
          <SAPModuleBox />
          <OurServicesBox />
        </div>
        <div className='md:w-[60%] h-full pt-20 md:px-0 px-4'>
          <div className='h-full md:w-[80%]'>
            <h1 className='text-3xl font-bold text-[#212529]'>SAP EXTENDED WAREHOUSE MANAGEMENT (SAP EWM)</h1>
            <div className='border border-primary-default w-[8%] mt-2'></div>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>What is SAP EWM or SAP Extended Warehouse Management?</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              SAP Extended Warehouse Management (SAP EWM) stands as a crucial warehouse management module/system seamlessly integrated into the robust SAP Supply Chain Management (SAP SCM) solution package. Basically, SAP EWM, or SAP Extended Warehouse Management, is a specialized software solution that optimizes and streamlines warehouse processes within the supply chain. It goes beyond traditional warehouse management systems, providing advanced functionalities for efficient inventory tracking, order fulfillment, and distribution.
              <br />
              <br />
              Unlock the power of SAP EWM to streamline and elevate your warehouse management. Effectively manage large-scale warehouse operations and seamlessly integrate intricate supply chain logistics with your distribution processes. Gain unparalleled visibility and control over your operations for heightened efficiency and productivity. Discover the transformative capabilities of SAP EWM for an optimized and streamlined warehouse experience.
              <br />
              <br />
              SAP EWM enhances visibility and control over warehouse operations, allowing businesses to adapt to changing demands seamlessly. From inventory management to labor optimization, SAP EWM plays a pivotal role in improving overall warehouse efficiency, making it an indispensable tool for businesses looking to enhance their logistics and supply chain management capabilities.
              <br />
              <br />
              SAP Extended Warehouse Management is a comprehensive solution offered by Rasta Infotech that empowers businesses to optimize their warehouse operations. It provides end-to-end visibility, efficient inventory management, and streamlined processes to enhance supply chain performance. With Rasta Infotech' expertise, SAP EWM can be customized to fit your specific business needs, ensuring seamless logistics operations, increased productivity, and improved customer satisfaction. Elevate your warehouse management capabilities with SAP Warehouse Management, supported by Rasta Infotech' proven proficiency in supply chain solutions.
              <br />
              <img src={fillerimg} alt="" />
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Benefits of SAP EWM implementation:</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p><strong>Increased efficiency and productivity:</strong> SAP EWM automates many tasks that are currently performed manually, such as putaway, picking, and packing.</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p><strong>Improved accuracy and visibility:</strong> SAP Warehouse Management provides real-time visibility into inventory levels and warehouse operations. This can help you to identify and resolve issues quickly, and to ensure that orders are shipped accurately and on time.</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p><strong>Reduced costs:</strong> SAP EWM can help you to reduce costs by optimizing warehouse processes, reducing inventory levels, and improving labor utilization.</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Our Upgrade and Migration Services ensure a fast, smooth transition process thereby minimizing risk and downtime which will maximize your business benefits.</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p><strong>Enhanced customer service:</strong> SAP EWM can help you to improve customer service by ensuring that orders are shipped accurately and on time.</p>
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p><strong>Increased agility and responsiveness to change:</strong> SAP EWM is a highly flexible and scalable WMS that can be adapted to meet the changing needs of your business.</p>
              </div>
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>SAP EWM Implementation by Rasta Infotech</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              Rasta Infotech Pvt. Ltd. is a leading provider of SAP EWM implementation services in the USA. We have a team of experienced and certified SAP EWM consultants who can help you implement SAP Warehouse Management promptly and efficiently.
              <br />
              <br />
              If you are considering implementing SAP EWM, we encourage you to contact Rasta Infotech Pvt. Ltd. to learn more about our services and how we can help you achieve success.
            </p>
            <div className='mt-16'>
              <Contact />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <Footer />
      </div>
    </>
  )
}

export default EWM