import React from 'react';
import OurServicesBox from '../../components/OurServicesBox';
import SAPModuleBox from '../../components/SAPModuleBox';
import warehouse from '../../assets/sap-warehouse.jpg';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import fillerimg from '../../assets/filler-ewm.jpeg'

const Warehouse = () => {
  return (
    <>
      <div className='bg-black w-full h-20'></div>
      <div className='h-[380px] w-full relative'>
        <div
          style={{ backgroundImage: `url(${warehouse})` }}
          className='h-full w-full bg-cover bg-center relative'
        >
          <div className='absolute inset-0 bg-black bg-opacity-65'></div>

          <div className='relative flex items-center justify-center h-full w-full'>
            <div className='flex flex-col items-center gap-2'>
              <p className='text-white text-4xl font-sans font-black'>
                SAP Warehouse Robotics/Automation
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
            <Link to="/services/warehouse"><p className='text-primary-default uppercase'>SAP Warehouse Robotics/Automation</p></Link>
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
            <h1 className='text-3xl font-bold text-[#212529]'>SAP Warehouse Robotics/Automation</h1>
            <div className='border border-primary-default w-[8%] mt-2'></div>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              Integration services for SAP Warehouse Robotics is an on-premise product. You can use it to integrate SAP Warehouse Robotics and physical robots to move handling units (HUs) from source storage bins to destination storage bins in a warehouse.
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>You can use integration services for SAP Warehouse Robotics in the following ways:</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>To deploy the required services in the Kubernetes environment per edge node</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>To receive warehouse orders assigned from SAP Warehouse Robotics</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>To report robot statuses and warehouse order processing statuses to SAP Warehouse Robotics</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>To store warehouse orders and warehouse tasks locally to allow a robot to process warehouse tasks in case of intermittent network</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>To integrate with physical robots to move the handling units in a warehouse</p>
              </div>
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Components of Integration Services for SAP Warehouse Robotics</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              Integration services for SAP Warehouse Robotics consists of the following components:
              <br />
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Custom resource (CR) synchronization module (Syncer)</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Warehouse robot controller</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Robot adapter</p>
              </div>
            </p>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              The CR Syncer is responsible for synchronizing robots, robot commands, and warehouse orders. The warehouse robot controller and robot adapter work together to process robot tasks using the following steps:
              <br />
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>The warehouse robot controller receives warehouse orders and robot commands from SAP Warehouse Robotics.</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>The warehouse robot controller calls the robot adapter to create robot tasks.</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>The robot adapter sends robot tasks to the physical robot for processing.</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>The robot adapter tracks the robot task status and reports the status changes to the warehouse robot controller.</p>
              </div>
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

export default Warehouse