import React from 'react';
import Image from 'next/image';
import Web from "../../Images/Web.jpg"
import Graphics from "../../Images/Graphics.jpg"
import Ui from "../../Images/Ui.jpg"
import fiverr from "../../Images/Icons/fiverr.png"
import upwork from "../../Images/Icons/upwork.png"
import freelancer from "../../Images/Icons/freelancer.png"
const Services = () => {
    return (
        <div>
            <h1 className='text-[#19A690] text-[60px] text-center mt-16'>SERVICES</h1>
            <h6 className='text-[#ffffff] text-[32px] text-center mt-10'>I seamlessly blend creativity and technology to craft innovative digital solutions.</h6>
            {/* Images  */}
            <div className='flex justify-center gap-28 mt-10'>
                <div>
                <div><Image src={Web} width={269} height={269}/></div>
                <div className='w-[269px] h-[55px] bg-white text-xl flex justify-center items-center font-semibold'>Web Development</div>
                </div>
                
                <div>
                <div><Image src={Graphics} width={269} height={269}/></div>
                <div className='w-[269px] h-[55px] bg-white text-xl flex justify-center items-center font-semibold'>Graphics Design</div>
                </div>
                <div>
                <div><Image src={Ui} width={269} height={269}/></div>
                <div className='w-[269px] h-[55px] bg-white text-xl flex justify-center items-center font-semibold'>Ui/Ux Design</div>
                </div>
                
            </div>

            <h6 className='text-[#19A690] text-[35px] text-center mt-14'>Marketplace I worked</h6>
            {/* Marketplace Images  */}
            <div className='flex justify-center items-center mt-10 gap-20 '>
            <div><Image src={fiverr} width={162} height={162}/></div>
            <div><Image src={upwork} width={135} height={135}/></div>
            <div><Image src={freelancer} width={137} height={102}/></div>
            </div>
            <div className='bg-[#FFFBFB6B] opacity-[42%] w-full h-0.5 mt-12'></div>

        </div>
    );
};

export default Services;