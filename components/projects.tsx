"use client"
import React from "react"
import Movie from "@/public/images/movie.jpeg"
import Student from "@/public/images/student.jpg"
import Learning from "@/public/images/learning.jpg"
import Property from "@/public/images/rent.jpg"
import Groundwater from "@/public/images/groundwater.png"
export default function project(){
    return(
        <div className="flex flex-col">
            <h3 className="font-semibold text-3xl text-white ml-48 mt-24">Projects</h3>
            <div className="flex flex-row mb-10 h-dvh text-white ml-44 mt-10">
                <div className="bg-white/10 background-opacity-10 w-96 h-full rounded-2xl mr-10 flex flex-col justify-center items-center">
                    <div className="bg-white/10 h-full w-full rounded-2xl">
                        <img src={Movie.src} alt="movie" className="w-full h-full rounded-2xl"/>
                    </div>
                    <p className="text-semibold text-2xl mt-2">Movie Recommendation System</p>
                    <p className="ml-5 mt-20">Discover cinematic gems tailored to your taste with our Movie Recommendation System. Utilizing advanced algorithms, it analyzes your viewing history and preferences to suggest a curated list of films, ensuring every movie night is a hit.</p>
                    <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-2xl w-24 h-14 mt-3 mb-5"><a href="https://github.com/vijayarun00100/movie-recommendation-system">Source</a></button>
                </div>
                <div className="bg-white/10 background-opacity-10 w-96 h-full rounded-2xl mr-10 flex flex-col justify-center items-center">
                    <div className="bg-white/10 h-full w-full rounded-2xl">
                        <img src={Student.src} alt="student" className="w-full h-full rounded-2xl"/>
                    </div>
                    <p className="text-semibold text-2xl mt-2">Students Performance Prediction </p>
                    <p className="ml-5 mt-12">Unlock the potential of personalized education with our Students Performance Prediction system. By harnessing data analytics and machine learning, we empower educators to forecast students' academic outcomes, enabling targeted interventions for success.</p>
                    <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-2xl w-24 h-14 mt-3 mb-5"><a href="https://github.com/vijayarun00100/student-performance">Source</a></button>
                </div>
                <div className="bg-white/10 background-opacity-10 w-96 h-full rounded-2xl flex flex-col justify-center items-center">
                    <div className="bg-white/10 h-full w-full rounded-2xl">
                    <img src={Learning.src} alt="blockchain" className="w-full h-96 rounded-2xl"/>
                    </div>
                    <p className="text-semibold text-2xl mt-5">Decentralized Learning Platform</p>
                    <p className="ml-5 mt-10">Embrace the decentralized education revolution with our Learning Platform, fueled by blockchain for secure peer-to-peer learning. Liberate from centralized constraints, empower global learners through a borderless ecosystem, and actively shape the future of education!</p>
                    <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-2xl w-24 h-14 mt-3 mb-5"><a href="https://github.com/sairamnst/reva-hack">Source</a></button>
                </div>
            </div>
            <div className="flex flex-row mb-10 h-dvh text-white ml-44 mt-10">
                <div className="bg-white/10 background-opacity-10 w-96 h-full rounded-2xl mr-10 flex flex-col justify-center items-center">
                    <div className="bg-white/10 h-full w-full rounded-2xl">
                        <img src={Property.src} alt="property"  className="h-full w-full rounded-2xl"/>
                    </div>
                    <p className="text-semibold text-2xl mt-2"> Decentralized Rental Properties</p>
                    <p className="ml-5 mt-14">Enter the future of leasing with our Decentralized Rental Properties platform. Utilizing blockchain, we remove intermediaries for a transparent, secure environment. Enjoy hassle-free transactions and smart contracts in a revolutionary decentralized marketplace, offering autonomy and efficiency.</p>
                    <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-2xl w-24 h-14 mt-3 mb-5"><a href="https://github.com/PremSagarS/ethprop">Source</a></button>
                </div>
                <div className="bg-white/10 background-opacity-10 w-96 h-full rounded-2xl mr-10 flex flex-col justify-center items-center">
                    <div className="bg-white/10 h-full w-full rounded-2xl">
                        <img src={Groundwater.src} alt="underwater forcast system" className="w-full h-full rounded-2xl" />
                    </div>
                    <p className="text-semibold text-2xl mt-2">Groundwater Forecast System </p>
                    <p className="ml-5 mt-14">Elevate water resource management with our Groundwater Forecast System. Using advanced modeling and analytics, predict trends for sustainable groundwater utilization. Gain real-time insights to address challenges and revolutionize water management for a resilient future.</p>
                    <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-2xl w-24 h-14 mt-3 mb-5"><a href="https://github.com/vijayarun00100/WELL-IT-">Source</a></button>
                </div>
            </div>
        </div>
    );
}