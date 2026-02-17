"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Props {
    src: string;
    title: string;
    description: string;
    tags?: string[];
    link?: string;
    github?: string;
}

const ProjectCard = ({ src, title, description, tags = [], link = "#", github = "#" }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-2xl shadow-lg border border-[#2A0E61] group hover:border-purple-500/50 transition-all duration-300">
            {/* Placeholder image logic since we don't have real images yet, using a colored gradient block or Next Image if src is valid url. 
          Assuming src is just a key or name, I will use a gradient placeholder for now to look premium.
      */}
            <div className="w-full h-48 bg-gradient-to-br from-purple-900 to-black relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                {/* Simple text overlay as thumbnail if no image */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white/20 uppercase tracking-widest">{title.substring(0, 10)}...</h3>
                </div>
            </div>

            <div className="relative p-6 glass-card bg-[#030014] z-10 h-full flex flex-col justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-white mb-2">{title}</h1>
                    <p className="text-gray-400 text-sm line-clamp-3 mb-4">{description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/30">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-row gap-4 items-center">
                    <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors cursor-pointer font-medium">
                        <Github size={18} /> Code
                    </a>
                    <a href={link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors cursor-pointer font-medium">
                        <ExternalLink size={18} /> Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
