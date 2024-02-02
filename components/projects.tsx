"use client"
import React from "react"
import Movie from "@/public/images/movie.jpeg"
import Student from "@/public/images/student.jpg"
import Learning from "@/public/images/learning.jpg"
import Property from "@/public/images/rent.jpg"
import Groundwater from "@/public/images/groundwater.png"
export default function project(){
    return(
        <div>
            <h3 className=" text-white mt-16 font-semibold text-3xl text-center">Projects</h3>
            <div className="flex sm:flex-row justify-center items-center h-11/12 ">
                <div className="grid sm:grid-rows-2 sm:grid-cols-3 gap-6 list-none mt-16">
                    <li className="bg-white/10 sm:w-96 w-72  h-fit ml-8 mr-5 sm:h-11/12 rounded-2xl text-white flex flex-col">
                        <img src={Movie.src} alt="movie" className="w-96 h-96 rounded-2xl" />
                        <h3 className="text-semibold text-2xl text-center">Movie Recommendation System</h3>
                        <p className="text-center mt-10">Discover cinematic gems tailored to your taste with our Movie Recommendation System. Utilizing advanced algorithms, it analyzes your viewing history and preferences to suggest a curated list of films, ensuring every movie night is a hit.</p>
                        <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-2xl w-24 h-14 sm:mt-11 sm:ml-32 mt-11 ml-24"><a href="https://github.com/vijayarun00100/movie-recommendation-system">Source</a></button>
                    </li>
                    <li className="bg-white/10 sm:w-96 w-72  h-fit ml-8 mr-5 sm:h-11/12 rounded-2xl text-white flex flex-col">
                        <img src={Student.src} alt="student" className="w-96 h-96 rounded-2xl" />
                        <h3 className="text-semibold text-2xl text-center">Students Performance Prediction </h3>
                        <p className="text-center mt-10 ">Unlock the potential of personalized education with our Students Performance Prediction system. By harnessing data analytics and machine learning, we empower educators to forecast students' academic outcomes, enabling targeted interventions for success.</p>
                        <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-2xl w-24 h-14 sm:mt-5 sm:ml-36 ml-24"><a href="https://github.com/vijayarun00100/student-performance">Source</a></button>
                    </li>
                    <li className="bg-white/10 sm:w-96 w-72  h-fit ml-8 mr-5 sm:h-11/12 rounded-2xl text-white flex flex-col">
                        <img src={Learning.src} alt="learning" className="w-96 h-96 rounded-2xl" />
                        <h3 className="text-semibold text-2xl text-center">Decentralized Learning Platform </h3>
                        <p className="text-center mt-10 ">Embrace the decentralized education revolution with our Learning Platform, fueled by blockchain for secure peer-to-peer learning. Liberate from centralized constraints, empower global learners through a borderless ecosystem, and actively shape the future of education!</p>
                        <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-2xl w-24 h-14 sm:mt-5 sm:ml-36 ml-24"><a href="https://github.com/vijayarun00100/student-performance">Source</a></button>
                    </li>
                    <li className="bg-white/10 sm:w-96 w-72  h-fit ml-8 mr-5 sm:h-11/12 rounded-2xl text-white flex flex-col">
                        <img src={Property.src} alt="Property" className="w-96 h-96 rounded-2xl" />
                        <h3 className="text-semibold text-2xl text-center">Decentralized Rental Properties</h3>
                        <p className="text-center mt-10 ">Enter the future of leasing with our Decentralized Rental Properties platform. Utilizing blockchain, we remove intermediaries for a transparent, secure environment. Enjoy hassle-free transactions and smart contracts in a revolutionary decentralized marketplace, offering autonomy and efficiency.</p>
                        <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-2xl w-24 h-14 sm:mt-11 sm:ml-32 mt-10 ml-24"><a href="https://github.com/vijayarun00100/student-performance">Source</a></button>
                    </li>
                    <li className="bg-white/10 sm:w-96 w-72  h-fit ml-8 mr-5 sm:h-11/12 rounded-2xl text-white flex flex-col">
                        <img src={Groundwater.src} alt="groundwater" className="w-96 h-96 rounded-2xl" />
                        <h3 className="text-semibold text-2xl text-center">Groundwater Forecast System </h3>
                        <p className="text-center mt-10 ">Elevate water resource management with our Groundwater Forecast System. Using advanced modeling and analytics, predict trends for sustainable groundwater utilization. Gain real-time insights to address challenges and revolutionize water management for a resilient future.</p>
                        <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-2xl w-24 h-14 sm:mt-11 sm:ml-32 mt-10 ml-24"><a href="https://github.com/vijayarun00100/student-performance">Source</a></button>
                    </li>
                    {/* <li className="bg-white/10 w-96 h-96 rounded-2xl text-white flex justify-center items-center flex-col">
                        <img src={Student.src} alt="student" className="w-96 h-96 rounded-2xl" />
                    </li> */}
                </div>
            </div>
        </div>
    );
}

