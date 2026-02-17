import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20" id="contact">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                Contact Me
            </h1>
            <div className="w-full max-w-4xl flex flex-col md:flex-row gap-10 px-10">

                {/* Contact Info */}
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <h2 className="text-2xl font-bold text-white">Let&apos;s Connect</h2>
                    <p className="text-gray-300">
                        I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll get back to you!
                    </p>
                    <div className="flex flex-col gap-4 mt-4">
                        <a href="mailto:yashcse47@gmail.com" className="flex items-center gap-4 text-gray-200 hover:text-cyan-400 transition-colors">
                            <div className="p-3 bg-white/5 rounded-full border border-white/10">
                                <Mail size={20} />
                            </div>
                            <span className="text-lg">yashcse47@gmail.com</span>
                        </a>
                        <a href="https://linkedin.com/in/yash-somani-354750285" target="_blank" className="flex items-center gap-4 text-gray-200 hover:text-cyan-400 transition-colors">
                            <div className="p-3 bg-white/5 rounded-full border border-white/10">
                                <Linkedin size={20} />
                            </div>
                            <span className="text-lg">LinkedIn Profile</span>
                        </a>
                        <a href="https://github.com/YashSomani71588" target="_blank" className="flex items-center gap-4 text-gray-200 hover:text-cyan-400 transition-colors">
                            <div className="p-3 bg-white/5 rounded-full border border-white/10">
                                <Github size={20} />
                            </div>
                            <span className="text-lg">GitHub Profile</span>
                        </a>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full md:w-1/2 p-8 border border-[#2A0E61] rounded-2xl glass-card">
                    <form className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-white text-sm font-medium">Your Email</label>
                            <input type="email" placeholder="john@example.com" className="p-3 rounded-lg bg-[#111] border border-[#2A0E61] text-white focus:outline-none focus:border-purple-500 transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-white text-sm font-medium">Message</label>
                            <textarea placeholder="Hello, I'd like to talk about..." rows={5} className="p-3 rounded-lg bg-[#111] border border-[#2A0E61] text-white focus:outline-none focus:border-purple-500 transition-colors" />
                        </div>
                        <button className="button-primary w-full py-3 rounded-lg font-bold mt-2">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
