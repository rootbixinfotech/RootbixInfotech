import React from 'react';
import terms from '../assets/terms.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import ConsultationBox from '../components/ConsultationBox';

const Terms = () => {
    return (
        <>
            <div className='bg-black w-full h-20'></div>
            <div className='h-[380px] w-full relative'>
                <div
                    style={{ backgroundImage: `url(${terms})` }}
                    className='h-full w-full bg-cover bg-center relative'
                >
                    <div className='absolute inset-0 bg-black bg-opacity-65'></div>

                    <div className='relative flex items-center justify-center h-full w-full'>
                        <div className='flex flex-col items-center gap-2'>
                            <p className='text-white text-4xl font-sans font-black'>
                                TERMS & CONDITION
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
                        <Link to="/terms-and-conditions"><p className='text-primary-default uppercase'>TERMS & CONDITION</p></Link>
                    </div>
                </div>
            </div>

            <div className='h-fit w-full flex flex-col items-center mt-10'>
                <div className='w-[80%]'>
                    <h1 className='mt-4 flex flex-row gap-2 text-2xl font-bold text-[#3C3C3C]'><h1 className='text-primary-default'>Terms & Condition</h1> For Rasta Infotech Pvt. Ltd.</h1>
                    <div className='border border-black w-[2.5%] mt-4'></div>
                    <br />
                    <p>Rasta Infotech Pvt. Ltd. (“Us” or “We”) provides the https://www.rastainfotech.com/ website and various related services (collectively, the “Website”) to you, the User, subject to your compliance with all the terms, conditions, and notices contained or referenced herein (the “Terms of Service”), as well as any other written agreement between us and you.</p>
                    <br />
                    <p>In addition, when using particular services or materials on this Website, Users shall be subject to any posted rules applicable to such services or materials that may contain terms and conditions in addition to those in these Terms of Service. All such guidelines or rules are hereby incorporated by reference into these Terms of Service.</p>
                    <br />
                    <p>These Terms of Service are effective as of [March-2024]. We expressly reserve the right to change these Terms of Service from time to time without notice to you. You acknowledge and agree that it is your responsibility to review this Website and these Terms of Service from time to time and to familiarize yourself with any modifications.</p>
                    <br />
                    <p>Your continued use of this Website after such modifications will constitute acknowledgement of the modified Terms of Service and agreement to abide and be bound by the modified Terms of Service.</p>
                    <br />
                    <p>We reserve the sole right to either modify or discontinue the Website, including any of the Website’s features, at any time with or without notice to you. We will not be liable to you or any third party should we exercise such right. Any new features that augment or enhance the then-current services on this Website shall also be subject to these Terms of Service.</p>
                    <br />
                    <h2 className='text-lg font-semibold'>Conduct on Website</h2>
                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms. For our Terms and Conditions, please visit at https://www.rastainfotech.com/privacy-policy/</p>
                    <br />
                    <h2 className='text-lg font-semibold'>Information we collect</h2>
                    <p>Your use of the Website is subject to all applicable laws and regulations, and you are solely responsible for the substance of your communications through the Website. By posting information in or otherwise using any communications service, chat room, message board, newsgroup, software library, or other interactive service that may be available to you on or through this Website, you agree that you will not upload, share, post, or otherwise distribute or facilitate distribution of any content — including text, communications, software, images, sounds, data, or other information — that:
                        <div className='flex flex-row gap-2 items-center'>
                            <div className='text-lg'>
                                <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                            </div>
                            <div>
                                Is unlawful, threatening, abusive, harassing, defamatory, libelous, deceptive, fraudulent, invasive of another’s privacy, tortious, contains explicit or graphic descriptions or accounts of sexual acts (including but not limited to sexual language of a violent or threatening nature directed at another individual or group of individuals), or otherwise violates our rules or policies
                            </div>
                        </div>
                        <br />
                        <div className='flex flex-row gap-2 items-center'>
                            <div className='text-lg'>
                                <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                            </div>
                            <div>
                                Victimizes, harasses, degrades, or intimidates an individual or group of individuals on the basis of religion, gender, sexual orientation, race, ethnicity, age, or disability
                            </div>
                        </div>
                        <br />
                        <div className='flex flex-row gap-2 items-center'>
                            <div className='text-lg'>
                                <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                            </div>
                            <div>
                                Infringes on any patent, trademark, trade secret, copyright, right of publicity, or other proprietary right of any party
                            </div>
                        </div>
                        <br />
                        <div className='flex flex-row gap-2 items-center'>
                            <div className='text-lg'>
                                <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                            </div>
                            <div>
                                Constitutes unauthorized or unsolicited advertising, junk or bulk email (also known as “spamming”), chain letters, any other form of unauthorized solicitation, or any form of lottery or gambling
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
                                Contains software viruses or any other computer code, files, or programs that are designed or intended to disrupt, damage, or limit the functioning of any software, hardware, or telecommunications equipment or to damage or obtain unauthorized access to any data or other information of any third party
                            </div>
                        </div>
                        <br />
                        <div className='flex flex-row gap-2 items-center'>
                            <div className='text-lg'>
                                <MdOutlineKeyboardDoubleArrowRight className='text-primary-default' />
                            </div>
                            <div>
                                Impersonates any person or entity, including any of our employees or representatives
                            </div>
                        </div>
                        <br />
                        <br />
                        We neither endorse nor assume any liability for the contents of any material uploaded or submitted by third party users of the Website. We generally do not pre-screen, monitor, or edit the content posted by users of communications services, chat rooms, message boards, newsgroups, software libraries, or other interactive services that may be available on or through this Website. However, we and our agents have the right at their sole discretion to remove any content that, in our judgment, does not comply with these Terms of Service and any other rules of user conduct for our site, or is otherwise harmful, objectionable, or inaccurate. We are not responsible for any failure or delay in removing such content. You hereby consent to such removal and waive any claim against us arising out of such removal of content.
                        <br />
                        <br />
                        You agree that we may at any time, and at our sole discretion, terminate your membership, account, or other affiliation with our site without prior notice to you for violating any of the above provisions. In addition, you acknowledge that we will cooperate fully with investigations of violations of systems or network security at other sites, including cooperating with law enforcement authorities in investigating suspected criminal violations.
                    </p>
                    <br />
                    <h2 className='text-lg font-semibold'>Third Party Websites</h2>
                    <p>This site may link you to other sites on the Internet or otherwise include references to information, documents, software, materials and/or services provided by other parties. These sites may contain information or material that some people may find inappropriate or offensive.
                        <br />
                        <br />
                        These other sites and parties are not under our control, and you acknowledge that we are not responsible for the accuracy, copyright compliance, legality, decency, or any other aspect of the content of such sites, nor are we responsible for errors or omissions in any references to other parties or their products and services. The inclusion of such a link or reference is provided merely as a convenience and does not imply endorsement of, or association with, the Website or party by us, or any warranty of any kind, either express or implied.
                    </p>
                    <br />
                    <h2 className='text-lg font-semibold'>Intellectual Property</h2>
                    <p>
                        All custom graphics, icons, logos, and service names used on the Website are registered trademarks, service marks, and/or artwork held under copyright of Rasta Infotech Pvt. Ltd. or its Affiliates. All other marks are property of their respective owners. Nothing in these Terms of Service grants you any right to use any trademark, service mark, logo, and/or the name or trade names of Rasta Infotech Pvt. Ltd. or its Affiliates.
                    </p>
                    <br />
                    <h2 className='text-lg font-semibold'>Disclaimer of Warranties</h2>
                    <p>Content available through this Website often represents the opinions and judgments of an information provider, site user, or other person or entity not connected with us. We do not endorse, nor are we responsible for the accuracy or reliability of, any opinion, advice, or statement made by anyone other than an authorized Rasta Infotech Pvt. Ltd. spokesperson speaking in his/her official capacity. Please refer to the specific editorial policies posted on various sections of this Website for further information, which policies are incorporated by reference into these Terms of Service.
                        <br />
                        <br />
                        You understand and agree that temporary interruptions of the services available through this Website may occur as normal events. You further understand and agree that we have no control over third party networks you may access in the course of the use of this Website, and therefore, delays and disruption of other network transmissions are completely beyond our control.
                        <br />
                        <br />
                        You understand and agree that the services available on this Website are provided “AS IS” and that we assume no responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings.
                    </p>
                    <br />
                    <h2 className='text-lg font-semibold'>International Use</h2>
                    <p>Although this Website may be accessible worldwide, we make no representation that materials on this Website are appropriate or available for use in locations outside the United States, and accessing them from territories where their contents are illegal is prohibited. Those who choose to access this Website from other locations do so on their own initiative and are responsible for compliance with local laws. Any offer for any product, service, and/or information made in connection with this Website is void where prohibited.
                    </p>
                    <br />
                    <h2 className='text-lg font-semibold'>Termination</h2>
                    <p>You agree that we may, in our sole discretion, terminate or suspend your access to all or part of the Website with or without notice and for any reason, including, without limitation, breach of these Terms of Service. Any suspected fraudulent, abusive or illegal activity may be grounds for terminating your relationship and may be referred to appropriate law enforcement authorities.
                        <br />
                        <br />
                        Upon termination or suspension, regardless of the reasons therefore, your right to use the services available on this Website immediately ceases, and you acknowledge and agree that we may immediately deactivate or delete your account and all related information and files in your account and/or bar any further access to such files or this Website. We shall not be liable to you or any third party for any claims or damages arising out of any termination or suspension or any other actions taken by us in connection with such termination or suspension.
                    </p>
                    <br />
                    <h2 className='text-lg font-semibold'>Governing Law</h2>
                    <p>These Terms of Service and any dispute or claim arising out of, or related to them, shall be governed by and construed in accordance with the internal laws of the us without giving effect to any choice or conflict of law provision or rule.
                        <br />
                        <br />
                        Any legal suit, action or proceeding arising out of, or related to, these Terms of Service or the Website shall be instituted exclusively in the federal courts of India.
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

export default Terms