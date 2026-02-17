"use client";
import React from "react";
import { motion } from "framer-motion";

const educationData = [
    {
        degree: "B.Tech in Computer Science",
        institution: "Ajeenkya DY Patil University",
        date: "Aug 2022 - Jun 2026",
        location: "Pune, Maharashtra",
        description: "" // Optional description if needed
    },
    {
        degree: "HSC",
        institution: "Maharashtra Junior College, A.nagar",
        date: "Jun 2019 - May 2021",
        location: "Ahmednagar, Maharashtra",
        description: ""
    },
    {
        degree: "SSC",
        institution: "Sacred Heart Convent High School",
        date: "Jun 2008 - May 2019",
        location: "Ahmednagar, Maharashtra",
        description: ""
    }
];

export const Education = () => {
    return (
        <section className="flex flex-col items-center justify-center py-20" id="education">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Education
            </h1>
            <div className="w-full max-w-4xl px-10 flex flex-col gap-10">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-center border border-[#2A0E61] p-6 rounded-lg glass-card"
                    >
                        <div className="flex flex-col">
                            <h2 className="text-xl font-bold text-white">{edu.degree}</h2>
                            <p className="text-gray-400">{edu.institution}</p>
                            <p className="text-gray-500 text-sm">{edu.location}</p>
                        </div>
                        <div className="flex flex-col items-end mt-2 md:mt-0">
                            <span className="text-gray-500">{edu.date}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
