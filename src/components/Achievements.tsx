"use client";
import React from "react";
import { motion } from "framer-motion";

const awards = [
    { title: "NSS State Republic Day Parade Camp", location: "Mumbai", date: "Jan 2025" },
    { title: "Viksit Bharat Young Leaders' Dialogue", location: "New Delhi", date: "Feb 2025" },
    { title: "Viksit Bharat Youth Parliament (District Level)", location: "", date: "Mar 2025" },
    { title: "Special Awardee", location: "9th Convocation Ceremony", date: "Jun 2025" },
    { title: "Service Star Award", location: "NSS District Level", date: "Jun 2025" },
    { title: "Inspirational Youth Representation Award", location: "", date: "Jun 2024" }
];

const certifications = [
    { title: "Sigma 8 Full Stack Development", issuer: "Apna College", date: "Oct 2023 - Oct 2024" },
    { title: "Certified Course in VR App Building", issuer: "", date: "Jun 2022" },
    { title: "Data Visualization with Tableau", issuer: "", date: "Jun 2022" },
    { title: "Certified in Product Development for Small Businesses and Startups", issuer: "", date: "Jun 2022" }
];

export const Achievements = () => {
    return (
        <section className="flex flex-col items-center justify-center py-20 px-10 relative" id="achievements">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center">
                Achievements & Awards
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
                {awards.map((award, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col justify-between border border-[#2A0E61] p-6 rounded-2xl glass-card hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]"
                    >
                        <div>
                            <h2 className="text-lg font-bold text-white mb-2">{award.title}</h2>
                            {award.location && <p className="text-purple-300 text-sm font-medium">{award.location}</p>}
                        </div>
                        <span className="text-gray-500 text-xs mt-4 text-right">{award.date}</span>
                    </motion.div>
                ))}
            </div>

            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 mt-10 text-center">
                Certifications
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col justify-between border border-[#2A0E61] p-5 rounded-2xl glass-card hover:bg-white/5 transition-all duration-300"
                    >
                        <div>
                            <h2 className="text-md font-bold text-white mb-2 line-clamp-2">{cert.title}</h2>
                            {cert.issuer && <p className="text-cyan-400 text-xs font-medium">{cert.issuer}</p>}
                        </div>
                        <span className="text-gray-500 text-xs mt-4">{cert.date}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
