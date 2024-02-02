"use client"
import React from "react"
import Tf from "@/public/images/tf.png"
import Sl from '@/public/images/scikit.png'
import reactjs from "@/public/images/react.png"
import Next from "@/public/images/next.png"
import tailwind from "@/public/images/tailwind.png"
import opencv from "@/public/images/opencv.png"
import js from "@/public/images/js.png"
import ros from "@/public/images/ros.png"
import sql from "@/public/images/sql.png"
export default function experience(){
    return(
        <div className="flex text-white overflow-hidden mt-28 list-none">
            <div className="ml-48 flex-row">
                <h3 className="font-semibold text-3xl mb-10">EXPERIENCE</h3>
                <div className="flex flex-row">
                    <div className="grid grid-cols-3 gap-6 list-none mt-5">
                        <div className="flex flex-col">
                            <div className="ml-10 bg-white/10 w-24 h-24 rounded-full">
                                <img src={Tf.src} alt="tf" className="w-12 h-14 ml-6 mt-5"></img>
                            </div>
                            <p className="ml-12 mt-3">Tensorflow</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="ml-10 bg-white/10 w-24 h-24 rounded-full">
                                <img src={Sl.src} alt="sl" className="w-20 h-20 ml-2 mt-2"></img>
                            </div>
                            <p className="ml-12 mt-3">scikit learn</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="ml-10 bg-white/10 w-24 h-24 rounded-full">
                                <img src={reactjs.src} alt="React" className="w-18 h-14 ml-4 mt-5"></img>
                            </div>
                            <p className="ml-16 mt-3">React JS</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="ml-10 bg-white/10 w-24 h-24 rounded-full">
                                <img src={Next.src} alt="next" className="w-20 h-20 ml-2 mt-2"></img>
                            </div>
                            <p className="ml-14 mt-3">Next JS</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="ml-10 bg-white/10 w-24 h-24 rounded-full">
                                <img src={tailwind.src} alt="tailwind" className="w-16 h-16 mt-4 ml-4"></img>
                            </div>
                            <p className="ml-12 mt-3">Tailwind CSS</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="ml-10 bg-white/10 w-24 h-24 rounded-full">
                                <img src={opencv.src} alt="opencv" className="w-20 h-18 ml-2 mt-2"></img>
                            </div>
                            <p className="ml-14 mt-3">Open CV</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="ml-10 bg-white/10 w-24 h-24 rounded-full">
                                <img src={js.src} alt="js" className="w-24 h-24 ml-0 mt-0"></img>
                            </div>
                            <h3 className="ml-20 mt-3">JS</h3>
                        </div>
                        <div className="flex flex-col">
                            <div className="ml-10 bg-white/10 w-24 h-24 rounded-full">
                                <img src={ros.src} alt="ros" className="w-12 h-12 ml-6 mt-6"></img>
                            </div>
                            <h3 className="ml-20 mt-3">ROS</h3>
                        </div>
                        <div className="flex flex-col">
                            <div className="ml-10 bg-white/10 w-24 h-24 rounded-full">
                                <img src={sql.src} alt="sql" className="w-14 h-14 ml-6 mt-5"></img>
                            </div>
                            <h3 className="ml-20 mt-3">SQL</h3>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600/10 bg-opacity-10 ml-72 w-96 h-32">
                                <li>
                                    <h3>GDSC - Google Developer Student Club</h3>
                                    <p className="mt-5">Web Dev - Core Member</p>
                                </li>
                        </div>
                        <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600/10 bg-opacity-10 w-96 h-32 mt-10 ml-72">
                                <li>
                                    <h3>CYSCOM</h3>
                                    <p className="mt-5">Technical - Cybersec Analyst</p>
                                </li>
                        </div>
                        <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600/10 bg-opacity-10 w-96 h-32 mt-10 ml-72">
                                <li>
                                    <h3>Dreadnought Robotics</h3>
                                    <p className="mt-5">Programmer  - Programming Team</p>
                                </li>
                        </div>
                    </div> 
                </div>
                <div className="mt-14 text-lg bg-gradient-to-r to-blue-600/10 from-sky-700/10 bg-opacity-10 w-5/6 p-6 rounded-2xl ">
                    <h3><span className="text-2xl">Skills:</span><span className="ml-9">Python , Java , C , C++ , Html, CSS , JS, React, Node JS, SQL,</span><br /><span className="ml-24">Assembly Language, 
Solidity ,ROS, OpenCV, </span><br /><span className="ml-24">Arduino, TensorFlow, scikit learn, ML , DL , Pandas , NumPy.</span></h3>
                </div>
            </div>
        </div>
    );
}