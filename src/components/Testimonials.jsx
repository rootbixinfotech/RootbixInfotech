import React from 'react';
import abhishek from '../assets/abhishek.png';
import harish_uk1 from '../assets/Harish_UK1.png';
import lakshmi from '../assets/Lakshmi.png';
import naga from '../assets/Naga.jpg';
import param from '../assets/Param.png';
import prashi from '../assets/Prashi.png';
import sourabh from '../assets/Sourabh.png';
import sudarshan from '../assets/sudarshan.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mainvid from '../assets/mainvid.mp4';
import { Tooltip } from '@chakra-ui/react';

const testimonialdata = [
    {
        content: "If you are willing to start your career in SAP or if you are already an SAP professional and want to enhance your knowledge for better career growth , Then Rasta Infotech is one stop solution for all of us . As the mentor is extremely professional and has a wide experience in multiple MNCs , The depth knowledge and level of teaching that is provided by Mentor is truly remarkable . They are highly dedicated and does justice to the trainings offered, Thanks prashun shetty for guiding us right",
        name: "Prashanth K",
        position: "TCS: 15.6 LPA",
        icon: prashi
    },
    {
        content: "If you are aspiring to build your career in SAP consulting, Rasta Infotech is the best platform. I like to thank Rasta Infotech and Prashun sir especially for the consistent guidance and motivation. I recommend you Rasta Infotech 100% to get trained and enhance your knowledge on different SAP modules.",
        name: "Sourabh Rao",
        position: "TCS: 18 LPA",
        icon: sourabh
    },
    {
        content: "Rasta Infotech is platform which not only gives us a knowledge but also provide a chance to develop skills & show case our talent. This platform is helping to many job aspirants like me. Special thanks to prashun shetty for always supporting.",
        name: "Harish",
        position: "MYTILINEOS (UK) : 60 LPA",
        icon: harish_uk1
    },
    {
        content: "I've started preparing in SAP in Feb 2021, I posted a document on LinkedIn to present my skill and fortunately prashun sir saw my post and suggest me take it as challange for 21 days and present your skills and gave suggestions on each document and after completion of 21 days I started getting to many calls and got offer from top 3 MNC's and finally choose NTT Data. I really thank to prashun sir for that one suggestion which not only gives me a job as well to identify my potential.",
        name: "Lakshmi",
        position: "Accenture: 72 LPA",
        icon: lakshmi
    },
    {
        content: "Great platform to learn SAP. Where the teaching is excellent and we get a lot of opportunitiy to ask n number of questions. Each and every aspirants get an individual attention by trainers. Being a part of Rasta Infotech is my pleasure and I am happy to share that I got placed in a reputed organisation in shorter period of time. This was possible only through Rasta Infotech's countinous support and guidance.",
        name: "Abhishek ",
        position: "Infosys: 16.8 LPA",
        icon: abhishek
    },
    {
        content: "I really Thanks for Rasta Infotech for sharing their Knowledge with real time experts. This is best platform to gain more knowledge than we expected. I was got an opportunity by referral program done by Team Rasta Infotech team. I got into one of MNCs recently after getting 6months of SAP MM internship. Now I would like to upgrade my skills on S/4 HANA 2020 which is majory hot in the market. Thanks entire Rasta Infotech team for your support!",
        name: "Sudarshan S",
        position: "Tesla (UK) :72 LPA",
        icon: sudarshan
    },
    {
        content: "The Rasta Infotech team is very supportive and helpful in all aspects. I would especially like to thank Mr. Prashun for his career advice and guidance. Before joining Rasta Infotech, I had training from another institute which was not satisfactory. However, my experience at Rasta Infotech was excellent, I gained thorough understanding of the MM module with practical project experience.",
        name: "Naga Nayana",
        position: "Infosys: 20 LPA",
        icon: naga
    },
    {
        content: "Learning SAP MM at Tag Skills, with assistance of Prashun Shetty sir, was an excellent experience. The course offered comprehensive coverage of procurement and inventory management processes, making it highly practical. The integration of other SAP modules added significant value. Despite the complexity and steep learning curve, the structured approach and helpful resources like Jeevn, Nayan, Sankrant and others made the concept easier to grasp. Overall the skills gained are in high demand in various industries. I would suggest if any one wants to change their career, you can register with Tag Skills. They will guide for your success.",
        name: "Param Patil",
        position: "VIP Bags : 18 LPA",
        icon: param
    },
];

const Testimonials = () => {
    const maxLength = 150;
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    };
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        swipeToSlide: true,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <video src={mainvid} autoPlay loop muted className='h-full w-full object-cover fixed top-0 left-0 -z-10'></video>
            <div className='flex flex-col items-center pt-20 pb-20 bg-transparent relative z-10'>
                <div className='font-semibold text-3xl flex flex-row gap-2 text-white'>
                    Meet Our <span className='text-primary-default'>Success Stories</span>
                </div>
                <div className='mt-20 w-3/4 h-[250px]'>
                    <Slider {...settings}>
                        {testimonialdata.map((item, index) => (
                            <div key={index} className=''>
                                <div className='m-4 h-52 rounded-lg flex flex-col shadow-lg bg-white'>
                                    <div className='flex flex-row items-center ml-2 mb-2 mt-4'>
                                        <div>
                                            <img src={item.icon} alt="" className='h-16 w-16 rounded-full ml-2' />
                                        </div>
                                        <div className='h-16 ml-6 mt-6'>
                                            <p className='text-sm font-medium'>{item.name}</p>
                                            <p className='text-xs opacity-75'>{item.position}</p>
                                        </div>
                                    </div>
                                    <div className='mt-2 ml-6 mr-2 text-xs overflow-hidden'>
                                        <Tooltip label={item.content} aria-label=''>
                                            <span>"{truncateText(item.content, maxLength)}"</span>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        </>
    );
};

export default Testimonials;
