import React from 'react';
import Image from "next/image";
import logo from '../../../public/images/profileIcon2.png'

const FooterComponent = () => {
    return (
        <div>
            <div className="p-5 mb-10 lg:mb-0 w-full  text-center mx-auto bg-white">
                <h1 className="text-gray-500">Copyright uttomkumar ©2023. All rights reserved</h1>
                <Image src={logo} alt="logo" className="w-[150px] mx-auto "/>
            </div>
        </div>
    );
};

export default FooterComponent;