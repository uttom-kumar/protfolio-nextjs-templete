import React from 'react';
import Image from "next/image";
import {IoCartOutline} from "react-icons/io5";
import {MdDarkMode} from "react-icons/md";
import logo from '../../../public/images/profileIcon2.png'
import icon from '../../../public/icons/profileIcon.png'


const TopMenu = () => {
    return (
        <div>
            <div className="lg:py-5 flex justify-between items-center lg:block z-50">
                <div className="w-[170px] h-[40px] lg:w-[40px] lg:mx-auto">
                    <Image src={logo} alt="logo" className="w-full lg:hidden" />
                    <Image src={icon} alt="logo" className="w-full lg:block hidden" />
                </div>
                <div className="flex gap-4 lg:block lg:my-5">
                    <button
                        className="mx-auto flex flex-col w-[40px] h-[40px] bg-blue-400 items-center justify-center rounded-[50%] lg:mb-5">
                        <IoCartOutline className="text-white"/>
                    </button>
                    <button
                        className="mx-auto flex flex-col w-[40px] h-[40px] bg-blue-400 items-center justify-center rounded-[50%]">
                        <MdDarkMode className="text-white"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopMenu;