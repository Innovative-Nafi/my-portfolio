import Image from "next/image";
import html from "../../Images/Icons/html.png"
import css from "../../Images/Icons/css.png"
import tailwind from "../../Images/Icons/tailwind.png"
import js from "../../Images/Icons/js.png"
import react from "../../Images/Icons/react.png"
import Next from "../../Images/Icons/Next (2).png"
import ps from "../../Images/Icons/ps.png"
import ai from "../../Images/Icons/ai.png"
import xd from "../../Images/Icons/xd.png"
const About = () => {
    return (
        <div>
            <div>
            <h1 className='text-[#19A690] text-[60px] text-center mt-16'>ABOUT ME</h1>
            <h6 className='text-[#ffffff] text-[32px] text-center'>Hello! I’m Arif Ahsan Nafi, a passionate frontend developer based in Jashore, Khulna,<br />Bangladesh. With a strong skill set in graphic design and web development, I love <br /> bringing ideas to life through visually appealing and user-friendly interfaces. I thrive on <br />creativity and problem-solving, always eager to learn new technologies and techniques <br /> to enhance my work. When I’m not coding, you can find me exploring design trends or <br />working on personal projects. Let’s connect and create something amazing together!</h6>
            <h6 className='text-[#19A690] text-[32px] text-center mt-14'>My skill sets are -</h6>
            {/* App Icons  */}
            <div className="flex justify-center gap-10 mt-8 ">
            <div><Image src={html} width={80} height={80}/></div>
            <div><Image src={css} width={80} height={80}/></div>
            <div><Image src={tailwind} width={80} height={80}/></div>
            <div><Image src={js} width={80} height={80}/></div>
            <div><Image src={react} width={80} height={80}/></div>
            <div><Image src={Next} width={120} height={120}/></div>
           </div>
           <div className="flex justify-center items-center gap-10 mt-5 ">
                <div><Image src={ps} width={120} height={120}/></div>
                <div><Image src={ai} width={95} height={95}/></div>
                <div><Image src={xd} width={85} height={85}/></div>
            </div>
            <div className='bg-[#FFFBFB6B] opacity-[42%] w-full h-0.5 mt-12'></div>
            </div>
        </div>
    );
};

export default About;