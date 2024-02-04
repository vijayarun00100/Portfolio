"use client"
import React from "react"
import Movie from "@/public/images/movies.jpg"
import Student from "@/public/images/student.jpg"
import Learning from "@/public/images/learning.jpg"
import Property from "@/public/images/rent.jpg"
import Groundwater from "@/public/images/groundwater.png"
export default function project(){
    return(
        <div>
            <h3 className=" text-white mt-16 font-semibold text-3xl text-center justify-center items-center">Projects</h3>
            <div className="flex xl:flex-row justify-center items-center h-11/12 ">
                <div className="grid xl:grid-rows-2 xl:grid-cols-3 gap-6 list-none mt-16">
                <li className="bg-white/10 xl:w-96 w-72 md:w-96 h-11/12  rounded-2xl text-white flex flex-col mx-auto">
                        <img src={Movie.src} alt="movie" className="w-96 h-96 rounded-2xl m-0" loading="lazy"/>
                        <div className=" flex flex-col justify-center items-center">
                            <h3 className="text-semibold text-2xl text-center">Movie Recommendation System</h3>
                            <p className="text-center mt-10">Discover cinematic gems tailored to your taste with our Movie Recommendation System. Utilizing advanced axlorithms, it analyzes your viewing history and preferences to suggest a curated list of films, ensuring every movie night is a hit.Collabrative filtering is used to make the above !</p>  
                            <button className=" bg-gradient-to-r from-blue-600 to-blue-400 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-2xl w-24 h-14 xl:mt-11 mb-2"><a href="https://github.com/vijayarun00100/movie-recommendation-system">Source</a></button>
                        </div>
                    </li>
                    <li className="bg-white/10 xl:w-96 w-72 md:w-96 h-11/12  rounded-2xl text-white flex flex-col mx-auto ">
                        <img src={Student.src} alt="student" className="w-96 h-96 rounded-2xl" loading="lazy"/>
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-semibold text-2xl text-center">Students Performance Prediction </h3>
                            <p className="text-center mt-10 ">Unlock the potential of personalized education with our Students Performance Prediction system. By harnessing data analytics and machine learning, we empower educators to forecast students' academic outcomes, enabling targeted interventions for success .</p>
                            <button className=" bg-gradient-to-r from-blue-600 to-blue-400 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-2xl w-24 h-14 xl:mt-11 mb-2 mt-11"><a href="https://github.com/vijayarun00100/student-performance">Source</a></button>
                        </div>
                    </li>
                    <li className="bg-white/10 xl:w-96 w-72 md:w-96 h-11/12  rounded-2xl text-white flex flex-col mx-auto justify-center items-center">
                        <img src={Learning.src} alt="learning" className="w-96 h-96 rounded-2xl" loading="lazy"/>
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-semibold text-2xl text-center">Decentralized Learning Platform </h3>
                            <p className="text-center mt-10 ">Embrace the decentralized education revolution with our Learning Platform, fueled by blockchain for secure peer-to-peer learning. Liberate from centralized constraints, empower global learners through a borderless ecosystem, and actively shape the future of education!</p>
                            <button className=" bg-gradient-to-r from-blue-600 to-blue-400 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-2xl w-24 h-14 xl:mt-11 mb-2 mt-11"><a href="https://github.com/vijayarun00100/student-performance">Source</a></button>
                        </div>
                    </li>
                    <li className="bg-white/10 xl:w-96 w-72 md:w-96 h-11/12 rounded-2xl text-white flex flex-col mx-auto">
                        <img src={Property.src} alt="Property" className="w-96 h-96 rounded-2xl" loading="lazy"/>
                        <div className="flex flex-col justify-center items-center">      
                            <h3 className="text-semibold text-2xl text-center">Decentralized Rental Properties</h3>
                            <p className="text-center mt-10 ">Enter the future of leasing with our Decentralized Rental Properties platform. Utilizing blockchain, we remove intermediaries for a transparent, secure environment. Enjoy hassle-free transactions and xlart contracts in a revolutionary decentralized marketplace, offering autonomy and efficiency.</p>
                            <button className=" bg-gradient-to-r from-blue-600 to-blue-400 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-2xl w-24 h-14 xl:mt-11 mb-2 mt-11"><a href="https://github.com/vijayarun00100/student-performance">Source</a></button>
                        </div>  
                    </li>
                    <li className="bg-white/10 xl:w-96 w-72 md:w-96 h-11/12  rounded-2xl text-white flex flex-col mx-auto">
                        <img src={Groundwater.src} alt="groundwater" className="w-96 h-96 rounded-2xl" loading="lazy"/>
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-semibold text-2xl text-center">Groundwater Forecast System </h3>
                            <p className="text-center mt-10 ">Elevate water resource management with our Groundwater Forecast System. Using advanced modeling and analytics, predict trends for sustainable groundwater utilization. Gain real-time insights to address challenges and revolutionize water management for a resilient future.</p>
                            <button className=" bg-gradient-to-r from-blue-600 to-blue-400 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-2xl w-24 h-14 xl:mt-11 mb-2 mt-11"><a href="https://github.com/vijayarun00100/student-performance">Source</a></button>
                        </div>
                    </li>
                    {/* <li className="bg-white/10 w-96 h-96 rounded-2xl text-white flex justify-center items-center flex-col">
                        <img src={Student.src} alt="student" className="w-96 h-96 rounded-2xl" />
                    </li> */}
                </div>
            </div>
        </div>
    );
}
