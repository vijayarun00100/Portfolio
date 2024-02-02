"use client";
import React from "react";
import Avatar from "@/public/images/vijay.png"
export default function intro(){
    return(
        <div className="flex overflow-hidden">
            <div className=" absolute bg-blue-700/10 w-96 bg-opacity-10 rounded-full h-96 blur-2xl mt-20 ml-20 rotate-45 mr-32"></div>
                <div className="flex md:flex-auto md:ml-20 md:mr-10 items-center justify-center">
                    <div className="flex-col text-white items-start mt-32 z-10 mr-52">
                            <p className="text-white text-4xl">HI🖖<span className="italic">,</span><br />I'm Vijay Arun</p>
                            <p className="mt-10 text-xl">Excited to explore new opportunities, contribute to AI advancements,<br/> and utilize skills for innovative solutions in a dynamic environment.</p>
                            <p className="mt-5 text-xl">Seeking opportunities to collaborate with like-minded professionals,<br />applying expertise to real-world problems.<br />Committed to continuous learning and growth in the field of AI.</p>    
                    </div>
                    <img src={Avatar.src} className="w-62 h-80 mt-32 z-10" alt="man"/>
                    <div className="absolute bg-blue-800/10 w-96 h-42 bg-opacity-10 rounded-full h-96 blur-3xl rotate-45 right-0 mt-96"></div>
                </div>
        </div>
    );
}