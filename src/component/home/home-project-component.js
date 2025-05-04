import React from 'react';
import Image from "next/image";
import image1 from '../../../public/images/image-1.png'
import Link from "next/link";

const HomeProjectComponent = () => {
    return (
        <div>
            <div className="bg-white drop-shadow-lg p-10 rounded">
                <div className="flex gap-5 ">
                    <div className="flex-1 ">
                        <Image className="w-full" src={image1} alt={'image1'}/>
                    </div>
                    <div className="flex-1 ">
                        <Image className="w-full" src={image1} alt={'image1'}/>
                    </div>
                </div>
                <div className="mt-5" >
                    <p className="text-gray-700">Showcase View</p>
                    <Link href={'/project'} className="uppercase tracking-[4px] text-[24px] font-[600] text-gray-700">Project</Link>
                </div>
            </div>
            {/* -------- */}
            <div className="block sm:block md:flex lg:flex gap-5 my-10">
                <div className="flex-1 p-10 rounded bg-blue-400 drop-shadow-lg mb-10">
                    <p>Visit Our Blog</p>
                    <Link href={'/blog'}
                          className="uppercase tracking-[4px] text-[24px] font-[600]">blog</Link>
                </div>
                <div className="flex-1 p-10 rounded bg-white drop-shadow-lg mb-10">
                    <p>Lets work</p>
                    <Link href={'/contact'}
                          className="uppercase tracking-[4px] text-[24px] font-[600] text-gray-700">contact</Link>
                </div>
            </div>
            <div className="testimonials my-10">
                <div className="text-gray-200 h-[200px] flex flex-col justify-center items-center  rounded">
                    <p>What Client Says?</p>
                    <Link href={'/'} className="uppercase tracking-[4px] text-[24px] font-[600] ">testimonials</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeProjectComponent;