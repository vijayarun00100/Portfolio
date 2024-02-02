"use client"
import React from "react"
import Work from "@/public/images/about.png"
import Cursor from "@/public/images/cursor.png"
import Server from "@/public/images/server.png"
import Ml from "@/public/images/ml.png"
import Arm from "@/public/images/arm.png"
export default function about(){
    return(
        <div className="flex flex-row h-fit text-white pb-10 overflow-hidden">
            <div className="bg-black w-10/12 h-full bg-opacity-30 mt-24 ml-36 rounded-xl items-center justify-center">
                
                <div className="flex">
                <p className="text-white font-semibold text-4xl mt-24 ml-24">About</p>
                <img src={Work.src} alt="man with laptop" className="w-96 h-96 mt-64 absolute left-32"></img>
                <ul className="ml-52 mr-10 w-11/12">
                    <div className="flex p-5 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-500 bg-opacity-10 mt-10">
                        <li>
                            <img src={Cursor.src} alt="cursor" className="w-12 h-12"></img>
                            <h3>Front End</h3>
                            <p className="mt-5">I am a front end developer with experience in building responsive and optimized sites</p>
                        </li>
                    </div>
                    <div className="flex p-5 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-500 bg-opacity-20 mt-10">
                        <li>
                            <img src={Server.src} alt="server" className="w-14 h-14"></img>
                            <h3>Back End</h3>
                            <p className="mt-5">I have experience developing fast and optimized Back-End systems and API's </p>
                        </li>
                    </div>
                    <div className="flex p-5 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-500 bg-opacity-20 mt-10">
                        <li>
                            <img src={Ml.src} alt="nets" className="w-12 h-12"></img>
                            <h3>ML & DL</h3>
                            <p className="mt-5">I have experience with creating ML and DL models with good accuracy !</p>
                        </li>
                    </div>
                    <div className="flex p-5 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-500 bg-opacity-20 mt-10">
                        <li>
                            <img src={Arm.src} alt="arm" className="w-14 h-14"></img>
                            <h3>Robotics</h3>
                            <p className="mt-5">I have experience in working on Bots ,used ROS</p>
                        </li>
                    </div>
                </ul>
                </div>
                <div className="mb-10"></div>
            </div>
        </div>
    );
}