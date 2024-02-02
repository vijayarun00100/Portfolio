"use client";
import React from "react";
export default function Nav() {
  return (
    <div className="flex flex-col sm:flex-row py-3 list-none backdrop-blur-lg backdrop-opacity-100	backdrop-brightness-150 ">
      <li className="hover:bg-slate-600 w-32 rounded-lg text-center ml-1 sm:ml-2 m-0 p-1 mr-0 text-white opacity-100 mt-1">
        <p>Portfolio</p>
      </li>
      <li className="w-32 hover:bg-slate-600 rounded-lg text-center  mr-3 p-1 ml-0 text-white mt-1">
        <p>Resume</p>
      </li>
      <div className=" sm:w-2/3  bg-sky-700 dark:bg-sky-600 rounded-md hover:opacity-100 pointer-events-auto pl-2 ml-0">
        <div className="flex	text-white text-left pl-5 pt-1 mt-1  antialiased font-medium ">
          <h1>Vijay Arunachalam</h1>
          <button className=" hover:bg-sky-400 hover:px-1 hover:pl-2 px-1.5 py-0.5 rounded-md text-center ml-auto mr-2 mb-1	p-2 hover:h-auto">
            Explore 🌍
          </button>
        </div>
      </div>
      <li className="w-32 hover:bg-slate-600 rounded-lg text-center  ml-3 mr-3 p-1 text-white mt-1">
        <p>Experience</p>
      </li>
    </div>
  );
}
