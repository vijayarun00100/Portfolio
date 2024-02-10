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
import java from "@/public/images/java.png"
import python from "@/public/images/python.png"
import c from "@/public/images/c.png"
import arduino from "@/public/images/arduino.png"
import deep from "@/public/images/deep.png"
import html from "@/public/images/html.png"
import css from "@/public/images/css.svg"
import al from "@/public/images/al.png"
import ras from "@/public/images/ras.png"
import numpy from "@/public/images/numpy.svg"
import sea from "@/public/images/sea.png"
import next from "next"
export default function experience(){
    return(
        <>
        <div className="flex flex-col text-white list-none justify-center items-center">
            <div className="xl:ml-48 md:ml-5 flex-row">
                <h3 className="font-semibold text-3xl text-center lg:text-left">EXPERIENCE</h3>
                <div className="flex lg:flex-row flex-col justtify-center items-center ">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-rows-3 gap-20 list-none mt-5 sm:mt-20">  
                        <div className="flex flex-col text-center">
                            <div className=" bg-white/10 w-24 h-24 rounded-full">
                                <img src={Tf.src} alt="tf" className="w-12 h-14 ml-6 mt-5" loading="lazy"></img>
                            </div>
                            <p className="mt-3">Tensorflow</p>
                        </div>
                        <div className="flex flex-col text-center w-24">
                            <div className=" bg-white/10 w-24 h-24 rounded-full">
                                <img src={Sl.src} alt="sl" className="w-20 h-20 ml-2 mt-2" loading="lazy"></img>
                            </div>
                            <p className="mt-3">Scikit Learn</p>
                        </div>
                        <div className="flex flex-col text-center w-24">
                            <div className=" bg-white/10 w-24 h-24 rounded-full">
                                <img src={reactjs.src} alt="React" className="w-18 h-14 ml-4 mt-5" loading="lazy"></img>
                            </div>
                            <p className="mt-3">React JS</p>
                        </div>
                        <div className="flex flex-col text-center w-24">
                            <div className=" bg-white/10 w-24 h-24 rounded-full">
                                <img src={Next.src} alt="next" className="w-20 h-20 ml-2 mt-2" loading="lazy"></img>
                            </div>
                            <p className="mt-3">Next JS</p>
                        </div>
                        <div className="flex flex-col text-center w-20">
                            <div className=" bg-white/10 w-24 h-24 rounded-full">
                                <img src={tailwind.src} alt="tailwind" className="w-16 mt-7 ml-4" loading="lazy"></img>
                            </div>
                            <p className="mt-3">Tailwind CSS</p>
                        </div>
                        <div className="flex flex-col text-center w-24">
                            <div className=" bg-white/10 w-24 h-24 rounded-full">
                                <img src={opencv.src} alt="opencv" className="w-16 h-18 ml-4 mt-4" loading="lazy"></img>
                            </div>
                            <p className="mt-3">Open CV</p>
                        </div>
                        <div className="flex flex-col text-center w-24">
                            <div className=" bg-white/10 w-24 h-24 rounded-full">
                                <img src={js.src} alt="js" className="w-24 h-24 ml-0 mt-0" loading="lazy"></img>
                            </div>
                            <h3 className="mt-3">JS</h3>
                        </div>
                        <div className="flex flex-col text-center w-24">
                            <div className=" bg-white/10 w-24 h-24 rounded-full">
                                <img src={ros.src} alt="ros" className="w-10 h-10 ml-7 mt-7" loading="lazy"></img>
                            </div>
                            <h3 className="mt-3">ROS</h3>
                        </div>
                        <div className="flex flex-col text-center w-20">
                            <div className=" bg-white/10 w-24 h-24 rounded-full">
                                <img src={sql.src} alt="sql" className="w-14 h-14 ml-6 mt-5" loading="lazy"></img>
                            </div>
                            <h3 className="mt-3 text-center">SQL</h3>
                        </div>
                        <div className="flex flex-col text-center w-24">
                            <div className=" bg-white/10 w-24 h-24 rounded-full">
                                <img src={python.src} alt="python" className="w-14 h-14 ml-5 mt-6" loading="lazy"></img>
                            </div>
                            <h3 className="mt-3 text-center">Python</h3>
                        </div>
                        <div className="flex flex-col text-center w-24">
                            <div className=" bg-white/10 w-24 h-24 rounded-full">
                                <img src={c.src} alt="c" className="w-24 h-18 ml-0 mt-5" loading="lazy"></img>
                            </div>
                            <h3 className="mt-3 text-center">C</h3>
                        </div><div className="flex flex-col text-center w-24">
                            <div className=" bg-white/10 w-24 h-24 rounded-full">
                                <img src={java.src} alt="java" className="w-12 h-12 ml-5 mt-5" loading="lazy"></img>
                            </div>
                            <h3 className="mt-3 text-center">Java</h3>
                        </div>
                    </div>
                    <div className="flex flex-col sm:mt-16 mt-5 w-full">
                        <li className="p-5 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-500 bg-opacity-10 lg:ml-52 md:ml-14 md:mr-20 mr-5 ml-5 lg:mr-10 h-32 mt-10 sm:mt-0">
                            <h3>GDSC - Google Developer Student Club</h3>
                            <p className="mt-5">Web Dev - Core Member</p>
                        </li>
                        <li className="p-5 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-500 bg-opacity-10 lg:ml-52 md:ml-14 md:mr-20 mr-5 ml-5 lg:mr-10 h-32 mt-10 sm:mt-10">
                            <h3>CYSCOM</h3>
                            <p className="mt-5">Technical - Cybersec Analyst</p>
                        </li>
                        <li className="p-5 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-500 bg-opacity-10 lg:ml-52 md:ml-14 md:mr-20 mr-5 ml-5 lg:mr-10 h-32 mt-10 sm:mt-10">
                            <h3>Dreadnought Robotics</h3>
                            <p className="mt-5">Programmer  - Programming Team</p>
                        </li>
                    </div> 
                </div>
            </div>
        </div>
        <div className="grid place-items-center">
            <div className="flex justify-center items-center w-1/2 h-32 mt-10 overflow-hidden bg-white/10 rounded-2xl	backdrop-blur-md border-solid border-black">
                <div className="flex justify-center items-center gap-10 animate-slide hover:[animation-play-state:paused]">
                    {[ras , arduino ,java, opencv, Tf,numpy,sea, Sl, reactjs, Next, html ,  css , deep ,  al ,  ros, js, python, sql, tailwind,ras , arduino, opencv, Tf,numpy,sea,java, opencv, Tf, reactjs, Next, Sl, ros, js, python, sql, tailwind,java, opencv, Tf, reactjs, Next, Sl, ros, js, python, sql, tailwind,java,ras , arduino ,java, opencv, Tf,numpy,sea, Sl, reactjs, Next, html ,  css , deep ,  al ,  ros, js, python, sql, tailwind,java, opencv, Tf, reactjs, Next, Sl, ros, js, python, sql, tailwind,java, opencv, Tf, reactjs, Next, Sl, ros, js, python, sql, tailwind,java].map((ele,index)=>(  <img
                      key={index}
                      src={ele.src}
                      className="w-16 m-20 mr-1"
                      loading="lazy"
                    />))}
                </div>
            </div>
        </div>
        </> 
    );
}