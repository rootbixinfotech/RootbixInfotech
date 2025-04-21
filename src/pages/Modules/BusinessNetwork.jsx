import React from 'react';
import OurServicesBox from '../../components/OurServicesBox';
import SAPModuleBox from '../../components/SAPModuleBox';
import businessNetwork from '../../assets/sap-business-network.jpg';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import fillerimg from '../../assets/filler-ewm.jpeg'

const BusinessNetwork = () => {
  return (
    <>
      <div className='bg-black w-full h-20'></div>
      <div className='h-[380px] w-full relative'>
        <div
          style={{ backgroundImage: `url(${businessNetwork})` }}
          className='h-full w-full bg-cover bg-center relative'
        >
          <div className='absolute inset-0 bg-black bg-opacity-65'></div>

          <div className='relative flex items-center justify-center h-full w-full'>
            <div className='flex flex-col items-center gap-2'>
              <p className='text-white text-4xl font-sans font-black'>
                SAP BUSINESS NETWORK FOR LOGISTICS
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
            <Link to="/services/business-network"><p className='text-primary-default uppercase'>SAP BUSINESS NETWORK FOR LOGISTICS</p></Link>
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
            <h1 className='text-3xl font-bold text-[#212529]'>Logistics Business Network – Freight Collaboration Introduction</h1>
            <div className='border border-primary-default w-[8%] mt-2'></div>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Unlock Benefits With the SAP Logistics Business Network</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              The SAP Logistics Business Network (LBN) is a cloud-based platform that connects shippers, carriers, and other logistics partners to help them streamline their operations and improve visibility. With the LBN, businesses can:
              <br />
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <div>
                  <strong>Reduce costs:</strong> The LBN can help businesses reduce costs by automating manual tasks, streamlining freight management, and improving collaboration with trading partners.
                </div>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <div>
                  <strong>Improve efficiency:</strong> The LBN can help businesses improve efficiency by providing real-time visibility into shipments, enabling better planning and decision-making.
                </div>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <div>
                  <strong>Increase visibility:</strong> The LBN provides businesses with end-to-end visibility into their supply chains, from raw materials to finished goods. This can help businesses identify and mitigate risks, and improve customer service.
                </div>
              </div>
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Streamline Multi-modal Logistics Operations</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              By leveraging this network’s suite of features and capabilities, businesses can cut costs and time spent on manual labor while gaining improved visibility throughout the process of transportation management. With greater visibility comes increased utilization and an overall improved logistics performance.
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Key Freight Collaboration Benefits</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              <strong>The benefits are plentiful:</strong>
              <br />
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <div>
                  <strong>Reduction in logistics costs:</strong> Achieve cost savings through optimized logistics operations.
                </div>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <div>
                  <strong>Real-time transparency for competitive market prices:</strong> Gain visibility into market prices in real-time for competitive advantage.
                </div>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <div>
                  <strong>Automated order fulfillment cycle:</strong> Streamline order processing with automation for efficiency.
                </div>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <div>
                  <strong>Optimal utilization through accurate expected times of arrival:</strong> Improve resource planning with precise arrival time estimates.
                </div>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <div>
                  <strong>Reduced truck wait times and congestion:</strong> Minimize delays and congestion through efficient scheduling and coordination.
                </div>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <div>
                  <strong>End-to-end collaboration across transportation needs:</strong> Enhance collaboration across the entire transportation process for seamless operations.
                </div>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <div>
                  <strong>Seamless interactions with logistics providers via Web UI or APIs:</strong> Facilitate smooth interactions with logistics partners through user-friendly interfaces or APIs.
                </div>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <div>
                  <strong>Global standard support (e.g., EDI 201/990/210):</strong> Ensure compatibility and compliance with global standards for seamless data exchange.
                </div>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <div>
                  <strong>Easier access to freight capacity & regional expertise:</strong> Improve access to freight capacity and regional logistics expertise for efficient operations.
                </div>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <div>
                  <strong>Single-system collaboration & reduced email communication:</strong> Enhance collaboration and efficiency by consolidating communication within a single system.
                </div>
              </div>
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>How Rasta Infotech Pvt. Ltd. can help</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              Rasta Infotech Pvt. Ltd. is a leading provider of SAP LBN implementation services in the USA. We have a team of experienced consultants who can help businesses of all sizes implement the LBN and realize its many benefits.
              <br />
              <br />
              If you are interested in learning more about how the SAP Logistics Business Network can help your business, please contact Rasta Infotech Pvt. Ltd. today. We would be happy to discuss your needs and provide you with a free consultation.
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

export default BusinessNetwork