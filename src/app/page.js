'use client'
import React from 'react';
import HeroComponent from "@/component/hero/hero-component";
import HomeServiceComponent from "@/component/home/home-service-component";
import HomeProjectComponent from "@/component/home/home-project-component";

const Page = () => {
    return (
        <div>
            <HeroComponent />

            <div className="lg:flex md:flex sm:flex block gap-5 my-10">
                <div className="w-full lg:w-4/12 md:w-5/12 sm:w-6/12 my-5">
                    <HomeServiceComponent />
                </div>
                <div className="w-full lg:w-8/12 md:w-7/12 sm:w-6/12 my-5">
                    <HomeProjectComponent />
                </div>
            </div>

        </div>
    );
};

export default Page;