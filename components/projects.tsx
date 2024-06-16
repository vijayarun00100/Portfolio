"use client"
import React, { useEffect, useState, useRef } from "react";
import git from "@/public/images/github.png";

export default function Project() {
    const projectRef = useRef<HTMLDivElement>(null); // Provide type annotation here
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (
                projectRef.current && // Check if projectRef.current exists
                window.innerHeight + window.scrollY >= projectRef.current.offsetTop
            ) {
                setIsVisible(true);
                window.removeEventListener("scroll", handleScroll);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-white text-center mt-20 font-semibold text-3xl">PROJECTS</div>
            <div ref={projectRef} className="relative max-w-6xl top-24 bottom-20 w-full">
                <div className={`absolute h-full w-1 bg-white top-0 left-1/2 transform -translate-x-1/2 ${isVisible ? "animate-moveline" : ""}`} />
                
                <div className="pt-10 pb-10 sm:pl-12 pl-2 pr-24 relative w-1/2  left-0 animate-movedown">
                    <div className=" bg-white w-10 h-10 rounded-full absolute -right-5  z-10" />
                    <a href="https://github.com/vijayarun00100/movie-recommendation-system"><img src={git.src} alt="gitbhib" className=" w-10 h-10 rounded-full absolute -right-5 z-10" /></a>
                    <div className="flex flex-col justify-center items-center text-center pt-10 pb-10 sm:pl-10 sm:pr-16 sm:mt-0 pr-16 pl-20 mt-12 bg-white rounded-lg text-base">
                        <h2 className="font-semibold sm:text-xl">Movie recomendation system</h2>
                        <small className="inline-block mb-15 mt-3 mb-2">Using ML</small>
                    </div>
                    <div className="sm:opacity-100 opacity-0 w-0 h-0 border-y-21 border-y-transparent border-l-21  absolute sm:top-14 z-1 sm:right-20 right-0 top-24 border-white"></div>
                </div>


                <div className="pt-10 pb-10 sm:pl-24 sm:pr-12 pl-2 pr-24 relative w-1/2  sm:left-1/2 left-0 animate-movedown">
                    <div className=" bg-white w-10 h-10 rounded-full absolute  sm:-left-5 -right-5 z-10" />
                    <a href="https://github.com/vijayarun00100/student-performance"><img src={git.src} alt="gitbhib" className=" w-10 h-10 rounded-full absolute sm:-left-5 -right-5 z-10" /></a>
                    <div className="flex flex-col justify-center items-center text-center pt-10 pb-10 sm:pl-10 sm:pr-16 sm:mt-0 pr-16 pl-20 mt-12  bg-white relative rounded-lg text-base">
                        <h2 className="font-semibold sm:text-xl">Students performance prediction</h2>
                        <small className="inline-block mb-15 mt-3 mb-2">Using ML</small>
                    </div>
                    <div className="sm:opacity-100 opacity-0 w-0 h-0 border-y-21 border-y-transparent sm:border-r-21 sm:border-l-0 border-l-21 border-white absolute sm:top-14 z-1 sm:left-20 right-0 top-24"></div>
                </div>


                <div className="pt-10 pb-10 sm:pl-12 pl-2 pr-24 relative w-1/2  left-0 animate-movedown">
                    <div className=" bg-white w-10 h-10 rounded-full absolute -right-5  z-10" />
                    <a href="https://github.com/vijayarun00100/Revahack"><img src={git.src} alt="gitbhib" className=" w-10 h-10 rounded-full absolute  -right-5 z-10" /></a>
                    <div className="flex flex-col justify-center items-center text-center pt-10 pb-10 sm:pl-10 sm:pr-16 sm:mt-0 pr-16 pl-20 mt-12 bg-white rounded-lg text-base">
                        <h2 className="font-semibold sm:text-xl">Decentralized Learning Platform</h2>
                        <small className="inline-block mb-15 mt-3 mb-2">Using ML</small>
                        <p> Reva Hack 2024 - Finalist   </p>
                    </div>
                    <div className="sm:opacity-100 opacity-0 w-0 h-0 border-y-21 border-y-transparent border-l-21  absolute sm:top-14 z-1 sm:right-20 right-0 top-24 border-white"></div>
                </div>

                <div className="pt-10 pb-10 sm:pl-24 sm:pr-12 pl-2 pr-24 relative w-1/2  sm:left-1/2 left-0 animate-movedown">
                    <div className=" bg-white w-10 h-10 rounded-full absolute  sm:-left-5 -right-5 z-10" />
                    <a href="https://github.com/PremSagarS/ethprop"><img src={git.src} alt="gitbhib" className=" w-10 h-10 rounded-full absolute sm:-left-5 -right-5 z-10" /></a>
                    <div className="flex flex-col justify-center items-center text-center pt-10 pb-10 sm:pl-10 sm:pr-16 sm:mt-0 pr-16 pl-20 mt-12  bg-white relative rounded-lg text-base">
                        <h2 className="font-semibold sm:text-xl">Decentralized Rental Properties</h2>
                        <small className="inline-block mb-15 mt-3 mb-2">Using Blockchain</small>
                        <p>House Of Developers - Finalist</p>
                    </div>
                    <div className="sm:opacity-100 opacity-0 w-0 h-0 border-y-21 border-y-transparent sm:border-r-21 sm:border-l-0 border-l-21 border-white absolute sm:top-14 z-1 sm:left-20 right-0 top-24"></div>
                </div>

                <div className="pt-10 pb-10 sm:pl-12 pl-2 pr-24 relative w-1/2  left-0 animate-movedown">
                    <div className=" bg-white w-10 h-10 rounded-full absolute -right-5  z-10" />
                    <a href="https://github.com/vijayarun00100/WELL-IT-"><img src={git.src} alt="gitbhib" className=" w-10 h-10 rounded-full absolute -right-5 z-10" /></a>
                    <div className="flex flex-col justify-center items-center text-center pt-10 pb-10 sm:pl-10 sm:pr-16 sm:mt-0 pr-16 pl-20 mt-12 bg-white rounded-lg text-base">
                        <h2 className="font-semibold sm:text-xl">Groundwater Forecast System</h2>
                        <small className="inline-block mb-15 mt-3 mb-2">Using ML</small>
                        <p>Smart India Hackathon</p>
                    </div>
                    <div className="sm:opacity-100 opacity-0 w-0 h-0 border-y-21 border-y-transparent border-l-21 absolute sm:top-14 z-1 sm:right-20 right-0 top-24 border-white"></div>
                </div>

                <div className="pt-10 pb-10 sm:pl-24 sm:pr-12 pl-2 pr-24 relative w-1/2  sm:left-1/2 left-0 animate-movedown">
                    <div className=" bg-white w-10 h-10 rounded-full absolute  sm:-left-5 -right-5 z-10" />
                    <a href="https://github.com/vijayarun00100/testReo"><img src={git.src} alt="gitbhib" className=" w-10 h-10 rounded-full absolute sm:-left-5 -right-5 z-10" /></a>
                    <div className="flex flex-col justify-center items-center text-center pt-10 pb-10 sm:pl-10 sm:pr-16 sm:mt-0 pr-16 pl-20 mt-12  bg-white relative rounded-lg text-base">
                        <h2 className="font-semibold sm:text-xl">Sehyogini - A web platform for single mother</h2>
                        <small className="inline-block mb-15 mt-3 mb-2">Using React & ML</small>
                        <p>DevsHouse'24 - Winner</p>
                    </div>
                    <div className="sm:opacity-100 opacity-0 w-0 h-0 border-y-21 border-y-transparent sm:border-r-21 sm:border-l-0 border-l-21 border-white absolute sm:top-14 z-1 sm:left-20 right-0 top-24"></div>
                </div>

                <div className="pt-10 pb-10 sm:pl-12 pl-2 pr-24 relative w-1/2  left-0 animate-movedown">
                    <div className=" bg-white w-10 h-10 rounded-full absolute -right-5  z-10" />
                    <a href="https://github.com/vijayarun00100/cps_hackathon"><img src={git.src} alt="gitbhib" className=" w-10 h-10 rounded-full absolute -right-5 z-10" /></a>
                    <div className="flex flex-col justify-center items-center text-center pt-10 pb-10 sm:pl-10 sm:pr-16 sm:mt-0 pr-16 pl-20 mt-12 bg-white rounded-lg text-base">
                        <h2 className="font-semibold sm:text-xl">G-Assistant</h2>
                        <small className="inline-block mb-15 mt-3 mb-2">Using LLM '
                        Nous-Capybara-limarpv3-7B-GGUF'</small>
                        <p>CPS Hackathon'24 - Winner</p>
                    </div>
                    <div className="sm:opacity-100 opacity-0 w-0 h-0 border-y-21 border-y-transparent border-l-21  absolute sm:top-14 z-1 sm:right-20 right-0 top-24 border-white"></div>
                </div>
            </div>
            <div className="pb-56" />
        </div>
    );
}
