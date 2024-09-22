import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../Images/logo.png"
import facebook from "../../Images/Icons/facebook.png"
import instagram from "../../Images/Icons/instagram.png"
import linkedin from "../../Images/Icons/linkedin.png"
import pinterest from "../../Images/Icons/pinterest.png"
import twitter from "../../Images/Icons/twitter.png"
const Header = () => {
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Projects",
            path: "/products"
        },
        {
            title: "Contacts",
            path: "/contacts"
        },
    ]
        return(
            <div className='relative'>
                {/* Navbar */}
                              <div className="w-[85%] h-[10%] mx-auto flex justify-between items-center m-4">
                    
                    {/* logo */}
                    <div className="w-[20%]">
                    <h6 className="font-bold text-2xl"><Image src={logo} width={100} height={100}/></h6>
                    </div>
        
                         {/* menubar */}
                         <div className="w-[20%] text-white">
                    <ul className="flex gap-10 items-center justify-center">
                        {
                            links?.map(link=> <li><Link href={link.path}>{link.title}</Link></li>)
                        }
                    </ul>
                    
                    </div>
                        </div>
                        <div className='bg-[#FFFBFB6B] opacity-[42%] w-full h-0.5'></div>
                        <div className='w-full h-full flex justify-end absolute left-20 bottom-10'>
                            <div className='w-56 h-56 bg-[#19A690] rounded-[50%] blur-[80px]'></div>
                        </div>

                        {/* Header */}
                        <div className='w-[85%] mx-auto flex relative z-10'>
                            <div className='w-[40%]'>
                            <p className='text-white text-2xl'>Hi, I’m</p>
                            <h1 className='text-[#19A690] text-[70px]'>Arif Ahsan <br />Nafi</h1>
                            <h6 className='text-[#ffffff] text-[20px]'>I’m a versatile web developer, graphic designer, and UI/UX <br /> specialist dedicated to creating engaging and user- <br />friendly digital experiences.</h6>
                            <button className='bg-[#19A690] w-[86px] h-[40px] mt-4 rounded-lg text-white drop-shadow-2xl'>Hire me</button>
                            </div>
                            
                    

                            {/* Image  */}
                            <div className='text-white w-[40%] flex justify-end'>IMAGE</div>
                        </div>
                                {/* Social Icons */}
                                <div className='w-[85%] mx-auto flex gap-5 relative z-20'>
                                <div className='mt-5'><Image src={facebook} width={38} height={38}/></div>
                                <div className='mt-5'><Image src={instagram} width={38} height={38}/></div>
                                <div className='mt-5'><Image src={linkedin} width={38} height={38}/></div>
                                <div className='mt-5'><Image src={pinterest} width={38} height={38}/></div>
                                <div className='mt-5'><Image src={twitter} width={38} height={38}/></div>
                            </div>
                        
                        <div className='w-full h-full absolute z-0 top-96 left-[-50px]'>
                            <div className='w-72 h-64 bg-[#19A690] opacity-80 rounded-[50%] blur-[80px]'></div>
                        </div>
                        <div className='bg-[#FFFBFB6B] opacity-[42%] w-full h-0.5 mt-16'></div>
            </div>
    
                
            
          
)
};

export default Header;