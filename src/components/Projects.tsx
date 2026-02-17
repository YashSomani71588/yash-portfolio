"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

export const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="TrueBharat"
                    title="True Bharat - Scam Scanner"
                    description="Real-time call scam detection using microphone input and keyword analysis. Features popup notifications and haptic feedback."
                    tags={["Python", "AI/ML", "Real-time"]}
                    github="https://github.com/YashSomani71588"
                />
                <ProjectCard
                    src="BuildPro"
                    title="Build Pro - Construction Site"
                    description="A complete responsive construction company website with sticky nav, counters, and form validation."
                    tags={["HTML", "CSS", "JavaScript", "Figma"]}
                    github="https://github.com/YashSomani71588/build_pro"
                />
            </div>
        </div>
    );
};
