"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
    return (
        <nav>
            <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
                <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                    <Link
                        href="#home"
                        className="h-auto w-auto flex flex-row items-center"
                    >
                        <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                            Yash Somani
                        </span>
                    </Link>

                    <div className="w-auto h-full flex flex-row items-center justify-between md:mr-20">
                        <div className="flex items-center gap-6 w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 font-medium text-sm">
                            <a href="#about" className="cursor-pointer hover:text-cyan-400 transition">
                                About
                            </a>
                            <a href="#skills" className="cursor-pointer hover:text-cyan-400 transition">
                                Skills
                            </a>
                            <a href="#projects" className="cursor-pointer hover:text-cyan-400 transition">
                                Projects
                            </a>
                            <a href="#experience" className="cursor-pointer hover:text-cyan-400 transition">
                                Experience
                            </a>
                            <a href="#education" className="cursor-pointer hover:text-cyan-400 transition">
                                Education
                            </a>
                            <a href="#achievements" className="cursor-pointer hover:text-cyan-400 transition">
                                Awards
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-row gap-5">
                        <Link href="https://github.com/YashSomani71588" target="_blank" className="text-gray-300 hover:text-white transition">
                            <Github />
                        </Link>
                        <Link href="https://linkedin.com/in/yash-somani-354750285" target="_blank" className="text-gray-300 hover:text-white transition">
                            <Linkedin />
                        </Link>
                        <Link href="mailto:yashcse47@gmail.com" className="text-gray-300 hover:text-white transition">
                            <Mail />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
