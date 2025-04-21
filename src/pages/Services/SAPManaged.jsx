import React from 'react';
import OurServicesBox from '../../components/OurServicesBox';
import SAPModuleBox from '../../components/SAPModuleBox';
import sapManaged from '../../assets/sap-managed-services.jpg';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const SAPManaged = () => {
  return (
    <>
      <div className='bg-black w-full h-20'></div>
      <div className='h-[380px] w-full relative'>
        <div
          style={{ backgroundImage: `url(${sapManaged})` }}
          className='h-full w-full bg-cover bg-center relative'
        >
          <div className='absolute inset-0 bg-black bg-opacity-65'></div>

          <div className='relative flex items-center justify-center h-full w-full'>
            <div className='flex flex-col items-center gap-2'>
              <p className='text-white text-4xl font-sans font-black'>
                SAP MANAGED SERVICES AND SUPPORT
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
            <Link to="/services/sap-managed"><p className='text-primary-default uppercase'>SAP MANAGED SERVICES AND SUPPORT</p></Link>
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
            <h1 className='text-3xl font-bold text-[#212529]'>SAP Managed Services Provider</h1>
            <div className='border border-primary-default w-[8%] mt-2'></div>
            <p className='mt-5 text-base font-normal text-[#222222]'>
              The term "SAP Managed Services" is widely employed to define solutions by service providers around technologies like SAP systems, SAP HANA, other SAP apps, or overall SAP landscapes and SAP environments. Generally, SAP Managed Services include a range of services, such as SAP hosting, remote-managed hosting and services, SAP service delivery management, and SAP maintenance.               <br />
              <br />
              At Rasta Infotech, we understand the significance of seamless SAP operations for businesses of all sizes. Our specialized SAP Managed Services are designed to not only support but elevate your enterprise's operational efficiency and strategic growth. We are committed to helping businesses of all sizes navigate the complex terrain of SAP systems. We believe that SAP Managed Services are not just about maintaining IT infrastructure but also about optimizing it to meet your unique needs. We offer a comprehensive range of services that cater to your specific business requirements, ensuring that your SAP environment operates at peak performance consistently.
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Key Advantages of Rasta Infotech' SAP Managed Services</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              <strong>1. Proactive Monitoring:</strong> Our SAP Managed Services provide continuous monitoring, ensuring that potential issues are addressed before they impact your operations.
              <br />
              <br />
              <strong>2. Enhanced Efficiency:</strong> We optimize your SAP environment to reduce operational costs and maximize efficiency.
              <br />
              <br />
              <strong>3. Customized Solutions:</strong> No two businesses are the same, and our services are designed to be adaptable to your distinct needs.
              <br />
              <br />
              <strong>4. Scalability:</strong>  As your business grows, we grow with you, offering scalable solutions that can accommodate your evolving requirements.
              <br />
              <br />
              <strong>5. Peace of Mind:</strong> Our 24/7 support ensures that you can focus on your core business activities, knowing that your SAP environment is in safe hands.
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Our SAP Managed Services Includes</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p><strong>SAP Hosting:</strong> featuring SAP Basis Support, SAP Managed Security, and Hosted SAP S/4HANA </p></div>
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p><strong>SAP Remote Managed Hosting and Services:</strong> encompassing SAP Basis Support, Database Administration, Installs, Upgrades, and Enhancements, Incident, Problem and Change Management, Capacity, Operating System Administration, and Infrastructure</p></div>
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p><strong>SAP Service Delivery Management:</strong> providing Coordination of Services, Platinum Services, Hypercare Services, Service Level Reporting, Single Source Management, and Value Add Services </p></div>
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p><strong>SAP Maintenance:</strong> offering SAP Maintenance Support, Software Updates, SAP Early Watch Alerts, SAP Service Marketplace, Ongoing Issues and Recommendations </p></div>
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p><strong>SAP Application Managed Services (AMS):</strong> covering Application Support and Testing, Break/Fix, Application Optimization and Enhancements, Small Application Changes, SAP Roll Outs, SAP Upgrades, and New SAP Applications </p></div>
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p><strong>SAP Security:</strong> including Security Strategy and Planning, Vulnerability Assessment and Management, Endpoint Protection, Perimeter Security (Firewall and IDPS), Security Information and Event Management (SIEM), and Single Sign-On</p></div>
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p><strong>SAP Business Continuity:</strong> featuring High Availability, Disaster Recovery, and Backups.</p></div>
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Partner with Rasta Infotech for SAP Managed Services</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              Partner with us at Rasta Infotech to experience SAP Managed Services that are not only proficient but also tailored to the heart of your enterprise. Let us take care of your SAP systems, so you can concentrate on what you do best – driving your business forward.
              <br />
              <br />
              <strong>Get in touch with us today and discover how we can be your trusted SAP Managed Services partner.</strong>
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

export default SAPManaged