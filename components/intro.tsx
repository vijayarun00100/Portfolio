"use client";
import React from "react";
import Avatar from "@/public/images/vijay.png"
export default function intro(){
    return(
        <div className="flex overflow-hidden">
            <div className="sm:absolute sm:bg-blue-700/10 sm:w-96 sm:bg-opacity-10 sm:rounded-full sm:h-96 sm:blur-2xl sm:mt-20 sm:ml-20 sm:rotate-45 sm:mr-44"></div>
                <div className="flex md:ml-48 md:mr-10 items-center justify-center sm:flex-row flex-col">
                    <div className=" text-white mt-32 z-10 ml-3 sm:mr-80 sm:w-6/12">
                            <p className="text-white text-4xl">HI🖖<span className="italic">,</span><br />I'm Vijay Arun</p>
                            <p className="mt-10 text-xl">Excited to explore new opportunities, contribute to AI advancements, and utilize skills for innovative solutions in a dynamic environment.</p>
                            <p className="mt-5 text-xl">Seeking opportunities to collaborate with like-minded professionals,applying expertise to real-world problems.Committed to continuous learning and growth in the field of AI.</p>    
                    </div>
                    <img src={Avatar.src} className="w-62 h-80 mt-24 sm:mt-32 z-10" alt="man" loading="lazy"/>
                </div>
        </div>
    );
}