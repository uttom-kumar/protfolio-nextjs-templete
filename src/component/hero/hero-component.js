import React from 'react';
import {Typewriter} from "react-simple-typewriter";
import Link from "next/link";
import {MdArrowForward} from "react-icons/md";
import {ImProfile} from "react-icons/im";
import Image from "next/image";
import heroImage from "../../../public/images/hero-image.png";

const HeroComponent = () => {
    const text = ['Developer', 'Designer', 'Freelancer']



    return (
        <div>
            <div className="py-16">
                <div className="block lg:flex md:flex gap-10 items-center justify-center">
                    <div className="flex-1  ">
                        <h3 className=" text-[18px] md:text-[24px] lg:text-[24px]">HI,THERE I'M </h3>
                        <div className="text-[34px] md:text-[44px] lg:text-[64px] text-blue-500 font-[900]">
                            <Typewriter
                                words={text}
                                loop={true}
                                cursor
                                cursorStyle='|'
                            />
                        </div>
                        <p className="text-gray-500">
                            Full Stack Web Developer and Web Application specializing in front-end and back-end development. Experienced with all stages of the development cycle for dynamic websites. Well versed in numerous programming languages JavaScript ES6 Nodejs, structured language HTML5 CSS3, open-source front-end JavaScript library ReactJS, NextJS With MongoDB Database.
                        </p>
                        <p className="text-gray-500">
                            I'm a software engineer specializing in scalable web apps. Explore my
                            <Link className="text-blue-400" href={'/blog'}> blog</Link>, <Link className="text-blue-400"
                                                                                               href={'/portfolio'}>portfolio</Link>,<Link
                            className="text-blue-400"
                            href={'/resume'}>Online resume.</Link>
                        </p>
                        <div className="flex gap-5 items-center my-10">
                            <button
                                className="px-5 py-2 bg-blue-400 flex gap-1 items-center rounded font-bold text-white">
                                <MdArrowForward/>View Portfolio
                            </button>
                            <button
                                className="px-5 py-2 bg-gray-700 flex gap-1 items-center rounded font-bold text-white">
                                <ImProfile/>View Resume
                            </button>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div
                            className=" overlayAfter -z-10 w-[80%] mx-auto sm:w-[300px] md:w-[300px] lg:w-[300px]  h-[300px]">
                            <Image src={heroImage} alt={'image'}
                                   className="bg-[#f0f2f5] w-full mx-auto sm:w-[300px] md:w-[300px] lg:w-[300px]  h-[300px] "/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroComponent;