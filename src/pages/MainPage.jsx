import React, { useState } from 'react';
import mainvid from '../assets/mainvid.mp4';
import NavBar from '../components/NavBar.jsx';
import Page2 from './Page2.jsx';
import Page3 from './Page3.jsx';
import TypingEffect from '../Animations/TypingEffect.jsx';
import Footer from '../components/Footer.jsx';
import ConsultationBox from '../components/ConsultationBox.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Page4 from './Page4.jsx';

const MainPage = () => {
  const [text1Done, setText1Done] = useState(false);
  const [text2Done, setText2Done] = useState(false);
  const [text3Done, setText3Done] = useState(false);
  const [text4Done, setText4Done] = useState(false);
  const [text5Done, setText5Done] = useState(false);
  const text1 = "Redefining";
  const text2 = "The Era Of";
  const text3 = "Digital";
  const text4 = "Transformation";
  return (
    <>
      <video src={mainvid} autoPlay loop muted className='h-full w-full object-cover fixed -z-10 md:block hidden'></video>
      <div className="relative h-screen overflow-hidden md:hidden">
        <video
          src={mainvid}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        ></video>
        <div className='absolute inset-0 bg-black bg-opacity-65'></div>
        <div className="relative z-10 flex flex-col w-full h-full top-80 font-semibold text-5xl px-2">
          <p className='text-gray-200'>Redefining The Era Of</p>
          <p className='text-primary-default'>Digital Transformation</p>
        </div>
      </div>

      <div className='h-screen w-full relative bg-black text-white md:flex items-end bg-opacity-55 justify-between hidden'>
        <div className='h-fit mb-24 font-serif ml-4'>
          <h1 className='text-7xl font-semibold'><TypingEffect text={text1} onComplete={() => setText1Done(true)} /></h1>
          <br />
          {text1Done && <h1 className='text-7xl font-semibold'><TypingEffect text={text2} onComplete={() => setText2Done(true)} /></h1>}
          <br />
          {text2Done && <h1 className='text-7xl font-semibold text-nowrap text-primary-default'><TypingEffect text={text3} onComplete={() => setText3Done(true)} /></h1>}
          <br />
          {text3Done && <h1 className='text-7xl font-semibold text-nowrap text-primary-default '><TypingEffect text={text4} onComplete={() => setText4Done(true)} /></h1>}
        </div>
        <div className='h-16 w-[650px] mb-24 mr-20 font-serif font-medium'>
          <h1 className='text-white text-2xl'>
            <TypingEffect text={"Digitally transform your business to unleash the true value chain with Rasta Infotech"} onComplete={() => setText5Done(true)} />
          </h1>
        </div>
      </div>
      <Page2 />
      <Page4 />
      <Page3 />
      {/* <div>
        <Testimonials />
      </div> */}
      <ConsultationBox />
      <Footer />
    </>
  )
}

export default MainPage