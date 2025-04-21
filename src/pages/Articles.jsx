import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import Articles_header from '../assets/Articles_header.jpg';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Articles = () => {
    return (
        <>
            <HeaderComponent title={"OUR ARTICLES"} img={Articles_header} />

            <div>
                <div className='w-full md:h-[35px] bg-[#4B4B4B] text-white font-bold md:p-0 p-2'>
                    <div className='h-full w-[40%] flex flex-row items-center justify-center gap-2'>
                        <Link to="/"><p className='uppercase'>HOME</p></Link>
                        <p>/</p>
                        <Link to="/articles"><p className='text-primary-default uppercase'>OUR ARTICLES</p></Link>
                    </div>
                </div>
            </div>

            {/* Flexbox for Side-by-Side Layout */}
            <div className='w-full p-10 flex flex-col md:flex-row gap-10'>
                {/* Text Content Section */}
                <div className='w-full md:w-1/2 flex flex-col gap-8 mt-10 pl-6'>
                    <div className='text-6xl font-bold text-[#3C3C3C] w-full'>Stay ahead of change</div>
                    <p className='w-[80%] text-2xl font-serif text-[#222222]'>
                        Explore our research, insights, and examples of real client impact, designed to help you embrace the key forces of change and get to value faster.
                    </p>
                </div>

                {/* Contact Section */}
                <div className='w-full md:w-1/2 mt-10 md:mt-0'>
                    <Contact />
                </div>
            </div>

            <div className='mt-20'>
                <Footer />
            </div>
        </>
    );
};

export default Articles;
