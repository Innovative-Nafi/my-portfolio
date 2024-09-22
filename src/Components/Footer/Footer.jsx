import React from 'react';
import Image from 'next/image';
import logo from "../../Images/logo.png"
import facebook from "../../Images/Icons/facebook.png"
import instagram from "../../Images/Icons/instagram.png"
import linkedin from "../../Images/Icons/linkedin.png"
import pinterest from "../../Images/Icons/pinterest.png"
import twitter from "../../Images/Icons/twitter.png"
const Footer = () => {
    return (
        
       <div>
         <div className="w-[85%] h-25 mx-auto flex justify-between mt-28">
            {/* logo */}
            <div>
                <div><Image src={logo} width={150} height={150}/></div>
            </div>
            {/* contact  */}
            <div className='flex flex-col gap-4'>
            <h3 className='text-white font-bold text-xl'>Contact Info</h3>
            <div>
            <p className='text-white flex gap-7 text-xl'>Call <span>+ 880 1734 586 401</span> </p>
            <p className='text-white flex gap-5 text-xl'>Email <span>arifahsannafi@gmail.com</span> </p>
            </div>
            </div>

            <div className='flex flex-col gap-4'>
                <h3 className='text-white font-bold text-xl'>Address</h3>
                <p className='text-white flex gap-5 text-xl'>Jashore, Khulna, Bangladesh</p>
            </div>
            
            <div className='flex flex-col gap-4'>
                <h3 className='text-white font-bold text-xl'>Terms and Conditions</h3>
                <p className='text-white flex gap-5 text-xl'>All content on this platform is owned <br />by us or our licensors. You may not <br /> reproduce it without permission.</p>
                
            </div>
           
        </div>

        <div className='w-[85%] mx-auto flex items-center justify-between mt-20'>
        <div className='text-white text-sm'>Copyright @Nafi all rights reserved.</div>
        <div className='flex gap-5 relative z-20'>
                                <div><Image src={facebook} width={25} height={25}/></div>
                                <div><Image src={instagram} width={25} height={25}/></div>
                                <div><Image src={linkedin} width={25} height={25}/></div>
                                <div><Image src={pinterest} width={25} height={25}/></div>
                                <div><Image src={twitter} width={25} height={25}/></div>
                            </div>
        </div>

        <div className='w-full flex justify-end absolute z-0 right-20'>
                            <div className='w-80 h-80 bg-[#19A690] opacity-80 rounded-[50%] blur-[80px]'></div>
                        </div>

        </div>
        
    );
};

export default Footer;