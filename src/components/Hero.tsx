"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { Sparkles } from "lucide-react";

export const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full" id="home">
            <div className="relative w-full h-full flex flex-col justify-center items-center z-20 pt-40">
                <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center items-center px-10 max-w-7xl">
                    <motion.div
                        variants={slideInFromTop}
                        initial="hidden"
                        animate="visible"
                        className="welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] glass-card flex items-center justify-center w-fit mb-4"
                    >
                        <Sparkles className="text-[#b49bff] mr-[10px] h-5 w-5" />
                        <h1 className="text-white text-[13px] font-medium tracking-wider">
                            WELCOME TO MY PORTFOLIO
                        </h1>
                    </motion.div>

                    <motion.div
                        variants={slideInFromLeft(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-4 text-6xl md:text-7xl font-bold text-white max-w-[800px] w-auto h-auto mt-2"
                    >
                        <span>
                            Yash Somani
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-4xl md:text-5xl">
                            Computer Engineer | AI & Web Developer
                        </span>
                    </motion.div>

                    <motion.div
                        variants={slideInFromLeft(0.8)}
                        initial="hidden"
                        animate="visible"
                        className="text-lg text-gray-400 my-5 max-w-[600px] font-light tracking-wide"
                    >
                        Building intelligent systems and immersive web experiences.
                        I bridge the gap between complex AI logic and user-friendly interfaces.
                    </motion.div>

                    <motion.div
                        variants={slideInFromLeft(1)}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col md:flex-row gap-5 justify-center items-center mt-4"
                    >
                        <a href="#projects" className="button-primary cursor-pointer">
                            View Projects
                        </a>
                        <a href="#contact" className="button-secondary cursor-pointer">
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Background Gradient Effect */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 rotate-180 opacity-40">
                <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-purple-900 blur-[150px]" />
                <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-cyan-900 blur-[150px]" />
            </div>
        </div>
    );
};
