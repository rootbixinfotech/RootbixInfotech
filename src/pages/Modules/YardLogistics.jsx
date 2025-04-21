import React from 'react';
import OurServicesBox from '../../components/OurServicesBox';
import SAPModuleBox from '../../components/SAPModuleBox';
import yardLogistics from '../../assets/sap-yard-logistics.jpg';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import fillerimg from '../../assets/filler-ewm.jpeg'

const YardLogistics = () => {
  return (
    <>
      <div className='bg-black w-full h-20'></div>
      <div className='h-[380px] w-full relative'>
        <div
          style={{ backgroundImage: `url(${yardLogistics})` }}
          className='h-full w-full bg-cover bg-center relative'
        >
          <div className='absolute inset-0 bg-black bg-opacity-65'></div>

          <div className='relative flex items-center justify-center h-full w-full'>
            <div className='flex flex-col items-center gap-2'>
              <p className='text-white text-4xl font-sans font-black'>
                SAP Yard Logistics
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
            <Link to="/services/yard-logistics"><p className='text-primary-default uppercase'>SAP Yard Logistics</p></Link>
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
            <h1 className='text-3xl font-bold text-[#212529]'>SAP Yard Logistics</h1>
            <div className='border border-primary-default w-[8%] mt-2'></div>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              In today's cutthroat global landscape, businesses with yards must have streamlined logistics processes to optimize their operations. To streamline these operations, they need a highly integrated and user-friendly system that can support the entire supply chain. This is where SAP Yard Logistics and SAP Yard Management come into play. Our Yard Management services provide end-to-end support for transportation units, including check-in to check-out functionality. Our solutions focus on critical functionalities such as Planning, Execution, Yard Operations, Yard Monitoring, and Billing. By implementing SAP Yard Logistics and SAP Yard Management, businesses can optimize their supply chain processes, improve operational efficiency, and stay ahead of the competition.
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Prepare your logistics for the future with integrated yard management</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              Future-proof Your Logistics with Integrated Yard Management
              <br />
              <br />
              Optimize your supply chain logistics with SAP Yard Logistics. Our cutting-edge application maximizes visibility into all yard processes, utilizing a range of visualization and reporting tools to help businesses run more efficiently, profitably, and sustainably. Achieve the future of logistics with SAP Yard Logistics.
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>SAP Yard Logistics boasts an array of impressive features, including:</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>On-premise deployment</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Integrated end-to-end yard logistics management</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Real-time visibility into order status</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Support for connected devices in the yard</p>
              </div>
              <br />
              <br />
              These capabilities work together to create a seamless, powerful logistics solution that can be tailored to meet the unique needs of your business. Harness the power of SAP Yard Logistics and revolutionize your supply chain logistics.
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Experience the following key benefits with SAP Yard Logistics:</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              Integration services for SAP YardLogistics Robotics consists of the following components:
              <br />
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Enhanced visibility into processes, enabling you to get your products and services to market faster, and improve customer service by identifying potential issues with greater insight and control</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Accelerated gate-in and gate-out processes, resulting in a significant reduction in processing time and staffing needs by supporting faster activity execution and increasing yard throughput</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Greater efficiency in asset and area usage, allowing you to lower your overall need for additional resources by maximizing the productivity of existing equipment such as shag trucks and shunting locomotives.</p>
              </div>
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>key capabilities of SAP Yard Logistics:</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              Order and Appointment Planning and Check-In:
              <br />
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Optimize the use of resources to reduce idle time, intermediate storage, and wasteful movement</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Improve incoming and outgoing transport planning with system support and collaboration with carriers</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Streamline gate-in and gate-out processes for maximum efficiency</p>
              </div>
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Yard Execution and Processing:</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Speed up product and service delivery, improve customer service, and increase visibility and control</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Enhance yard throughput by accelerating activity execution</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Manage employees and processes efficiently with comprehensive mobile planning capabilities</p>
              </div>
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Integration Capabilities and Monitoring:</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Identify, avoid, and solve potential issues with comprehensive graphical monitoring</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Integrate cloud-based supply chain management software for end-to-end process management</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Automate capture and analysis of high-quality yard management data to reduce manual efforts</p>
              </div>
              <br />
              <br />
              Experience the power and potential of SAP Yard Logistics and unlock optimized supply chain logistics for your business.
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

export default YardLogistics