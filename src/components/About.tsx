"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const About = () => {
    return (
        <section id="about" className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20">
            <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm" // Placeholder: User would need to add this or I remove it. I'll remove it for now to avoid 404.
                    />
                </div>
            </div>

            <div className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
                <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                    <motion.div
                        variants={slideInFromLeft(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-4xl font-semibold text-white">
                        About Me
                    </motion.div>
                    <motion.p
                        variants={slideInFromLeft(0.8)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-lg text-gray-400 mt-5 max-w-[600px]">
                        I am a Computer Science Engineering Student and the Student Council President at my university.
                        I have a strong passion for leadership and technology, aiming to bridge the gap between people and inclusive software solutions.
                        <br /><br />
                        My journey involves managing student activities while honing my skills in Full Stack Development, always striving for excellence and innovation.
                    </motion.p>
                </div>

                <motion.div
                    variants={slideInFromRight(0.8)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full h-full flex justify-center items-center"
                >
                    <div className="relative w-[300px] h-[300px] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-[20px] opacity-30 animate-pulse"></div>
                    <div className="absolute glass-card p-10 text-white font-mono z-10 w-[400px]">
                        <p className="text-gray-400 mb-2">// life.ts</p>
                        <p><span className="text-purple-400">const</span> developer = <span className="text-yellow-400">{"{"}</span></p>
                        <p className="pl-4">name: <span className="text-green-400">"Yash Somani"</span>,</p>
                        <p className="pl-4">role: <span className="text-green-400">"CS Student & President"</span>,</p>
                        <p className="pl-4">coffee: <span className="text-blue-400">true</span>,</p>
                        <p className="pl-4">bugs: <span className="text-blue-400">null</span></p>
                        <p><span className="text-yellow-400">{"}"}</span>;</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
