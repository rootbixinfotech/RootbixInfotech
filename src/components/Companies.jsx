import React from 'react';
import accentureimg from '../assets/accentureimg.png';
import capgeminiimg from '../assets/capgeminiimg.png';
import cognizantimg from '../assets/cognizantimg.png';
import ecolabimg from '../assets/ecolabimg.png';
import genpactimg from '../assets/genpactimg.png';
import hcltechimg from '../assets/hcltechimg.png';
import himalayaimg from '../assets/himalayaimg.png';
import infosysimg from '../assets/infosysimg.png';
import intelimg from '../assets/intelimg.png';
import lsegimg from '../assets/lsegimg.png';
import mercedesimg from '../assets/mercedes-benzimg.png';
import mindtreeimg from '../assets/mindtreeimg.png';
import relianceimg from '../assets/relianceimg.png';
import tcsimg from '../assets/tcsimg.png';
import techmahindraimg from '../assets/techmahindraimg.png';
import toyotaimg from '../assets/toyotaimg.png';
import wiproimg from '../assets/wiproimg.svg';
import yessecuritiesimg from '../assets/yes-securitiesimg.png';

const Companies = () => {
    const companies = [
        { src: accentureimg },
        { src: capgeminiimg },
        { src: cognizantimg },
        { src: ecolabimg },
        { src: genpactimg },
        { src: hcltechimg },
        { src: himalayaimg },
        { src: infosysimg },
        { src: intelimg },
        { src: lsegimg },
        { src: mercedesimg },
        { src: mindtreeimg },
        { src: relianceimg },
        { src: tcsimg },
        { src: techmahindraimg },
        // { src: toyotaimg },
        { src: wiproimg },
        { src: yessecuritiesimg },
    ]
    return (
        <div className="flex flex-col w-[100%] px-4 h-full items-center">
            <div className="flex overflow-hidden whitespace-nowrap w-full">
                <div className="flex animate-scroll">
                    {companies.concat(companies).map((item, index) => (
                        <div key={index} className="flex-shrink-0 mx-4 h-40 text-white font-bold text-2xl p-5 w-40 flex items-center justify-center">
                            <img src={item.src} alt="sponsor" width={170} height={170} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Companies