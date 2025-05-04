import React from 'react';
import CountUp from 'react-countup';
import heroImage from "../../../public/images/about.png"
import Image from "next/image";



const AboutComponent = () => {




    return (
        <>
            <div className="py-5 block md:flex lg:flex  gap-4" >
                <div className="w-full lg:w-4/12 md:w-4/12">
                    <div className="w-[100%] h-[370px] relative -z-10">
                        <Image src={heroImage} alt="heroImage" className="w-full sm:w-[60%] md:w-full lg:w-full mx-auto h-full rounded-[20%] "/>
                        <div
                            className="absolute bottom-[-10px] left-0 w-full h-[100px] bg-gradient-to-t from-white to-transparent filter blur-sm"></div>
                    </div>
                </div>
                <div className="lg:w-8/12 md:w-8/12">
                    <div>
                        <h1 className="text-[24px] lg:text-[54px] md:text-[54px] sm:text-[44px] font-[700] ">About
                            Me<span className="text-blue-400">!</span></h1>
                        <p className="text-gray-500">
                            My favorite part of programming is tackling and fixing errors. I believe that every error is
                            an opportunity to learn something new. I never give up until I find a solution. Throughout
                            my journey as a junior developer, I’ve faced and successfully solved a wide variety of
                            challenges. I live by the principle of persistence – stick with the problem until it’s
                            solved.
                        </p>
                        <p className="mt-5 text-gray-500">
                            With a strong focus on full-stack development, I’m dedicated to turning ideas into reality.
                            Contact me today, and let’s bring your vision to life with the power of modern web
                            development!
                        </p>
                        {/*-------Counter section ------*/}
                        <div className="p-5 block lg:flex md:flex sm:flex items-center gap-5 my-5">
                            <div className=" ">
                                <h1 className=" p-0 text-blue-400 relative text-[54px] font-bold">2+</h1>
                                <p className=" ">years of Experience</p>
                            </div>
                            <div className="">
                                <h1 className=" text-blue-400 relative text-[54px] font-bold">
                                    <CountUp start={0} end={100}/>+
                                </h1>
                                <p className="">Projects Completed</p>
                            </div>
                            <div className=" ">
                                <h1 className="afterLine text-blue-400 relative text-[54px] font-bold">
                                    <CountUp start={0} end={6}/>K
                                </h1>
                                <p className=" ">Clients Worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutComponent;