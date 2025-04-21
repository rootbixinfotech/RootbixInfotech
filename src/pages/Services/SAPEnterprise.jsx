import React from 'react';
import OurServicesBox from '../../components/OurServicesBox';
import SAPModuleBox from '../../components/SAPModuleBox';
import sapEnterprise from '../../assets/sap-enterprise.jpg';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const SAPEnterprise = () => {
  return (
    <>
      <div className='bg-black w-full h-20'></div>
      <div className='h-[380px] w-full relative'>
        <div
          style={{ backgroundImage: `url(${sapEnterprise})` }}
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
            <Link to="/services/sap-enterprise"><p className='text-primary-default uppercase'>SAP ENTERPRISE DIGITAL TRANSFORMATION</p></Link>
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
            <h1 className='text-3xl font-bold text-[#212529]'>SAP Enterprise Digital Transformation</h1>
            <div className='border border-primary-default w-[8%] mt-2'></div>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Enterprise Digital Transformation with Rasta Infotech</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              Rasta Infotech is a leading provider of enterprise digital transformation services. We help enterprises of all sizes to achieve their digital transformation goals by implementing and optimizing SAP solutions.
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>What is Enterprise Digital Transformation?</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              Enterprise digital transformation is the process of integrating digital technologies into all areas of a business. This can include automating business processes, implementing new digital solutions, and developing new digital business models.
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Why is Enterprise Digital Transformation Important?</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              Enterprise digital transformation is important because it can help businesses to:
              <br />
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p>Improve efficiency and productivity</p></div>
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p>Reduce Costs</p></div>
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p>Increase Customer Satisfaction</p></div>
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p>Gain a Competitive Advantages</p></div>
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p>Adapt to Changing Market Conditions</p></div>
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>How can Rasta Infotech help in SAP Digital Transformation?</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              Rasta Infotech has a team of experienced consultants who can help you with all aspects of your enterprise digital transformation journey. We can help you to:
              <br />
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p>Develop a digital transformation strategy</p></div>
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p>Select and implement the right SAP solutions</p></div>
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p>Integrate SAP solutions with your existing systems</p></div>
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p>Migrate your data to SAP</p></div>
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p>Train your employees on SAP</p></div>
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p>Optimize your SAP solutions for performance and scalability</p></div>
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Advantages of a Digital Platform</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Enables the organization to generate new revenue streams and transform into a platform company</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Facilitates the creation of an ecosystem of partners, suppliers, and customers</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Connects and manages multiple IoT devices to enable data analysis capabilities</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Provides a platform to build "net new" applications and deliver innovative features</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Enables the development of innovative business logic and digital applications</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Leverages modernized core ERM, SCM, and CRM data sets to trigger new business processes</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Enables access to internal and external Big Data sets to enhance decision-making</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Empowers the business to produce real-time insights</p>
              </div>
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>SAP Digital Transformation Framework</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              Rasta Infotech has a team of experienced consultants who can help you with all aspects of your enterprise digital transformation journey. We can help you to:
              <br />
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p>Digital Enterprise Architecture The SAP Digital Transformation Framework methodology offers an end-to-end digital enterprise architecture that enables the digitalization of business processes. The architecture is based on a unified, enterprise-ready, agile, and trusted platform. It fully integrates the front-end and back-end operations through a solid digital core. This architecture dramatically simplifies the IT landscape and provides an expandable platform for future business innovation.</p></div>
              <br />
              <div className='flex flex-row gap-2 items-center'><div className='text-lg'><MdOutlineKeyboardDoubleArrowRight className='text-primary-default' /></div><p>Next-Generation Solutions for Digital Transformation SAP offers a suite of solutions for driving digital transformation in organizations. SAP S/4HANA, the next-generation business suite, provides a digital core for organizations, combining business transactions and analytics to create a reimagined digital core that connects applications and ecosystems across all key parts of the business. Other solutions include SAP Ariba, Concur, SuccessFactors, Fieldglass, and Hybris, which help digitalize spend management, employee and contingent workforce management, and customer engagement and commerce.</p></div>
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Advantages of SAP Digital Transformation</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Rapid Creation of New Value The SAP Digital Transformation Framework enables enterprises to create new value from applications rapidly.</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Automation, Agility, and Business Innovation SAP solutions drive automation, agility, and business innovation.</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Insights and Predictive Outcomes SAP solutions enable enterprises to gain insights and predict outcomes.</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Business Continuity SAP solutions help ensure business continuity.</p>
              </div>
              <br />
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-lg'>
                  <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                </div>
                <p>Total Cost of Ownership Reduction and Operational Efficiencies SAP solutions help reduce total cost of ownership (TCO) and drive operational efficiencies.</p>
              </div>
            </p>
            <h2 className='mt-4 text-lg font-bold text-[#3C3C3C]'>Benefits of Working with Rasta Infotech</h2>
            <p className='mt-2 text-base font-normal text-[#222222]'>
              There are many benefits to working with Rasta Infotech for your enterprise digital transformation needs, including:
              <br />
              <br />
              1. Our expertise in SAP solutions
              <br />
              <br />
              2. Our proven track record of success
              <br />
              <br />
              3. Our commitment to customer satisfaction
              <br />
              <br />
              4. Our ability to help you achieve your digital transformation goals on time and within budget
              <br />
              <br />
              If you are interested in learning more about how Rasta Infotech can help you with your enterprise digital transformation journey, please contact us today. We would be happy to discuss your specific needs and how we can help you to achieve your goals.
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

export default SAPEnterprise