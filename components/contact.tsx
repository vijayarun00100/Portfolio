"use client"

import React from "react";
import  Github from "@/public/images/github.png";
import Gmail from "@/public/images/gmail.png";
import Linkedin from "@/public/images/linkedin.png";
import Instagram from "@/public/images/instagram.png"
export default function contact(){
    return(
        <div className="bg-gradient-to-r from-blue-900/20 to-blue-500/20 bg-opacity-10 w-screen sm:h-52 h-11/12 flex mt-10 flex-col items-center">
  <h3 className="text-slate-400 sm:text-4xl mt-9">Get in Touch❕</h3>
  <p className="mt-6 sm:text-2xl text-cyan-500">Feel free to reach out</p>
  
  <div className="flex gap-6 mt-5">

    <div className="flex gap-6">
      <li className="bg-slate-500 w-10 h-10 rounded-full list-none"><a href="https://github.com/vijayarun00100"><img src={Github.src} alt="github" /></a></li>
      <div className="bg-slate-500 w-10 h-10 rounded-full"><a href="mailto:blockloader78@gmail.com"><img src={Gmail.src} alt="gmail" className="w-8 h-8 ml-1 mt-1" /></a></div>
      <div className="bg-slate-500 w-10 h-10 rounded-full"><a href="https://www.linkedin.com/in/vijay-arunachalam/"><img src={Linkedin.src} alt="linkedin" className="w-8 h-8 ml-1 mt-1" /></a></div>
      <div className="bg-slate-500 w-10 h-10 rounded-full"><a href="https://www.instagram.com/vijayarun_/"><img src={Instagram.src} alt="Instagram" className="w-8 h-8 ml-1 mt-1" /></a></div>
    </div>
  </div>
</div>

    );
}