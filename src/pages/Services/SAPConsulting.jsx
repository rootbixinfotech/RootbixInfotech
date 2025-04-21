import React from 'react';
import OurServicesBox from '../../components/OurServicesBox';
import SAPModuleBox from '../../components/SAPModuleBox';
import sapConsulting from '../../assets/sap-consulting.jpg';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const SAPConsulting = () => {
  return (
    <>
      <div className='bg-black w-full h-20'></div>
      <div className='h-[380px] w-full relative'>
        <div
          style={{ backgroundImage: `url(${sapConsulting})` }}
          className='h-full w-full bg-cover bg-center relative'
        >
          <div className='absolute inset-0 bg-black bg-opacity-65'></div>

          <div className='relative flex items-center justify-center h-full w-full'>
            <div className='flex flex-col items-center gap-2'>
              <p className='text-white text-4xl font-sans font-black'>
                SAP ENTERPRISE DIGITAL TRANSFORMATION
              </p>
              <div className='border-2 border-primary-default w-[12%]'></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='w-full md:h-[35px] bg-[#4B4B4B] text-white font-bold md:p-0 p-2'>
          <div className='h-full md:w-[40%] flex flex-row items-center justify-center gap-2'>
            <Link to="/"><p className='uppercase'>HOME</p></Link>
            <p>/</p>
            <Link to="/services/sap-consulting"><p className='uppercase'>Services</p></Link>
            <p>/</p>
            <Link to="/services/sap-consulting"><p className='text-primary-default uppercase'>SAP Consulting Services</p></Link>
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
            <h1 className='text-3xl font-bold text-[#212529]'>Transform Your Business with SAP Consulting Services</h1>
            <div className='border border-primary-default w-[8%] ml-2'></div>
            <h2 className='mt-8 text-lg font-bold text-[#3C3C3C]'>What is Supply Chain Consulting?</h2>
            <p className='mt-5 text-base font-normal text-[#222222]'>
              Supply chain consulting is a process of advising businesses on how to improve their supply chains. Supply chain consultants can help businesses to identify and address inefficiencies, reduce costs, and improve customer service.
              <br />
              <br />
              From strategy execution and sector-specific knowledge to steady management, the largest full-service partner for end-to-end integration, Rasta Infotech offers an array of services from experienced SAP technology consultants. Our team of experts ensures efficient performance of current and future requirements in complex application environments based on their knowledge of the latest technological breakthroughs and platforms.
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Highly Collaborative Approach for Optimal Business Performance</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              As a leading SAP Consulting Company, we rely on a highly collaborative approach to leverage new technologies for maximum business productivity. This methodology has been proven to optimize customer return on investment, which is why we maintain a 100% success rate with our clients.
              <br />
              <br />
              We are dedicated to providing high-quality service with senior consultants who possess industry-specific expertise as well as technical proficiency, project management, and business acumen. By maintaining low consultant-to-client ratios, we can ensure better data transfer and higher client autonomy.
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Leveraging the Power of SAP Technology for Business Development</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              Our SAP consulting firm offers comprehensive technical services including SAP Fiori & UI5, SAP S/4 Hana, and more. Our team’s extensive experience enables us to effectively run large or small-scale projects and integrations as well as the entire process development lifecycle.
              <br />
              <br />
              With our help, you can deliver powerful results across various business processes due to our deep understanding of ever-expanding cloud computing technologies like SaaS (software as a service), PaaS (platform as a service), and IaaS (infrastructure as a service).
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Why Choose Rasta Infotech for Supply Chain Consulting Services?</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              There are many benefits to working with Rasta Infotech (Supply Chain Consulting Firm), including:
              <br />
              <br />
              <strong>1. Expertise:</strong> Rasta Infotech has the expertise and experience to help businesses identify and address their supply chain challenges.
              <br />
              <br />
              <strong>2. Objectivity:</strong> We can provide an objective assessment of a business's supply chain and offer unbiased recommendations.
              <br />
              <br />
              <strong>3. Resources:</strong> We have access to a wide range of resources, including best practices, industry trends, and data analytics.
              <br />
              If you are looking for ways to improve your supply chain performance, consider working with a supply chain consulting firm. We will discuss your supply chain goals and challenges, and we will develop a customized plan to help you achieve your objectives.
              <br />
              <br />
              <strong>“Contact Rasta Infotech today for a quick consultation and learn how we can help you improve your supply chain.”</strong>
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

export default SAPConsulting