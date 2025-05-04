import React from 'react';
import Image from "next/image";
import logo1 from '../../../public/icons/website-codes-1.svg'
import logo2 from '../../../public/icons/designer.png'
import logo3 from '../../../public/icons/application.png'
import {IoMdArrowDropright} from "react-icons/io";



const ServiceComponent = () => {
    return (
        <div>
            <div className="py-5 ">
                {/*---------*/}
                <div>
                    <h1 className="text-[24px] sm:text-[34px] md:text-[42px] lg:text-[44px] font-[900]">Our Best Service<span
                        className="text-blue-400">!</span></h1>
                    <p className="text-gray-700 mb-2">
                        Looking to enhance your online presence and provide users with an exceptional digital
                        experience? As a passionate junior MERN developer, I specialize in creating dynamic, responsive,
                        and user-friendly websites tailored to your needs.
                    </p>
                    <p className="text-gray-700 mb-2">
                        From <span className="font-bold">modern web design</span> to <span className="font-bold">robust web development</span> and
                        seamless <span className="font-bold">UX design</span>, I’m here to help bring your vision to
                        life. Let’s collaborate to build a website that not only captivates but also converts visitors
                        into loyal users.
                    </p>
                    <p className="text-gray-700 mb-5">
                        Contact me today, and let’s start crafting a digital experience that leaves a lasting impact!
                    </p>
                </div>
                {/*-------details----------*/}
                <div className="my-10">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-10">
                        <div className="p-5 bg-white drop-shadow-lg rounded">
                            <Image className="w-[80px]" src={logo1} alt="web-logo"/>
                            <h1 className="text-[24px] font-[600]">Web Design & Template Create</h1>
                            <ul className="text-gray-700">
                                <li className="flex gap-1 items-center">
                                    <IoMdArrowDropright className="text-[18px]"/>
                                    <p> Convert Figma, XD, PSD to html.</p>
                                </li>
                                <li className="flex gap-1 items-center">
                                    <IoMdArrowDropright className="text-[18px]"/>
                                    <p> Design & build a custom template.</p>
                                </li>
                                <li className="flex gap-1 items-center">
                                    <IoMdArrowDropright className="text-[18px]"/>
                                    <p> Convert Html to React & Nextjs.</p>
                                </li>
                                <li className="flex gap-1 items-center">
                                    <IoMdArrowDropright className="text-[18px]"/>
                                    <p>Well-maintained consistency</p>
                                </li>
                            </ul>
                        </div>
                        {/*--------------section 2---------------*/}
                        <div className="p-5 bg-white drop-shadow-lg rounded">
                            <Image className="w-[80px]" src={logo2} alt="web-logo"/>
                            <h1 className="text-[24px] font-[600]">Web Application</h1>
                            <ul className="text-gray-700">
                                <li className="flex gap-1 items-center">
                                    <IoMdArrowDropright className="text-[18px]"/>
                                    <p>Creating an Application using MERN.</p>
                                </li>
                                <li className="flex gap-1 items-center">
                                    <IoMdArrowDropright className="text-[18px]"/>
                                    <p>Dynamic Single-Page Applications (SPAs).</p>
                                </li>
                                <li className="flex gap-1 items-center">
                                    <IoMdArrowDropright className="text-[18px]"/>
                                    <p>E-Commerce Websites.</p>
                                </li>
                                <li className="flex gap-1 items-center">
                                    <IoMdArrowDropright className="text-[18px]"/>
                                    <p>Well-maintained consistency</p>
                                </li>
                            </ul>
                        </div>
                        {/*--------------section 3---------------*/}
                        <div className="p-5 bg-white drop-shadow-lg rounded">
                            <Image className="w-[80px]" src={logo3} alt="web-logo"/>
                            <h1 className="text-[24px] font-[600]">UI Design</h1>
                            <ul className="text-gray-700">
                                <li className="flex gap-1 items-center">
                                    <IoMdArrowDropright className="text-[18px]"/>
                                    <p>Maintaining consistency in design.</p>
                                </li>
                                <li className="flex gap-1 items-center">
                                    <IoMdArrowDropright className="text-[18px]"/>
                                    <p>Focus on defining how users interact.</p>
                                </li>
                                <li className="flex gap-1 items-center">
                                    <IoMdArrowDropright className="text-[18px]"/>
                                    <p>Attention to usability and accessibility.</p>
                                </li>
                                <li className="flex gap-1 items-center">
                                    <IoMdArrowDropright className="text-[18px]"/>
                                    <p>Designers often begin by wireframes.</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceComponent;