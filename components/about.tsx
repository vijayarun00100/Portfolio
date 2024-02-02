"use client"
import React from "react"
import Work from "@/public/images/about.png"
import Cursor from "@/public/images/cursor.png"
import Server from "@/public/images/server.png"
import Ml from "@/public/images/ml.png"
import Arm from "@/public/images/arm.png"
export default function about(){
    return(
        <div className="flex flex-col sm:flex-row h-11/12 sm:h-fit text-white pb-10 overflow-hidden ">
            <div className="bg-black ml-4 mr-4  sm:mr-0 sm:ml-36 sm:w-10/12 h-full bg-opacity-30 mt-24 rounded-xl items-center justify-center">
                
                <div className="flex sm:flex-row flex-col">
                    <div className=" flex-row sm:flex-col sm:w-1/2">
                        <p className="text-white font-semibold text-4xl mt-24 text-center ">About</p>
                        <img src={Work.src} alt="man with laptop" className="sm:w-80 sm:mt-36 sm:mt-42 sm:ml-10 mt-10"></img>
                    </div>
                    <div className="flex justify-center items-center">
                        <ul className="sm:mr-10 m:w-11/12 sm:mt-0 sm:ml-0 sm:w-full w-40">
                                <li className="p-5 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-500 bg-opacity-10 sm:mt-10 mt-20 sm:mr-0 ">
                                    <img src={Cursor.src} alt="cursor" className="w-12 h-12"></img>
                                    <h3>Front End</h3>
                                    <p className="mt-5">I am a front end developer with experience in building responsive and optimized sites</p>
                                </li>

                                <li className="p-5 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-500 bg-opacity-20 mt-10">
                                    <img src={Server.src} alt="server" className="w-14 h-14"></img>
                                    <h3>Back End</h3>
                                    <p className="mt-5">I have experience developing fast and optimized Back-End systems and API's </p>
                                </li>

                                <li className="p-5 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-500 bg-opacity-20 mt-10">
                                    <img src={Ml.src} alt="nets" className="w-12 h-12"></img>
                                    <h3>ML & DL</h3>
                                    <p className="mt-5">I have experience with creating ML and DL models with good accuracy !</p>
                                </li>

                            <div className=" p-5 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-500 bg-opacity-20 mt-10">
                                <li>
                                    <img src={Arm.src} alt="arm" className="w-14 h-14"></img>
                                    <h3>Robotics</h3>
                                    <p className="mt-5">I have experience in working on Bots ,used ROS</p>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="mb-10"></div>
            </div>
        </div>
    );
}