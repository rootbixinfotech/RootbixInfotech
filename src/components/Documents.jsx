import React, { useEffect, useState } from 'react';
import { Loader } from './Loader.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import ConsultationBox from './ConsultationBox.jsx';

const Documents = () => {

  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
    clearTimeout();
  }, [handleLoad]);

  return (
    <div className='bg-white h-full w-full'>
      <div className='bg-black w-full h-20'></div>

      {loading ? <Loader /> : (
        <div className='flex flex-col w-full h-full items-center'>
          <div className='font-serif text-2xl text-slate-700 font-semibold mt-20'>SAP Documents</div>
          <div className='mt-14 text-gray-500 flex flex-row md:gap-2 mb-4 md:p-0 p-2'>
            Find below a list of recommended documents related to multiple modules in SAP ERP and SAP S/4HANA shared in LinkedIn profile:
          </div>
          <iframe
            className="airtable-embed rounded-md"
            src="https://airtable.com/embed/apprGFujtHcll8vqC/shrqo6V0dUrk5zXj2?viewControls=on"
            onmousewheel=""
            width="75%"
            height="533"
            style={{ background: 'transparent', border: '1px solid #ccc' }}
            onLoad={handleLoad}
          />
          <div className='mt-16 w-full'>
            <Contact />
          </div>
        </div>
      )
      }
      <div className='mt-20'>
        <ConsultationBox />
      </div>
      <div className=''>
        <Footer />
      </div>
    </div>
  )
}

export default Documents