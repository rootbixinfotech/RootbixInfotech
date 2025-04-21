import React from 'react';
import privacypolicy from '../assets/privacy-policy.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import ConsultationBox from '../components/ConsultationBox';

const Privacy = () => {
    return (
        <>
            <div className='bg-black w-full h-20'></div>
            <div className='h-[380px] w-full relative'>
                <div
                    style={{ backgroundImage: `url(${privacypolicy})` }}
                    className='h-full w-full bg-cover bg-center relative'
                >
                    <div className='absolute inset-0 bg-black bg-opacity-65'></div>

                    <div className='relative flex items-center justify-center h-full w-full'>
                        <div className='flex flex-col items-center gap-2'>
                            <p className='text-white text-4xl font-sans font-black'>
                                Privacy Policy
                            </p>
                            <div className='border-2 border-primary-default w-[12%]'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='w-full h-[35px] bg-[#4B4B4B] text-white font-bold'>
                    <div className='h-full w-[40%] flex flex-row items-center justify-center gap-2'>
                        <Link to="/"><p className='uppercase'>HOME</p></Link>
                        <p>/</p>
                        <Link to="/privacy-policy"><p className='text-primary-default uppercase'>PRIVACY POLICY</p></Link>
                    </div>
                </div>
            </div>

            <div className='h-fit w-full flex flex-col items-center mt-10'>
                <div className='w-[80%]'>
                    <h1 className='mt-4 flex flex-row gap-2 text-2xl font-bold text-[#3C3C3C]'><h1 className='text-primary-default'>Privacy Policy</h1> For Rasta Infotech Pvt. Ltd.</h1>
                    <div className='border border-black w-[2.5%] mt-4'></div>
                    <br />
                    <p>Rasta Infotech Pvt. Ltd., accessible from https://www.rastainfotech.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Rasta Infotech Pvt. Ltd. and how we use it.</p>
                    <br />
                    <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
                    <br />
                    <h2 className='text-lg font-semibold'>Consent</h2>
                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms. For our Terms and Conditions, please visit at https://www.rastainfotech.com/privacy-policy/</p>
                    <br />
                    <h2 className='text-lg font-semibold'>Information we collect</h2>
                    <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                        <br />
                        <br />
                        If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                        <br />
                        <br />
                        When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                    </p>
                    <br />
                    <h2 className='text-lg font-semibold'>How we use your information</h2>
                    <p>We use the information we collect in various ways, including to:
                        <div className='flex flex-row gap-2 items-center'>
                            <div className='text-lg'>
                                <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                            </div>
                            <div>
                                <strong>Provide, operate, and maintain our website:</strong> Ensure the website is running smoothly and efficiently.
                            </div>
                        </div>
                        <br />
                        <div className='flex flex-row gap-2 items-center'>
                            <div className='text-lg'>
                                <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                            </div>
                            <div>
                                <strong>Improve, personalize, and expand our website:</strong> Enhance the website's features and user experience to better meet user needs.
                            </div>
                        </div>
                        <br />
                        <div className='flex flex-row gap-2 items-center'>
                            <div className='text-lg'>
                                <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                            </div>
                            <div>
                                <strong>Understand and analyze how you use our website:</strong> Gather data on website usage to identify areas for improvement.
                            </div>
                        </div>
                        <br />
                        <div className='flex flex-row gap-2 items-center'>
                            <div className='text-lg'>
                                <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                            </div>
                            <div>
                                <strong>Develop new products, services, features, and functionality:</strong> Innovate and expand our offerings to provide more value to users.
                            </div>
                        </div>
                        <br />
                        <div className='flex flex-row gap-2 items-center'>
                            <div className='text-lg'>
                                <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                            </div>
                            <div>
                                <strong>Communicate with you, either directly or through one of our partners:</strong> Provide updates and information relating to the website, and engage in marketing and promotional activities.
                            </div>
                        </div>
                        <br />
                        <div className='flex flex-row gap-2 items-center'>
                            <div className='text-lg'>
                                <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                            </div>
                            <div>
                                <strong>Send you emails:</strong> Keep you informed about updates, offers, and other relevant information.
                            </div>
                        </div>
                        <br />
                        <div className='flex flex-row gap-2 items-center'>
                            <div className='text-lg'>
                                <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                            </div>
                            <div>
                                <strong>Find and prevent fraud:</strong> Implement measures to detect and prevent fraudulent activities.
                            </div>
                        </div>
                    </p>
                    <br />
                    <h2 className='text-lg font-semibold'>Log Files</h2>
                    <p>Rasta Infotech Pvt. Ltd. follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
                    <br />
                    <h2 className='text-lg font-semibold'>Advertising Partners Privacy Policies</h2>
                    <p>
                        You may consult this list to find the Privacy Policy for each of the advertising partners of Rasta Infotech Pvt. Ltd.
                        <br />
                        <br />
                        Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Rasta Infotech Pvt. Ltd., which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                        <br />
                        <br />
                        Note that Rasta Infotech Pvt. Ltd. has no access to or control over these cookies that are used by third-party advertisers.
                    </p>
                    <br />
                    <h2 className='text-lg font-semibold'>Third Party Privacy Policies</h2>
                    <p>Rasta Infotech Pvt. Ltd.'s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                        <br />
                        <br />
                        You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
                    </p>
                    <br />
                    <h2 className='text-lg font-semibold'>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
                    <p>Under the CCPA, among other rights, California consumers have the right to:
                        <br />
                        <br />
                        Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
                        <br />
                        <br />
                        Request that a business delete any personal data about the consumer that a business has collected.
                        <br />
                        <br />
                        Request that a business that sells a consumer's personal data, not sell the consumer's personal data.
                        <br />
                        <br />
                        If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                    </p>
                    <br />
                    <h2 className='text-lg font-semibold'>GDPR Data Protection Rights</h2>
                    <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                        <br />
                        <br />
                        The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.
                        <br />
                        <br />
                        The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
                        <br />
                        <br />
                        The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
                        <br />
                        <br />
                        The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
                        <br />
                        <br />
                        The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
                        <br />
                        <br />
                        The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                        <br />
                        <br />
                        If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                    </p>
                    <br />
                    <h2 className='text-lg font-semibold'>Children's Information</h2>
                    <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                        <br />
                        <br />
                        Rasta Infotech Pvt. Ltd. does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                    </p>
                </div>
            </div>
            <div className='mt-20'>
                <ConsultationBox />
            </div>
            <div className=''>
                <Footer />
            </div>
        </>
    )
}

export default Privacy