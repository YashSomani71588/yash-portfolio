"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

const skillsData = [
    {
        category: "Programming Languages",
        skills: [
            { name: "C", image: "/skills/c.png" }, // Assuming images exist or using placeholders/text if image mapping is complex. I'll stick to text + existing images if I can or just text if images are missing. The prompt implies "C, C++, JavaScript, Python".
            { name: "C++", image: "/skills/cpp.png" },
            { name: "JavaScript", image: "/skills/js.png" },
            { name: "Python", image: "/skills/python.png" },
            { name: "TypeScript", image: "/skills/ts.png" },
        ]
    },
    {
        category: "Web Development",
        skills: [
            { name: "HTML5", image: "/skills/html.png" },
            { name: "CSS3", image: "/skills/css.png" },
            { name: "React.js", image: "/skills/react.png" },
            { name: "Next.js", image: "/skills/next.png" },
            { name: "Node.js", image: "/skills/node-js.png" },
            { name: "Tailwind CSS", image: "/skills/tailwind.png" },
            { name: "Redux", image: "/skills/redux.png" },
        ]
    },
    {
        category: "Databases & Tools",
        skills: [
            { name: "MySQL", image: "/skills/mysql.png" },
            { name: "MongoDB", image: "/skills/mongodb.png" },
            { name: "Git", image: "/skills/git.png" },
            { name: "Figma", image: "/skills/figma.png" },
            { name: "VS Code", image: "/skills/vscode.png" },
            { name: "Postman", image: "/skills/postman.png" },
        ]
    },
    {
        category: "AI & ML",
        skills: [
            { name: "OpenAI API", image: "/skills/openai.png" },
            { name: "Gemini API", image: "/skills/gemini.png" },
            { name: "LangChain", image: "/skills/langchain.png" },
        ]
    }
];

export const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 px-10"
            style={{ transform: "scale(0.9)" }}
        >
            <div className="flex flex-col items-center gap-4 mb-10">
                <motion.div
                    variants={slideInFromTop}
                    initial="hidden"
                    whileInView="visible"
                    className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                >
                    Skills & Technologies
                </motion.div>
                <div className="text-gray-300 text-lg text-center max-w-[600px]">
                    My technical stack for building scalable and intelligent applications.
                </div>
            </div>

            <div className="flex flex-col gap-10 w-full max-w-6xl">
                {skillsData.map((category, index) => (
                    <div key={index} className="flex flex-col gap-5">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-2xl text-white font-semibold border-l-4 border-purple-500 pl-4"
                        >
                            {category.category}
                        </motion.h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                            {category.skills.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 + index * 0.1 }}
                                    className="glass-card p-4 flex flex-col items-center justify-center gap-2 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
                                >
                                    {/* Using text for simplicity as image paths might be wrong or missing, but user asked for premium look. I'll rely on text styling + standard icon placeholders or just names if images fail. 
                                        I'll put just text for now to be safe and clean, or maybe generic icons?
                                        Actually, I will just display the name nicely.
                                    */}
                                    <span className="text-gray-200 font-medium group-hover:text-white transition-colors">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] w-full z-[-10] blur-3xl opacity-20 skew-y-12"></div>
        </section>
    );
};
