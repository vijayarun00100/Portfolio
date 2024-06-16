"use client";
import React from "react";
import medal from "@/public/images/medal.png"
import trophy from "@/public/images/trophy.png"
import { TypeAnimation } from 'react-type-animation';
export default function intro() {
    return (
        <>
            <div className="text-white justify-start items-start ml-24 text-4xl font-semibold mb-32">Honors & Awards</div>
            <div className="flex justify-center items-center">
                <div className="flex w-[50%] md:w-[90%] lg:w-[70%] xl:w-[50%] sm:h-56 h-72 bg-slate-100 mb-20 rounded-xl">
                    <div className="flex sm:flex-row flex-col justify-center items-center">
                        <div className="flex bg-sky-200 rounded-full w-24 h-24 sm:w-32 sm:h-32 mt-2 sm:ml-10 lg:h-32 md:h-32 md:w-32 md:ml-3">
                            <div>
                                <img src={trophy.src} alt='' />
                            </div>
                        </div>
                        <div className="sm:ml-24 ml-2 sm:mt-0 mt-5">
                            <div className="text-black sm:text-3xl text-md font-semibold">
                                CPS Hackathon'24
                            </div>
                            <div className="text-black">
                                1st Place
                            </div>
                            <div className="text-black text-md mt-3 ml-0">
                                A 24hrs Industrial Hackathon conducted by Gavs Technologies
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex w-[50%] md:w-[90%] lg:w-[70%] xl:w-[50%] sm:h-56 h-72 bg-slate-100 mb-20 rounded-xl">
                    <div className="flex sm:flex-row flex-col justify-center items-center">
                        <div className="flex bg-sky-200 rounded-full w-24 h-24 sm:w-32 sm:h-32 mt-2 sm:ml-10 lg:h-32 md:h-32 md:w-32 md:ml-3">
                            <div>
                                <img src={trophy.src} alt='' />
                            </div>
                        </div>
                        <div className="sm:ml-24 ml-2 sm:mt-0 mt-5">
                            <div className="text-black sm:text-3xl text-md font-semibold">
                                DevsHouse'24
                            </div>
                            <div className="text-black">
                                2nd Place
                            </div>
                            <div className="text-black text-md mt-3 ml-0">
                                A 48hrs National Level Hackathon conducted by GDSC @ VITCC
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex w-[50%] md:w-[90%] lg:w-[70%] xl:w-[50%] sm:h-56 h-72 bg-slate-100 mb-20 rounded-xl">
                    <div className="flex sm:flex-row flex-col justify-center items-center">
                        <div className="flex bg-sky-200 rounded-full w-24 h-24 sm:w-32 sm:h-32 mt-2 sm:ml-10 lg:h-32 md:h-32 md:w-32 md:ml-3">
                            <div className="mt-2">
                                <img src={medal.src} alt='' />
                            </div>
                        </div>
                        <div className="sm:ml-24 ml-2 sm:mt-0 mt-5">
                            <div className="text-black sm:text-3xl text-md font-semibold">
                                Reva Hack'24
                            </div>
                            <div className="text-black">
                                Finalist
                            </div>
                            <div className="text-black text-md mt-3 ml-0">
                                A 48hrs Hackathon conducted by GDSC @ Reva University
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center">
                <div className="flex w-[50%] md:w-[90%] lg:w-[70%] xl:w-[50%] sm:h-56 h-72 bg-slate-100 mb-20 rounded-xl">
                    <div className="flex sm:flex-row flex-col justify-center items-center">
                        <div className="flex bg-sky-200 rounded-full w-24 h-24 sm:w-32 sm:h-32 mt-2 sm:ml-10 lg:h-32 md:h-32 md:w-32 md:ml-3">
                            <div className="mt-2">
                                <img src={medal.src} alt='' />
                            </div>
                        </div>
                        <div className="sm:ml-24 ml-2 sm:mt-0 mt-5">
                            <div className="text-black sm:text-3xl text-md font-semibold">
                                House Of Developers
                            </div>
                            <div className="text-black">
                                Finalist
                            </div>
                            <div className="text-black text-md mt-3 ml-0">
                                A 48hrs Hackathon conducted by GDSC @ VITCC
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}