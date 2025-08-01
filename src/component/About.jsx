import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { AiOutlineThunderbolt, AiOutlineCode } from "react-icons/ai";
import { FaServer, FaCode, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { PiCoffee, PiAirplaneTilt, PiBooks } from "react-icons/pi";
import { SlPuzzle } from "react-icons/sl";
import { IoIosFitness } from "react-icons/io";
import { MdDesignServices, MdComputer } from "react-icons/md";
import { TbCloudComputing } from "react-icons/tb";
import { IoGameControllerOutline } from "react-icons/io5";
import { RiMusicLine, RiReactjsFill } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";
import { SiFirebase, SiMongodb, SiMui, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';


// Optimized 3D Developer Model Component
const DeveloperModel = () => {
    const meshRef = useRef();
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.15;
        }
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={1.2} color="#ff8c00" />
            <pointLight position={[-5, -5, -5]} intensity={0.7} color="#0ea5e9" />

            {/* Main Tech Sphere */}
            <Sphere args={[1.3, 48, 48]} ref={meshRef}>
                <meshStandardMaterial
                    color="#0ea5e9"
                    wireframe={true}
                    roughness={0.4}
                    metalness={0.9}
                    emissive="#0ea5e9"
                    emissiveIntensity={0.15}
                />
            </Sphere>

            {/* Developer Figure */}
            <group position={[0, 0, 0]}>
                {/* Head */}
                <mesh position={[0, 0.4, 0]}>
                    <sphereGeometry args={[0.35, 24, 24]} />
                    <meshStandardMaterial
                        color="#f0f0f0"
                        emissive="#3b82f6"
                        emissiveIntensity={0.08}
                    />
                </mesh>

                {/* Body */}
                <mesh position={[0, -0.3, 0]}>
                    <boxGeometry args={[0.5, 0.7, 0.25]} />
                    <meshStandardMaterial
                        color="#3b82f6"
                        metalness={0.85}
                        roughness={0.25}
                    />
                </mesh>
            </group>

            {/* Floating Tech Icons */}
            {Array.from({ length: 10 }).map((_, i) => {
                const angle = (i / 10) * Math.PI * 2;
                const radius = 2.3;
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;
                const y = Math.sin(Date.now() * 0.001 + i) * 0.2;

                return (
                    <mesh key={i} position={[x, y, z]}>
                        <boxGeometry args={[0.25, 0.25, 0.01]} />
                        <meshStandardMaterial
                            color={i % 2 === 0 ? "#0ea5e9" : "#f97316"}
                            transparent
                            opacity={0.85}
                            emissive={i % 2 === 0 ? "#0ea5e9" : "#f97316"}
                            emissiveIntensity={0.2}
                        />
                    </mesh>
                );
            })}
        </group>
    );
};

// Floating Tech Icons Component
const FloatingTechIcons = () => {
    const icons = [
        { icon: <FaReact className="text-blue-500" />, name: "React" },
        { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
        { icon: <FaPython className="text-yellow-500" />, name: "Python" },
        { icon: <TbCloudComputing className="text-orange-500" />, name: "AWS" },
        { icon: <AiOutlineCode className="text-purple-500" />, name: "TypeScript" },
        { icon: <FaServer className="text-red-500" />, name: "MongoDB" },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {icons.map((tech, i) => {
                const angle = (i / icons.length) * Math.PI * 2;
                const radius = window.innerWidth < 768 ? 110 : 160;
                const x = Math.cos(angle) * radius + 50;
                const y = Math.sin(angle) * radius + 50;

                return (
                    <motion.div
                        key={i}
                        className="absolute w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-gray-800/80 backdrop-blur-sm rounded-full border border-amber-500/30 shadow-lg shadow-amber-500/10"
                        style={{
                            left: `${x}px`,
                            top: `${y}px`,
                            zIndex: 10
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: [0, -15, 0],
                            rotate: [0, 5, 0],
                            transition: {
                                delay: i * 0.2,
                                duration: 4 + Math.random() * 2,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }
                        }}
                    >
                        <div className="text-xl md:text-2xl">{tech.icon}</div>
                    </motion.div>
                );
            })}
        </div>
    );
};

const About = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            document.body.style.overflowX = 'hidden';
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
            document.body.style.overflowX = '';
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.2
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 120
            }
        },
    };

    const techStack = [
        { icon: <FaReact className="text-blue-500" />, name: "React" },
        { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
        { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
        { icon: <FaServer className="text-red-500" />, name: "Express.js" },
        { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
        { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind CSS" },
        { icon: <SiMui className="text-indigo-400" />, name: "Material UI" },
        { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
        { icon: <SiPostgresql className="text-sky-500" />, name: "PostgreSQL" },
        { icon: <TbCloudComputing className="text-orange-500" />, name: "AWS" },
        { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
        { icon: <RiReactjsFill className="text-cyan-400" />, name: "React Native" }
    ];
    const hobbies = [
        { icon: <FaCode className="text-orange-500" />, name: "Coding" },
        { icon: <BiCameraMovie className="text-blue-500" />, name: "Films" },
        { icon: <PiCoffee className="text-amber-700" />, name: "Coffee" },
        { icon: <SlPuzzle className="text-green-500" />, name: "Puzzles" },
        { icon: <PiAirplaneTilt className="text-sky-500" />, name: "Travel" },
        { icon: <IoIosFitness className="text-red-500" />, name: "Fitness" },
        { icon: <GiBrain className="text-purple-500" />, name: "Science" },
        { icon: <PiBooks className="text-indigo-500" />, name: "Reading" },
        { icon: <MdDesignServices className="text-pink-500" />, name: "Design" },
        { icon: <IoGameControllerOutline className="text-yellow-500" />, name: "Gaming" },
        { icon: <RiMusicLine className="text-teal-500" />, name: "Music" },
        { icon: <SlPuzzle className="text-amber-500" />, name: "Chess" },
    ];

    return (
        <motion.div
            id='about'
            ref={containerRef}
            className='py-12 md:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.1 }}
        >
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-amber-500/10 to-orange-600/10"
                        style={{
                            width: `${Math.random() * 150 + 50}px`,
                            height: `${Math.random() * 150 + 50}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            filter: 'blur(30px)'
                        }}
                        animate={{
                            x: [0, Math.random() * 80 - 40],
                            y: [0, Math.random() * 80 - 40],
                            transition: {
                                duration: 20 + Math.random() * 20,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }
                        }}
                    />
                ))}
            </div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
                {/* About Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    variants={itemVariants}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-600">
                            Crafting Digital Experiences
                        </span>
                    </motion.h1>
                    <motion.div
                        className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "8rem" }}
                        transition={{ delay: 0.4, duration: 1 }}
                    />
                </motion.div>

                {/* Profile Section with 3D Model */}
                <div className='flex flex-col lg:flex-row gap-8 md:gap-10 items-center'>
                    <motion.div
                        className="flex-1 relative h-64 sm:h-72 md:h-80 w-full"
                        variants={itemVariants}
                        whileHover={{
                            boxShadow: "0 0 25px rgba(251,146,60,0.4)", // shadow only
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-600/20 rounded-2xl blur-xl opacity-30"></div>
                        <div className="absolute inset-0 border border-orange-500/30 rounded-2xl"></div>

                        <Canvas
                            className="rounded-2xl"
                            camera={{ position: [0, 0, 4.5], fov: 70 }}
                        >
                            <DeveloperModel />
                            <OrbitControls
                                enableZoom={false}
                                autoRotate
                                autoRotateSpeed={1.2}
                            />
                        </Canvas>

                        <FloatingTechIcons />
                    </motion.div>

                    <motion.div
                        className="flex-1 mt-8 lg:mt-0"
                        variants={itemVariants}
                    >
                        <motion.h2
                            className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Full Stack Developer & <span className="text-amber-500">Digital Craftsman</span>
                        </motion.h2>

                        <motion.p
                            className='text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            I transform complex problems into elegant, performant solutions. With 7+ years of experience,
                            I bridge the gap between design and technical implementation, creating digital experiences
                            that users love and businesses value.
                        </motion.p>

                        <div className='space-y-3 md:space-y-4'>
                            <motion.div
                                className='flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-amber-500 transition-all'
                                variants={itemVariants}
                                whileHover={{ x: 8 }}
                            >
                                <span className='bg-gradient-to-br from-orange-600 to-amber-700 p-2 md:p-3 rounded-lg mt-1'>
                                    <AiOutlineThunderbolt className='text-white text-lg md:text-xl' />
                                </span>
                                <div>
                                    <h3 className='text-base md:text-lg font-semibold text-white'>Frontend Architecture</h3>
                                    <p className='text-sm md:text-base text-gray-400'>
                                        Building responsive, accessible interfaces with React ecosystem and modern CSS
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className='flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-amber-500 transition-all'
                                variants={itemVariants}
                                whileHover={{ x: 8 }}
                            >
                                <span className='bg-gradient-to-br from-orange-600 to-amber-700 p-2 md:p-3 rounded-lg mt-1'>
                                    <MdComputer className='text-white text-lg md:text-xl' />
                                </span>
                                <div>
                                    <h3 className='text-base md:text-lg font-semibold text-white'>Full Stack Solutions</h3>
                                    <p className='text-sm md:text-base text-gray-400'>
                                        End-to-end development from database design to cloud deployment
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className='flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-amber-500 transition-all'
                                variants={itemVariants}
                                whileHover={{ x: 8 }}
                            >
                                <span className='bg-gradient-to-br from-orange-600 to-amber-700 p-2 md:p-3 rounded-lg mt-1'>
                                    <TbCloudComputing className='text-white text-lg md:text-xl' />
                                </span>
                                <div>
                                    <h3 className='text-base md:text-lg font-semibold text-white'>DevOps & Scalability</h3>
                                    <p className='text-sm md:text-base text-gray-400'>
                                        Implementing CI/CD pipelines and cloud infrastructure for high-traffic apps
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Tech Stack */}
                <motion.div
                    className="mt-16 md:mt-20"
                    variants={itemVariants}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-white">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-600">
                            Tech Stack & Tools
                        </span>
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-3 flex flex-col items-center hover:border-amber-500 transition-all"
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    scale: 1.05,
                                    boxShadow: "0 10px 20px -5px rgba(251, 146, 60, 0.25)"
                                }}
                            >
                                <div className="text-3xl mb-2">{tech.icon}</div>
                                <span className="font-medium text-white text-sm md:text-base">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Hobbies Section */}
                <motion.div
                    className="mt-16 md:mt-20"
                    variants={itemVariants}
                >
                    <div className='text-center mb-8 md:mb-12'>
                        <h1 className='text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white'>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-600">
                                Beyond Coding
                            </span>
                        </h1>
                        <p className='text-gray-400 text-sm md:text-base max-w-2xl mx-auto'>
                            When I'm not architecting systems or debugging code, you'll find me exploring
                            these passions that fuel my creativity and problem-solving skills.
                        </p>
                    </div>

                    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4'>
                        {hobbies.map((hobby, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-3 text-center hover:border-amber-500 transition-all"
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    scale: 1.05,
                                    boxShadow: "0 10px 20px -5px rgba(251, 146, 60, 0.15)"
                                }}
                            >
                                <div className="text-2xl md:text-3xl mb-2">
                                    {hobby.icon}
                                </div>
                                <h4 className='font-medium text-white text-xs sm:text-sm'>{hobby.name}</h4>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Philosophy */}
                <motion.div
                    className="mt-16 md:mt-20 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 md:p-7 max-w-3xl mx-auto border border-gray-700 relative overflow-hidden"
                    variants={itemVariants}
                    whileHover={{
                        boxShadow: "0 0 25px rgba(251, 146, 60, 0.25)"
                    }}
                >
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500 rounded-full opacity-10 blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>

                    <div className="flex items-start gap-3 md:gap-4 relative z-10">
                        <div className="bg-gradient-to-br from-orange-600 to-amber-700 text-white p-3 md:p-4 rounded-xl">
                            <GiBrain className="text-xl md:text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Development Philosophy</h3>
                            <p className="text-gray-300 text-base md:text-lg italic">
                                "I believe in building software that solves real problems while maintaining
                                elegance in implementation. The best code disappears, leaving only the perfect
                                user experience."
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;