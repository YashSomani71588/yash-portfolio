import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <Link href="https://github.com/YashSomani71588" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Github className="mr-2 h-5 w-5" />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </Link>
                        <Link href="https://linkedin.com/in/yash-somani-354750285" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Linkedin className="mr-2 h-5 w-5" />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </Link>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Contact</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">+91 93592 33098</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">yashcse47@gmail.com</span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Yash Somani 2026 Inc. All rights reserved
                </div>
            </div>
        </div>
    );
};
