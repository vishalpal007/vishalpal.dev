import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HeroImage from "/gif.gif";

const Home = () => {
    const cvUrl = "/resume/vishal.pdf";
    const [activeCode, setActiveCode] = useState(0);
    const [showTerminal, setShowTerminal] = useState(false);
    const [terminalLogs, setTerminalLogs] = useState([]);
    const [typedText, setTypedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [isDeploying, setIsDeploying] = useState(false);
    const terminalRef = useRef(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isFloating, setIsFloating] = useState(false);

    // Enhanced code snippets with tech emojis
    const codeSnippets = [
        `const project = {\n  💻 name: "AI-Powered Platform",\n  🧩 stack: ["React", "Node.js", "MongoDB"],\n  ✨ features: ["Real-time AI Insights", "Payment gateway", "Admin dashboard"]\n};`,
        `async function deployApp() {\n  ⚙️ await setupPipeline();\n  🐳 containerize(app);\n  ☁️ deployToCloud("AWS");\n  console.log("🚀 Live now!");\n}`,
        `const api = {\n  🔌 endpoints: ["/users","/products"],\n  🔒 security: ["JWT Auth","Rate Limiting"],\n  🗄️ database: "MongoDB Atlas"\n};`,
        `const mobileApp = {\n  📱 platform: "React Native",\n  ⚡ features: ["Offline Mode","Push Notifications"],\n  🔄 state: "Redux Toolkit"\n};`,
    ];

    const terminalMessages = [
        "> Pulling latest code from GitHub...",
        "> Installing dependencies...",
        "> Building optimized production bundle...",
        "> Running automated tests...",
        "> Deploying to AWS Lambda...",
        "> Deployment successful ✅",
    ];

    // Professional intro text with typing effect
    const introText = "I design and build scalable Web & Mobile applications with clean, modern JavaScript stacks. Passionate about performance, automation & cloud deployments.";

    useEffect(() => {
        // Typewriter effect for intro text
        if (charIndex < introText.length) {
            const timeout = setTimeout(() => {
                setTypedText(prev => prev + introText.charAt(charIndex));
                setCharIndex(prev => prev + 1);
            }, 30);

            return () => clearTimeout(timeout);
        }
    }, [charIndex, introText]);

    useEffect(() => {
        // Code snippet auto change
        const codeInterval = setInterval(() => {
            setActiveCode((prev) => (prev + 1) % codeSnippets.length);
        }, 5000);

        return () => clearInterval(codeInterval);
    }, []);

    useEffect(() => {
        if (showTerminal) {
            setIsDeploying(true);
            setTerminalLogs([]);
            let index = 0;

            const logInterval = setInterval(() => {
                if (index < terminalMessages.length) {
                    setTerminalLogs((logs) => [...logs, terminalMessages[index]]);
                    index++;
                } else {
                    clearInterval(logInterval);
                    setIsDeploying(false);
                }
            }, 800);

            return () => {
                clearInterval(logInterval);
                setIsDeploying(false);
            };
        }
    }, [showTerminal]);

    // Scroll to bottom of terminal when new logs are added
    useEffect(() => {
        if (terminalRef.current && showTerminal) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [terminalLogs, showTerminal]);

    // Floating effect for code block
    useEffect(() => {
        const floatInterval = setInterval(() => {
            setIsFloating(prev => !prev);
        }, 5000);

        return () => clearInterval(floatInterval);
    }, []);

    // Mouse position tracking for parallax effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({
                x: e.clientX / window.innerWidth - 0.5,
                y: e.clientY / window.innerHeight - 0.5
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.3,
                when: "beforeChildren"
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                type: "spring",
                stiffness: 100
            },
        },
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            backgroundColor: "#2563eb",
            color: "#fff",
            boxShadow: "0 5px 15px rgba(37, 99, 235, 0.4)",
        },
        tap: { scale: 0.98 },
    };

    const codeBlockVariants = {
        float: {
            y: [0, -15, 0],
            rotate: [0, -1, 0.5, 0],
            transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        hover: {
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const terminalVariants = {
        hidden: {
            opacity: 0,
            height: 0,
            marginTop: 0
        },
        visible: {
            opacity: 1,
            height: "auto",
            marginTop: "2rem",
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    // Parallax effect for background elements
    const parallaxStyle = {
        transform: `translate(${cursorPosition.x * 20}px, ${cursorPosition.y * 20}px)`
    };

    return (
        <motion.div
            id="home"
            className="relative flex items-center justify-center min-h-[800px] md:min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Animated circuit pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                        backgroundSize: '50px 50px'
                    }}
                ></div>

                {/* Floating tech icons */}
                {['🚀', '💻', '🔧', '🌐', '📱', '🔒', '☁️', '⚙️', '🧠', '💡'].map((icon, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-2xl opacity-30"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -40, 0],
                            rotate: [0, 15, -10, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        {icon}
                    </motion.div>
                ))}

                {/* Animated gradient blobs with parallax */}
                <div className="absolute -top-1/4 -left-1/4 w-[200%] h-[200%] opacity-10">
                    <motion.div
                        className="absolute top-1/3 left-1/4 w-[40%] aspect-square bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mix-blend-soft-light filter blur-[100px]"
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={parallaxStyle}
                    ></motion.div>
                    <motion.div
                        className="absolute top-1/2 right-1/4 w-[30%] aspect-square bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-soft-light filter blur-[100px]"
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                        style={parallaxStyle}
                    ></motion.div>
                    <motion.div
                        className="absolute bottom-1/4 left-1/2 w-[35%] aspect-square bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mix-blend-soft-light filter blur-[100px]"
                        animate={{
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 4
                        }}
                        style={parallaxStyle}
                    ></motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between py-16 lg:py-0 gap-12">
                {/* LEFT CONTENT */}
                <motion.div
                    variants={itemVariants}
                    className="text-left w-full lg:w-1/2 relative"
                >
                    <motion.div
                        className="inline-flex items-center bg-slate-800/60 backdrop-blur-md text-blue-400 px-4 py-2 rounded-full mb-6 text-sm font-mono border border-slate-700"
                        variants={itemVariants}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        <span>Full Stack Developer</span>
                    </motion.div>

                    <motion.h1
                        className="relative font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight"
                        variants={itemVariants}
                    >
                        <motion.span
                            className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity
                            }}
                        >
                            Crafting Digital
                        </motion.span>
                        <br />
                        <span className="text-slate-300">
                            Experiences <motion.span
                                className="text-blue-400 inline-block"
                                animate={{
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 2, -1, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity
                                }}
                            >That Scale</motion.span>
                        </span>
                    </motion.h1>

                    <motion.div
                        className="mt-8 mb-6"
                        variants={itemVariants}
                    >
                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1.5">
                                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                            </div>
                            <p className="text-slate-400 ml-3 font-medium text-lg leading-relaxed">
                                Hi, I'm <span className="text-blue-400 font-bold">Vishal Pal</span>.
                                <br />
                                {typedText}
                                {charIndex < introText.length && (
                                    <span className="ml-1 w-2 h-6 bg-blue-500 inline-block animate-pulse"></span>
                                )}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap gap-4 mt-10"
                        variants={itemVariants}
                    >
                        <motion.a
                            href={cvUrl}
                            download="Vishal_Pal_Resume.pdf"
                            className="px-6 py-3 rounded-lg font-semibold bg-blue-600 text-white border border-blue-500 flex items-center group"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Download CV
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-y-0.5 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </motion.a>

                        <motion.button
                            className="px-6 py-3 rounded-lg font-semibold bg-slate-800 text-slate-300 border border-slate-700 flex items-center group"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={() => setShowTerminal(!showTerminal)}
                        >
                            {isDeploying ? (
                                <>
                                    <span>Deploying...</span>
                                    <div className="ml-2 flex space-x-1">
                                        {[...Array(3)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                                                style={{
                                                    animation: `bounce 1.5s infinite ${i * 0.2}s`
                                                }}
                                            ></div>
                                        ))}
                                    </div>
                                </>
                            ) : showTerminal ? (
                                "Hide Terminal"
                            ) : (
                                "Show Terminal"
                            )}
                        </motion.button>
                    </motion.div>

                    {/* Terminal */}
                    <motion.div
                        className="mt-8 overflow-hidden"
                        variants={terminalVariants}
                        initial="hidden"
                        animate={showTerminal ? "visible" : "hidden"}
                    >
                        <div className="bg-slate-900 rounded-xl overflow-hidden shadow-xl border border-slate-700">
                            <div className="flex items-center px-4 py-2 bg-slate-800 border-b border-slate-700">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="ml-4 text-slate-400 text-sm font-mono">
                                    terminal ~/projects/portfolio
                                </div>
                            </div>
                            <div
                                ref={terminalRef}
                                className="p-4 font-mono text-green-400 text-sm space-y-1 max-h-60 overflow-y-auto"
                            >
                                {terminalLogs.map((log, i) => (
                                    <div key={i} className="flex">
                                        <span className="text-slate-500 mr-2">$</span>
                                        <span>{log}</span>
                                    </div>
                                ))}
                                {isDeploying && (
                                    <div className="flex items-center">
                                        <span className="text-slate-500 mr-2">$</span>
                                        <span className="flex">
                                            {"> "}
                                            <span className="typing-cursor">█</span>
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* RIGHT - CODE BLOCK */}
                <motion.div
                    className="relative w-full lg:w-1/2"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                >
                    <motion.div
                        className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
                        variants={codeBlockVariants}
                        animate={isFloating ? "float" : "hover"}
                    >
                        <div className="p-4 bg-slate-900 flex space-x-2 border-b border-slate-700">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                            {/* Code Editor */}
                            <div className="w-full md:w-2/3 p-6">
                                <div className="bg-slate-950 rounded-lg overflow-hidden shadow-inner border border-slate-800">
                                    <div className="flex items-center px-4 py-2 bg-slate-800 border-b border-slate-700">
                                        <div className="text-slate-400 text-sm font-mono flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            CodeEditor.js
                                        </div>
                                    </div>
                                    <div className="p-4 font-mono text-sm text-slate-200 overflow-x-auto">
                                        <pre className="whitespace-pre-wrap">
                                            <motion.code
                                                key={activeCode}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.6 }}
                                                className="block"
                                            >
                                                {codeSnippets[activeCode]}
                                            </motion.code>
                                        </pre>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                        <div className="text-slate-400 text-sm">
                                            Live on production
                                        </div>
                                    </div>
                                    <div className="text-xs text-slate-500 font-mono">
                                        {activeCode + 1}/{codeSnippets.length}
                                    </div>
                                </div>
                            </div>

                            {/* Profile Image with 3D effect */}
                            <div className="w-full md:w-1/3 flex items-center justify-center p-6 bg-gradient-to-b from-slate-800 to-slate-900 border-t md:border-t-0 md:border-l border-slate-700">
                                <div className="relative">
                                    <motion.div
                                        className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-lg opacity-30"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            opacity: [0.3, 0.4, 0.3],
                                            rotate: [0, 180, 360]
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            repeatType: "loop",
                                        }}
                                    />
                                    <motion.div
                                        className="relative overflow-hidden rounded-full border-4 border-white shadow-lg"
                                        whileHover={{
                                            scale: 1.05,
                                            rotate: [0, 2, -2, 0],
                                            transition: { duration: 0.5 }
                                        }}
                                    >
                                        <div className="relative overflow-hidden rounded-full w-40 h-40">
                                            <img
                                                className="w-full h-full object-cover"
                                                src={HeroImage}
                                                alt="Vishal Pal - Full Stack Developer"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap"
                                        animate={{
                                            y: [0, -5, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity
                                        }}
                                    >
                                        Online
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-slate-800 border-t border-slate-700">
                            <div className="flex items-center text-sm text-slate-400">
                                <div className="flex items-center mr-4">
                                    <motion.div
                                        className="w-2 h-2 bg-green-500 rounded-full mr-2"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    ></motion.div>
                                    <span>Active on GitHub</span>
                                </div>
                                <div className="flex items-center">
                                    <motion.div
                                        className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: 0.5
                                        }}
                                    ></motion.div>
                                    <span>
                                        Coding {["React", "Node.js", "MongoDB"][activeCode % 3]}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating tech badges */}
                    <motion.div
                        className="absolute -top-6 -right-6 bg-slate-800 px-4 py-2 rounded-full text-blue-400 font-mono text-sm border border-slate-700 shadow-lg"
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 3, -2, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        Problem Solver
                    </motion.div>

                    <motion.div
                        className="absolute -bottom-4 left-0 bg-slate-800 px-4 py-2 rounded-full text-purple-400 font-mono text-sm border border-slate-700 shadow-lg"
                        animate={{
                            y: [0, -8, 0],
                            rotate: [0, -2, 1, 0]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    >
                        MERN Stack Specialist
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Home;