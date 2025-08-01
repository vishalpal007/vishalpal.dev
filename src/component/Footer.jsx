import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    const techStack = ['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'Firebase'];

    return (
        <footer className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/70 text-white overflow-hidden pt-16 pb-8 px-4 border-t border-gray-700/50">
            {/* Subtle floating particles */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-500/10"
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 15, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 12 + Math.random() * 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 8 + 4}px`,
                        height: `${Math.random() * 8 + 4}px`,
                        filter: 'blur(2px)',
                    }}
                ></motion.div>
            ))}

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Grid layout for content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Brand info */}
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center justify-center mb-4">
                            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-lg">
                                <span className="text-white font-bold text-sm">&lt;/&gt;</span>
                            </div>
                            <h2 className="text-xl font-bold text-white">
                                Vishal<span className="text-cyan-400">.Dev</span>
                            </h2>
                        </div>
                        <p className="text-gray-300 mb-4 max-w-xs mx-auto md:mx-0">
                            Creating elegant, efficient solutions for the modern web.
                        </p>

                        {/* Admin button */}
                        <motion.div
                            className="mt-4"
                            whileHover={{ y: -3 }}
                        >
                            <Link
                                to="/admin/login"
                                className="inline-flex items-center px-5 py-2.5 font-medium rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 text-white 
                                    shadow-[0_4px_15px_rgba(0,0,0,0.3)] relative overflow-hidden border border-gray-600/50 group"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                                    Admin Dashboard
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Quick links */}
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                >
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-gray-300 hover:text-cyan-300 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech stack */}
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2 inline-block">Tech Stack</h3>
                        <div className="flex flex-wrap justify-center gap-2 max-w-xs mx-auto">
                            {techStack.map((tech, idx) => (
                                <motion.div
                                    key={idx}
                                    className="px-3 py-1.5 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-xs font-medium text-cyan-300"
                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
                                >
                                    {tech}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mx-auto w-full h-px bg-gradient-to-r from-transparent via-gray-600/30 to-transparent my-8"></div>

                {/* Copyright and signature */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                        <div className="text-sm text-gray-400">
                            © 2024 All Rights Reserved
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="text-lg font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                                Vishal Pal
                            </span>
                        </div>
                    </div>

                    <div className="text-center md:text-right">
                        <div className="text-sm text-gray-400 font-light italic">
                            Crafted with <span className="text-cyan-400">❤️</span> in India
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;