import React from 'react';
import Image from "next/image";
import image1 from '../../../public/images/project1.png'
import Link from "next/link";


const ProjectComponent = () => {
    return (
        <div>
            <div className="py-5 ">
                <h1 className="text-[24px] sm:text-[32px] md:text-[42px] lg:text-[54px] font-bold">Featured Projects<span className="text-blue-400">!</span></h1>
                <p className="text-gray-700">As a junior web developer, my projects focus on combining functionality and design to create responsive, user-friendly web applications. Below are some examples of my work:</p>
                {/*--------------*/}
                <div className="py-5 ">
                    <div className="grid gap-10 col-span-1 md:grid-cols-2 lg:grid-cols-2">
                        {
                            Array.from({ length: 4 }).map((_, i) => {
                                return (
                                    <div key={i} className="p-10 bg-white rounded drop-shadow-lg">
                                        <div className="w-full h-[300px] overflow-hidden">
                                            <Image className="w-full h-full" src={image1} alt='photo-design'/>
                                        </div>
                                        <h4 className="text-gray-700 text-[14px] my-3">Portfolio, NEXT Js CMS</h4>
                                        <Link href={'/project'}
                                              className="text-[14px] hover:text-blue-400 duration-700 leading-none uppercase">next
                                            js cms portfolio website, a fully customizable portfolio website</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;