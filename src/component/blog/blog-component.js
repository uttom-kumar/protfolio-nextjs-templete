'use client'
import React from 'react';
import Image from "next/image";
import image1 from "../../../public/images/project1.png";
import Link from "next/link";
import {CiSearch} from "react-icons/ci";

const BlogComponent = () => {

    const searchButton = (e) => {
        e.preventDefault();
        alert('Search Blog')
    }


    return (
        <div>
            <div className="py-5 ">
                <h1 className="text-[24px] sm:text-[32px] md:text-[42px] lg:text-[54px] font-bold">Our Latest Blog<span
                    className="text-blue-400">!</span></h1>
                <p className="text-gray-700">Providing latest programming related information which will help us a lot
                    in our daily software based tasks. You can visit these blocks of mine to get updated information
                    related to programming. Some important information can be learned from some sites. The blogs are
                    provided for learning purpose only.</p>
                {/*------ form section -----*/}
                <div className="w-full flex items-center p-4">
                    <form onSubmit={searchButton} className="w-full max-w-md flex items-center">
                        <input
                            className="flex-grow px-4 py-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                        >
                            <CiSearch/>
                        </button>
                    </form>
                </div>
                {/*--------------*/}
                <div className="py-5 ">
                    <div className="grid gap-10 col-span-1 md:grid-cols-2 lg:grid-cols-2">
                        {
                            Array.from({length: 4}).map((_, i) => {
                                return (
                                    <div key={i} className="p-10 bg-white rounded drop-shadow-lg">
                                        <div className="w-full h-[300px] overflow-hidden">
                                            <Image className="w-full h-full" src={image1} alt='photo-design'/>
                                        </div>
                                        <h4 className="text-gray-700 text-[14px] my-3">Portfolio, NEXT Js CMS</h4>
                                        <Link href={'/blog'}
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

export default BlogComponent;