import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Link } from 'react-scroll';

const Project = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Full-featured online shopping experience with real-time inventory and secure payments.",
            category: "Web App",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            hero: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            link: "#",
            github: "#"
        },
        {
            id: 2,
            title: "Fitness Tracker App",
            description: "Mobile application for workout tracking, nutrition planning, and progress visualization.",
            category: "Mobile App",
            technologies: ["React Native", "Firebase", "Redux"],
            hero: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            link: "#",
            github: "#"
        },
        {
            id: 3,
            title: "Real Estate Dashboard",
            description: "Analytics platform for property managers with visualization tools and market insights.",
            category: "Dashboard",
            technologies: ["Next.js", "Tailwind CSS", "D3.js", "Express"],
            hero: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1173&q=80",
            link: "#",
            github: "#"
        },
        {
            id: 4,
            title: "Task Management System",
            description: "Collaborative workspace with kanban boards, time tracking, and team communication.",
            category: "Productivity",
            technologies: ["Vue.js", "Node.js", "Socket.io", "PostgreSQL"],
            hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80",
            link: "#",
            github: "#"
        },
        {
            id: 5,
            title: "AI Content Generator",
            description: "AI-powered writing assistant with SEO optimization and plagiarism detection.",
            category: "AI Tool",
            technologies: ["Python", "TensorFlow", "React", "FastAPI"],
            hero: "https://images.unsplash.com/photo-1677442135722-5f5f89e0fd0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1032&q=80",
            link: "#",
            github: "#"
        },
        {
            id: 6,
            title: "Healthcare Portal",
            description: "Secure patient portal with appointment scheduling and medical records access.",
            category: "Healthcare",
            technologies: ["Angular", "TypeScript", "Java", "Spring Boot"],
            hero: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1173&q=80",
            link: "#",
            github: "#"
        }
    ];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const floatingAnimation = {
        animate: {
            y: ["0%", "-3%", "0%"],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // Particle background effect
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        size: Math.random() * 5 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 10
    }));

    return (
        <div
            id="project"
            className="relative w-full min-h-screen py-20 overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #0f172a 0%, #000 50%, #0f172a 100%)"
            }}
        >
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
                {particles.map(particle => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full bg-cyan-500/10"
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                        }}
                        animate={{
                            y: [`${particle.y}%`, `${particle.y + 10}%`, `${particle.y}%`],
                            x: [`${particle.x}%`, `${particle.x + (Math.random() * 10 - 5)}%`, `${particle.x}%`],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                <div className="absolute -top-[100px] -left-[100px] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-[150px] -right-[100px] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-emerald-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4">
                            My Creations
                        </h2>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            A showcase of my most impactful projects, crafted with modern technologies and attention to detail.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap justify-center gap-3 mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        {["All", "Web App", "Mobile App", "Dashboard", "AI Tool", "Healthcare"].map((tag) => (
                            <motion.button
                                key={tag}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeFilter === tag
                                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20"
                                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700 backdrop-blur-sm"
                                    }`}
                                onClick={() => setActiveFilter(tag)}
                            >
                                {tag}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={container}
                    initial="hidden"
                    animate={controls}
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={item}
                            className="group relative"
                            whileHover={{
                                y: -15,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 15
                                }
                            }}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                        >
                            {/* 3D Card effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

                            <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden shadow-2xl shadow-blue-500/10 group-hover:shadow-blue-500/30 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>

                                {/* Floating image container */}
                                <motion.div
                                    className="relative h-64 overflow-hidden"
                                    variants={floatingAnimation}
                                    animate="animate"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                                    <img
                                        src={project.hero}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur text-xs text-cyan-400 px-3 py-1 rounded-full">
                                        {project.category}
                                    </div>
                                </motion.div>

                                <div className="p-6 relative z-10">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse"></div>
                                            <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 mb-4 text-sm min-h-[60px]">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, index) => (
                                            <motion.span
                                                key={index}
                                                className="text-xs bg-gray-800/50 text-cyan-400 px-2 py-1 rounded"
                                                whileHover={{
                                                    y: -3,
                                                    backgroundColor: "rgba(6, 182, 212, 0.2)",
                                                    transition: { duration: 0.2 }
                                                }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3">
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-2.5 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg text-sm font-medium text-center hover:opacity-90 transition-opacity"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            View Project
                                        </motion.a>
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="py-2.5 px-4 bg-gray-800/50 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700/50 transition-colors flex items-center justify-center"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                            </svg>
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Hover effect elements */}
                                <div className="absolute inset-0 -z-10">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
                className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl z-0"
                animate={{
                    y: [0, -30, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute top-20 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl z-0"
                animate={{
                    y: [0, 20, 0],
                    scale: [1, 0.8, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
        </div>
    );
};

export default Project;