"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Full Stack Developer Intern",
        company: "Weblution Infotech LLP",
        date: "Jan 2026 - Present",
        description: "Building scalable web applications using the MERN stack. Implementing responsive UIs and optimizing backend performance."
    },
    {
        title: "Intern",
        company: "Admission Department, Ajeenkya DY Patil University",
        date: "Jun 2025 - Aug 2025",
        description: "Assisted in digitalizing admission processes and managing student data systems."
    },
    {
        title: "Student Council & Rotaract President",
        company: "Ajeenkya DY Patil University",
        date: "Present",
        description: "Leading student initiatives, organizing technical hackathons, and fostering a collaborative tech community."
    }
];

export const Experience = () => {
    return (
        <section className="flex flex-col items-center justify-center py-20" id="experience">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Experience
            </h1>
            <div className="w-full max-w-4xl px-10 flex flex-col gap-10 relative">
                {/* Vertical Line */}
                <div className="absolute left-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 to-cyan-500 md:block hidden transform -translate-x-1/2" />

                {experiences.map((exp, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-full md:w-[45%] mb-4 md:mb-0">
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col border border-[#2A0E61] p-6 rounded-2xl glass-card transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20"
                            >
                                <h2 className="text-xl font-bold text-white">{exp.title}</h2>
                                <p className="text-cyan-400 font-medium">{exp.company}</p>
                                <span className="text-gray-500 text-sm mb-2">{exp.date}</span>
                                <p className="text-gray-300 text-sm">{exp.description}</p>
                            </motion.div>
                        </div>

                        {/* Timeline Dot */}
                        <div className="md:w-[10%] flex justify-center relative my-4 md:my-0">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/50 z-10" />
                        </div>

                        <div className="w-full md:w-[45%]" />
                    </div>
                ))}
            </div>
        </section>
    );
};
