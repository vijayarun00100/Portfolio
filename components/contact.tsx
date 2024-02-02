"use client"

import React from "react";
import  Github from "@/public/images/github.png";
import Gmail from "@/public/images/gmail.png";
import Linkedin from "@/public/images/linkedin.png";
import Instagram from "@/public/images/instagram.png"
export default function contact(){
    return(
        <div className="bg-gradient-to-r from-blue-900/20 to-blue-500/20 bg-opacity-10 w-screen h-80 flex">
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <h3 className="text-slate-400 text-4xl ml-32 mt-9">Get in Touch❕</h3>
                    <p className=" mt-6 ml-44 text-2xl text-cyan-500">Feel free to reach out</p>
                </div>
                <div className="flex list-none flex-col text-white ml-80 mt-5">
                    <div className="flex">
                        <div className="grid grid-rows-5 gap-6">
                            <div className=" bg-slate-500 w-14 h-14 rounded-full"><img src={Github.src} alt="github" /></div>
                            <div className=" bg-slate-500 w-14 h-14 rounded-full"><img src={Gmail.src} alt="gmail" className="w-10 h-10 ml-2 mt-2" /></div>
                            <div className=" bg-slate-500 w-14 h-14 rounded-full"><img src={Linkedin.src} alt="linkedin" className="w-10 h-10 ml-2 mt-2" /></div>
                            <div className=" bg-slate-500 w-14 h-14 rounded-full "><img src={Instagram.src} alt="Instagram" className="w-10 h-10 z-10 ml-2 mt-2" /></div>
                        </div>
                        <div className="ml-20 text-xl">
                            <li className="mt-2 mb-14"><a href="https://github.com/vijayarun00100">Github</a></li>
                            <li className="mb-14"><a href="mailto:blockloader78@gmail.com">Gmail</a></li>
                            <li className="mb-14"><a href="https://www.linkedin.com/in/vijay-arunachalam/">Linked IN</a></li>
                            <li><a href="https://www.instagram.com/vijayarun_/">Instagram</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}