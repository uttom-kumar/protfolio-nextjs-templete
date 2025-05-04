import React from 'react';
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import javaScript from '../../../public/icons/js.png'
import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/images/profileIcon2.png'
import CountUp from "react-countup";

const HomeServiceComponent = () => {
    return (
        <>
            <div className="bg-white drop-shadow-lg p-10 rounded mb-10">
                <Image className="w-full sm:w-[200px] md:w-[220px] lg:w-[200px]" src={logo} alt="logo"/>
                <div>
                    <p className="text-gray-600 mt-5">Want to Know More</p>
                    <Link href={'/about'}
                          className="uppercase tracking-[4px] text-[24px] font-[600] text-gray-700">about</Link>
                </div>
            </div>
            {/*-----*/}
            <div className="p-5 bg-white rounded drop-shadow-lg">
                <div className="flex gap-4  ">
                    <div
                        className="w-[100px] h-[100px] bg-white drop-shadow-lg rounded flex flex-col items-center  justify-center">
                        <FaReact className="text-[54px] text-cyan-500 animate-spin duration-75"/>
                    </div>
                    <div
                        className="w-[100px] h-[100px] bg-white drop-shadow-lg rounded items-center flex flex-col justify-center">
                        <FaNodeJs className="text-[54px] animate-pulse duration-75"/>
                    </div>
                    <div
                        className="w-[100px] h-[100px] bg-white drop-shadow-lg rounded items-center flex flex-col justify-center">
                        <Image src={javaScript} alt='javaScript' width=""/>
                    </div>
                </div>
                <div className="mt-5">
                    <p className='text-gray-700 mb-3'>Specialization</p>
                    <Link
                        href={'/service'}
                        className="uppercase tracking-[4px] text-[24px] font-[600] text-gray-700 "
                    >service Offer</Link>
                </div>
            </div>
            {/*------------*/}
            <div className="my-5 bg-white rounded drop-shadow-lg p-5">
                <div className=" block lg:flex md:flex items-center gap-5 ">
                    <div className=" ">
                        <h1 className=" p-0 text-blue-400 relative text-[54px] font-bold">
                            <CountUp start={0} end={2}/>+
                        </h1>
                        <p className=" ">years of Experience</p>
                    </div>
                    <div className="">
                        <h1 className=" text-blue-400 relative text-[54px] font-bold">
                            <CountUp start={0} end={100}/>+
                        </h1>
                        <p className="">Projects Completed</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeServiceComponent;