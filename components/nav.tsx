"use client";
import React, { useState } from "react";
import Link from "next/link";
import Open from "@/public/images/open.svg"
import Close from "@/public/images/close.svg"
import Hamburger from 'hamburger-react'
export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="flex flex-col relative sm:flex-row list-none backdrop-blur-lg backdrop-opacity-100	backdrop-brightness-150 sm:h-auto sm:p-4 h-10 ">
      <div className=" text-white md:hidden">
        {/* <img src={Close.src} className="bg-cyan-400 w-10 h-10 ml-auto md:hidden cursor-pointer absolute right-0  duration-50 " onClick={onToggleMenu} style={{ opacity: menuOpen ? 1 : 0 }} />
        <img src={Open.src} className="bg-white/30 blur-10 w-10 h-10 ml-auto md:hidden cursor-pointer duration-50" /> */}
        <Hamburger onToggle={onToggleMenu} size={24} />
      </div>
      <ul className={`w-full flex md:flex-row flex-col bg-slate-700 z-10 sm:bg-transparent md:py-0 py-4  transition-all ease-in duration-50 absolute md:mt-0 md:relative mt-10 md:opacity-100 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
        <li className="hover:bg-slate-600 w-32 rounded-lg text-center sm:ml-2 m-0 p-1 mr-0 ml-0 text-white md:mt-1 mt-1 ">
          <a href="https://github.com/vijayarun00100">
            <p>Github</p>
          </a>
        </li>
        <li className="w-32 hover:bg-slate-600 rounded-lg text-center  mr-3 p-1 ml-0 text-white mt-1">
          <a href="https://drive.google.com/file/d/10FYT5wPp1WINVP1zxHzuRDF1cDTZVH5u/view?usp=sharing">
            Resume
          </a>
        </li>
        <div className=" sm:w-2/3  bg-sky-700 dark:bg-sky-600 rounded-md hover:opacity-100 pointer-events-auto pl-2 ml-0 ">
          <div className="flex	text-white text-left pl-5 pt-1 mt-1 ml-2 md:ml-0 antialiased font-medium ">
            <h1>Vijay Arunachalam</h1>
            <button className=" hover:bg-sky-400 hover:px-1 hover:pl-2 px-1.5 py-0.5 rounded-md text-center ml-auto mr-2 mb-1	p-2 hover:h-auto">
              <Link href="#explore">
                Projects 🌍
              </Link>
            </button>
          </div>
        </div>
        <li className="w-32 hover:bg-slate-600 rounded-lg text-center  ml-3 mr-3 p-1 text-white mt-1">
          <Link href="#experience">
            <p>Experience</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}