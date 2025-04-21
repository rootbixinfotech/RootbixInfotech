import React from 'react';
import OurServicesBox from '../../components/OurServicesBox';
import SAPModuleBox from '../../components/SAPModuleBox';
import tms from '../../assets/sap-transportation.jpg';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import fillerimg from '../../assets/filler-ewm.jpeg'

const TMS = () => {
  return (
    <>
      <div className='bg-black w-full h-20'></div>
      <div className='h-[380px] w-full relative'>
        <div
          style={{ backgroundImage: `url(${tms})` }}
          className='h-full w-full bg-cover bg-center relative'
        >
          <div className='absolute inset-0 bg-black bg-opacity-65'></div>

          <div className='relative flex items-center justify-center h-full w-full'>
            <div className='flex flex-col items-center gap-2'>
              <p className='text-white text-4xl font-sans font-black'>
                SAP TRANSPORTATION MANAGEMENT SERVICES
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
            <Link to="/services/tms"><p className='text-primary-default uppercase'>SAP TRANSPORTATION MANAGEMENT SERVICES</p></Link>
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
            <h1 className='text-3xl font-bold text-[#212529]'>SAP TRANSPORTATION MANAGEMENT SERVICES</h1>
            <div className='border border-primary-default w-[8%] mt-2'></div>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              <strong>SAP Transportation Management,</strong> also known as SAP TM, is a powerful solution that can help businesses to improve operational efficiency, reduce costs, and maximize the return on transportation spend. By accurately forecasting demand and shipment volumes, consolidating orders, fine-tuning transportation planning, and enhancing freight, fleet, and logistics management, SAP TM can help you achieve freight spending savings and real-time visibility into global transportation and domestic shipping across transportation modes and industries.
              <br />
              <br />
              SAP Transportation Management Services, offered by Rasta Infotech, provide cutting-edge solutions to optimize and streamline your supply chain operations. With SAP's advanced technology and Rasta Infotech' expertise, you can achieve greater visibility, efficiency, and control over your transportation processes.
              <br />
              <br />
              With SAP TM's strategic freight management capabilities, you can optimize freight procurement with advanced analysis, forecasting, and simulation. This feature allows you to evaluate and prepare bids with predictive, insight-driven quotation rounds, and exchange information efficiently with logistics service providers.
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Key Features of SAP Transport Management:</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Transportation Planning and Execution</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Transportation Optimization</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Visibility and Reporting</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Integration with SAP ERP</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Scalability and Flexibility</p>
              </div>
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Benefits of Using SAP TM</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Reduced Costs</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Improved Efficiency</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Enhanced Customer Service</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Increased Agility</p>
              </div>
              <br />
              <br />
              Order management functionality within SAP TM enables you to generate optimal routing proposals dynamically for rules-based orders, helping you manage changes in transportation demand with real-time order-to-cash and procure-to-pay processes. By integrating order and delivery data into SAP ERP, you can make sure that all relevant data is easily accessible in one centralized location.
              <br />
              <br />
              When it comes to <strong>SAP transportation management services,</strong> SAP TM is the most robust solution available. With advanced analysis and simulation capabilities, you can optimize your freight shopping, evaluate bids more effectively, and make sure that your transportation processes are streamlined and automated. Whether you're dealing with domestic or international freight and logistics, SAP TM can help you take full control of your transportation management and achieve significant cost savings.

            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Why choose Rasta Infotech Pvt. Ltd. for SAP TM?</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              Rasta Infotech Pvt. Ltd. is a leading provider of SAP TM services in the USA. We have a team of experienced consultants who can help you to implement and support SAP TM to meet the specific needs of your business. We offer a wide range of services, including:
              <br />
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>SAP TM implementation</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>SAP TM consulting</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>SAP TM support</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>SAP TM training</p>
              </div>
              <br />
              <br />
              <strong>Contact us today to learn more about SAP TM and how Rasta Infotech Pvt. Ltd. can help you to optimize your transportation operations.</strong>
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

export default TMS