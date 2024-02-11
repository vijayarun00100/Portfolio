"use client"

import React from "react";
import Github from "@/public/images/github.png";
import Gmail from "@/public/images/gmail.png";
import Linkedin from "@/public/images/linkedin.png";
import Instagram from "@/public/images/instagram.png"
export default function contact() {
  return (
    <section className="bg-slate-500/10 pb-10">
      <div className="container px-6 py-12 mx-auto">
        <div>
          <p className="font-medium text-blue-500 dark:text-blue-400">Contact Me</p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch 😍</h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">What's on your mind? Let's create something epic together,</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Just take few minutes and send me a Mail! 📧✌️</p>
            <p className="mt-2 text-blue-500 dark:text-blue-400">blockloader78@gmail.com</p>
          </div>

          <div>
            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Home</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Come say hello at my Home</p>
            <p className="mt-2 text-blue-500 dark:text-blue-400">Address : 127.0.0.1</p>
          </div>

          <div>
            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Phone</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
            <p className="mt-2 text-blue-500 dark:text-blue-400">+91 9080774819</p>
          </div>
        </div>
      </div>
      <div className="flex gap-6 mt-5 justify-start items-start ml-5">
        <div className="flex gap-6">
          <li className="bg-slate-500 w-10 h-10 rounded-full list-none"><a href="https://github.com/vijayarun00100"><img src={Github.src} alt="github" /></a></li>
          <div className="bg-slate-500 w-10 h-10 rounded-full"><a href="mailto:blockloader78@gmail.com"><img src={Gmail.src} alt="gmail" className="w-8 h-8 ml-1 mt-1" /></a></div>
          <div className="bg-slate-500 w-10 h-10 rounded-full"><a href="https://www.linkedin.com/in/vijay-arunachalam/"><img src={Linkedin.src} alt="linkedin" className="w-8 h-8 ml-1 mt-1" /></a></div>
          <div className="bg-slate-500 w-10 h-10 rounded-full"><a href="https://www.instagram.com/vijayarun_/"><img src={Instagram.src} alt="Instagram" className="w-8 h-8 ml-1 mt-1" /></a></div>
        </div>
      </div>
    </section>
  );
}