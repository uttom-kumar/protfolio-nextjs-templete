import React from 'react';
import Link from "next/link";
import {FaFacebookF, FaGithub} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import {LuShoppingBag, LuUserRound} from "react-icons/lu";
import {AiFillProduct, AiOutlineHome, AiTwotoneProfile} from "react-icons/ai";
import { FaServicestack } from "react-icons/fa";
import {MdOutlineMail} from "react-icons/md";
import {ImProfile} from "react-icons/im";
import logo from '../../../public/images/hero-image.png'
import Image from "next/image";

const AppNavbar = () => {
    return (
        <div>
            <div className="lg:block hidden lg:pt-3">
                <div className="lg:mb-10">
                    <div className="w-[80px] h-[80px] rounded-[50%] bg-blue-400 mx-auto">
                        <Image src={logo} alt={'logo'} className="w-full h-full rounded-[50%]" />
                    </div>
                    <h3 className="text-[16px] ">Uttom Kumar</h3>
                    <p className="text-[12px] text-gray-700">Web Developer & designer</p>
                    <div className="flex gap-3 justify-center items-center mt-10">
                        <Link className="flex flex-col w-[30px] h-[30px] bg-white drop-shadow-lg  items-center justify-center rounded" href={'/'}>
                            <FaFacebookF className="text-gray-500 hover:text-black text-[20px] duration-1000"/>
                        </Link>
                        <Link className="flex flex-col w-[30px] h-[30px] bg-white drop-shadow-lg  items-center justify-center rounded" href={'/'}>
                            <FaGithub className="text-gray-500 hover:text-black text-[20px] duration-1000"/>
                        </Link>
                        <Link className="flex flex-col w-[30px] h-[30px] bg-white drop-shadow-lg  items-center justify-center rounded" href={'/'}>
                            <FaInstagram className="text-gray-500 hover:text-black text-[20px] duration-1000"/>
                        </Link>
                        <Link className="flex flex-col w-[30px] h-[30px]  bg-white drop-shadow-lg items-center justify-center rounded" href={'/'}>
                            <CiLinkedin className="text-gray-500 hover:text-black text-[20px] duration-1000"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="lg:block h-[1px] w-full bg-blue-400 hidden"></div>
            {/* ------------------ navbar section --------------*/}
            <div className="lg:mt-5 px-3" >
                <ul className="flex justify-between items-center lg:block py-3">
                    <li className="lg:my-5 lg:w-full py-2 bg-blue-400 text-white rounded ">
                        <Link href={`/`} className="block">
                            <div className="flex gap-3 items-center px-3">
                                <AiOutlineHome/>
                                <p className="lg:block hidden">Home</p>
                            </div>
                        </Link>
                    </li>
                    <li className="lg:my-5 lg:w-full py-2 bg-blue-400 text-white rounded ">
                        <Link href={`/about`} className="block">
                            <div className="flex gap-3 items-center px-3">
                                <LuUserRound/>
                                <p className="lg:block hidden">About Us</p>
                            </div>
                        </Link>
                    </li>
                    <li className="lg:my-5 lg:w-full py-2 bg-blue-400 text-white rounded ">
                        <Link href={`/portfolio`} className="block">
                            <div className="flex gap-3 items-center px-3">
                                <AiTwotoneProfile/>
                                <p className="lg:block hidden">Portfolio</p>
                            </div>
                        </Link>
                    </li>
                    <li className="lg:my-5 lg:w-full py-2 bg-blue-400 text-white rounded ">
                        <Link href={`/service`} className="block">
                            <div className="flex gap-3 items-center px-3">
                                <FaServicestack/>
                                <p className="lg:block hidden">Service</p>
                            </div>
                        </Link>
                    </li>
                    <li className="lg:my-5 lg:w-full py-2 bg-blue-400 text-white rounded ">
                        <Link href={`/resume`} className="block">
                            <div className="flex gap-3 items-center px-3">
                                <ImProfile/>
                                <p className="lg:block hidden">Resume</p>
                            </div>
                        </Link>
                    </li>
                    <li className="lg:my-5 lg:w-full py-2 bg-blue-400 text-white rounded ">
                        <Link href={`/project`} className="block">
                            <div className="flex gap-3 items-center px-3">
                                <LuShoppingBag/>
                                <p className="lg:block hidden">Projects</p>
                            </div>
                        </Link>
                    </li>
                    <li className="lg:my-5 lg:w-full py-2 bg-blue-400 text-white rounded ">
                        <Link href={`/blog`} className="block">
                            <div className="flex gap-3 items-center px-3">
                                <AiFillProduct/>
                                <p className="lg:block hidden">Blogs</p>
                            </div>
                        </Link>
                    </li>
                    <li className="lg:my-5 lg:w-full py-2 bg-blue-400 text-white rounded ">
                        <Link href={`/contact`} className="block">
                            <div className="flex gap-3 items-center px-3">
                                <MdOutlineMail/>
                                <p className="lg:block hidden">Contact</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AppNavbar;