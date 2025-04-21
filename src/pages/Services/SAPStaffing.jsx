import React from 'react';
import OurServicesBox from '../../components/OurServicesBox';
import SAPModuleBox from '../../components/SAPModuleBox';
import staffingServices from '../../assets/sap-staffing.jpg';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const SAPStaffing = () => {
  return (
    <>
      <div className='bg-black w-full h-20'></div>
      <div className='h-[380px] w-full relative'>
        <div
          style={{ backgroundImage: `url(${staffingServices})` }}
          className='h-full w-full bg-cover bg-center relative'
        >
          <div className='absolute inset-0 bg-black bg-opacity-65'></div>

          <div className='relative flex items-center justify-center h-full w-full'>
            <div className='flex flex-col items-center gap-2'>
              <p className='text-white text-4xl font-sans font-black'>
                SAP STAFFING SERVICES
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
            <Link to="/services/sap-consulting"><p className='uppercase'>Services</p></Link>
            <p>/</p>
            <Link to="/services/sap-staffing"><p className='text-primary-default uppercase'>SAP STAFFING SERVICES</p></Link>
          </div>
        </div>
      </div>

      <div className='flex md:flex-row flex-col justify-between h-fit w-full'>
        <div className='md:w-[40%] h-fit flex flex-col gap-12 items-center pt-20'>
          <OurServicesBox />
          <SAPModuleBox />
        </div>
        <div className='md:w-[60%] h-full pt-20 md:px-0 px-4'>
          <div className='h-full md:w-[80%]'>
            <h1 className='text-3xl font-bold text-[#212529]'>HIRE HIGHLY QUALIFIED SAP RESOURCES FROM RASTA INFOTECH</h1>
            <div className='border border-primary-default w-[8%] mt-2'></div>
            <p className='mt-5 text-base font-normal text-[#222222]'>
              We have a team of seasoned SAP professionals and look to bridge the gap between talent and opportunity. This provides an enriching experience for both employers and job seekers. Our proficiency and commitment to delivering excellence consistently within the SAP suite of enterprise solutions is unquestionable. We excel in providing expertise across a wide range of SAP modules, including:               <br />
              <br />
              We offer SAP staffing services across all modules. Our dedicated SAP Practice is one of the largest SAP staffing teams in the United States. Our team has a deep understanding of the market and an extensive network of qualified SAP professionals for given SAP modules.
            </p>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              <strong>SAP Extended Warehouse Management (SAP EWM)</strong>
              <br />
              <strong>SAP Transportation Management Services</strong>
              <br />
              <strong>SAP Warehouse Robotics/Automation</strong>
              <br />
              <strong>SAP Yard Logistics</strong>
              <br />
              <strong>SAP Business Network For Logistics</strong>
              <br />
              <strong>SAP S/4 HANA</strong>
              <br />
              <strong>SAP Cloud Migration ECC to S/4HANA</strong>
            </p>
            <h2 className='mt-10 text-lg font-bold text-[#3C3C3C]'>WE OFFER A DIVERSE RANGE OF SAP STAFFING SERVICES, INCLUDING:</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              <div className='mb-4'>At Rasta Infotech Pvt Ltd, we have a dedicated team of highly skilled SAP experts and recruiters who understand the basic tenets of the industry. This positions us as ideal recruiters to swiftly connect you with dedicated staff for your SAP implementation needs. Our services encompass contract and contingent SAP staffing solutions.</div>
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p><strong>CONTRACT-BASED SAP STAFF</strong> Looking for contract SAP employees for specific projects or assignments. Well, not a problem. We are here to help.</p></div>
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p><strong>TEMPORARY-BASED STAFF</strong> You can hire SAP staff from 3 days to 12 months. We can provide you with temporary SAP employees to cover staffing shortages or unexpected needs.</p></div>
              <br />
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>WHY CHOOSE RASTA INFOTECH PVT. LTD. FOR YOUR SAP STAFFING NEEDS?</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              Hire Talented SAP staff from Rasta Infotech as we provide proficient SAP developers capable of building solutions and enhancements for supply chain management systems. Our SAP staffing services are highly sought-after in the current industry owing to the cutting-edge SAP solutions that our SAP experts have delivered so far.
              <br />
              <br />
              if you are looking for an adaptable contract SAP staffing solutions that match your project needs and budgetary constraints, RASTA INFOTECH PVT. LTD. is here to help!
              <br />
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p><strong>100% in-house staff</strong></p></div>
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p><strong>Transparency</strong></p></div>
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p><strong>Reduced recruitment and training costs</strong></p></div>
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p><strong>Improved project quality and delivery speed</strong></p></div>
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p><strong>Access to the latest SAP technology & solutions</strong></p></div>
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p><strong>Highly skilled and experienced SAP Staff</strong></p></div>
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
  );
}

export default SAPStaffing;
