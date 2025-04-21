import React from 'react';
import OurServicesBox from '../../components/OurServicesBox';
import SAPModuleBox from '../../components/SAPModuleBox';
import hana from '../../assets/sap-hana.jpg';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import fillerimg from '../../assets/filler-ewm.jpeg'

const HANA = () => {
  return (
    <>
      <div className='bg-black w-full h-20'></div>
      <div className='h-[380px] w-full relative'>
        <div
          style={{ backgroundImage: `url(${hana})` }}
          className='h-full w-full bg-cover bg-center relative'
        >
          <div className='absolute inset-0 bg-black bg-opacity-65'></div>

          <div className='relative flex items-center justify-center h-full w-full'>
            <div className='flex flex-col items-center gap-2'>
              <p className='text-white text-4xl font-sans font-black'>
                SAP S/4 HANA Services
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
            <Link to="/services/hana"><p className='text-primary-default uppercase'>SAP S/4 HANA Services</p></Link>
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
            <h1 className='text-3xl font-bold text-[#212529]'>SAP S/4 HANA Services</h1>
            <div className='border border-primary-default w-[8%] mt-2'></div>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Start Your Digital Transformation Today With Rasta Infotech</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              SAP S/4HANA is a next-generation enterprise resource planning (ERP) system that helps businesses of all sizes to run more efficiently and effectively. It is built on SAP HANA, a powerful in-memory database that provides real-time insights into business data. S/4HANA is a simplified and streamlined ERP system that is easy to use and maintain. Additionally, it is very scalable, so organizations can expand without worrying that their ERP system may impact their progress.
              <br />
              <br />
              Rasta Infotech provides a comprehensive ERP solution that runs on SAP S/4HANA, an in-memory database that enables real-time data processing and analytics. We offer complete SAP S/4HANA implementation services utilizing our expert methodology and techniques for a better, lower cost, and lower risk deployment. We provide a unified view of all business processes, including finance, procurement, manufacturing, sales, and distribution, that results in improved productivity, profitability, and transparency.
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>S/4HANA's Impact on Enterprise Transformation</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <div>
                  <strong>Real-time Insights:</strong> S/4HANA is built on SAP HANA, a powerful in-memory database that provides real-time insights into business data. This allows businesses to make better decisions faster and to improve their overall performance.
                </div>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <div>
                  <strong>Simplified Processes:</strong> S/4HANA has a simplified and streamlined data model that makes it easier to use and maintain. This can help businesses to reduce costs and improve efficiency.
                </div>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <div>
                  <strong>Increased Agility:</strong> S/4HANA is a highly flexible and scalable ERP system that can be adapted to meet the changing needs of your business. This can help you to be more agile and responsive to changes in customer demand, market conditions, and other factors.
                </div>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <div>
                  <strong>Improved Customer Service:</strong> S/4HANA provides businesses with a real-time view of inventory levels and order status. This can help businesses to fulfill orders more accurately and on time, leading to improved customer service.
                </div>
              </div>
              <br />
              <br />
              At Rasta Infotech Pvt. Ltd., we understand that every business is unique, which is why we offer a range of S/4HANA solutions that can be customized to meet your specific needs. Our team of experts can work with you to identify your business requirements, configure the software to meet your needs, and provide training and support to ensure a smooth implementation.
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Key Benefits of S/4HANA</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              One of the key benefits of S/4HANA is its ability to integrate data from various sources, including sensors, social media, and mobile devices. This integration provides a comprehensive view of your operations, enabling you to make more informed decisions and respond quickly to changing market conditions. Moreover, the real-time analytics capabilities of S/4HANA can help you to identify trends, predict outcomes, and optimize business processes, which can help you to stay ahead of the competition.
              <br />
              <br />
              S/4HANA also provides a simplified user interface that is easy to use and intuitive. This interface can help to increase user adoption, reduce training costs, and improve overall productivity. Additionally, the software provides enhanced security features to help protect sensitive data, ensuring compliance with data privacy regulations such as GDPR.
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>How We Help Businesses in Implementing SAP S/4HANA</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              As your trusted partner in SAP S/4HANA implementation, Rasta Infotech Pvt. Ltd. paves the way for you to harness the full power of this transformative technology. By streamlining processes, enhancing data visibility, and fostering data-driven decision-making, we empower your business to thrive in the digital age. Whether you're a small business looking to scale up or an established enterprise aiming to enhance efficiency, our SAP S/4HANA implementation services are the key to unlocking new possibilities.
              <br />
              <br />
              <strong>
                Contact us today and embark on a journey towards sustainable growth, improved agility, and a competitive edge in your industry.
              </strong>
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

export default HANA