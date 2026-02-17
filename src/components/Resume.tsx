"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export const Resume = () => {
    return (
        <section id="resume" className="flex flex-col items-center justify-center py-20 px-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-full max-w-4xl p-10 rounded-3xl glass-card border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-r from-purple-900/20 to-cyan-900/20"
            >
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white">Download My Resume</h2>
                    <p className="text-gray-300 max-w-md">
                        Want to know more about my experience and skills?
                        Download my resume to see the full picture properly formatted for print.
                    </p>
                </div>

                <a
                    href="/resume.pdf" // Placeholder path, user would need to add the file to public/
                    download="Yash_Somani_Resume.pdf"
                    className="button-primary flex items-center gap-3 text-lg px-8 py-4 shadow-xl hover:shadow-purple-500/40"
                    onClick={(e) => {
                        // Prevent default if file doesn't exist to avoid 404 navigation for demo
                        // e.preventDefault(); 
                        // alert("Resume file would be downloaded here. Please add resume.pdf to public folder.");
                    }}
                >
                    <FileText size={24} />
                    Download CV
                </a>
            </motion.div>
        </section>
    );
};
