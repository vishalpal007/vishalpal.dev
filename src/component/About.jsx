import React from 'react';
import { motion } from 'framer-motion';
import about from '/ani.png';
import { AiOutlineThunderbolt } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { PiCoffee } from "react-icons/pi";
import { SlPuzzle } from "react-icons/sl";
import { PiAirplaneTilt } from "react-icons/pi";
import { IoIosFitness } from "react-icons/io";
import { ImSleepy } from "react-icons/im";
import { SlBookOpen } from "react-icons/sl";
import { GrSettingsOption } from "react-icons/gr";
import { IoGameControllerOutline } from "react-icons/io5";
import { RiMusicLine } from "react-icons/ri";

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <motion.div
            id='about'
            className='mb-20'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
        >
            <div className='px-14 flex justify-between items-center flex-col lg:flex-row md:flex-col sm:flex-col mt-16'>
                <motion.div variants={itemVariants}>
                    <img className='rounded-full md:h-96 h-80  object-cover' src={about} alt="about" />
                </motion.div>
                <motion.div className='px-2 lg:px-10 text-start mt-5' variants={itemVariants}>
                    {/* ... your existing content */}
                    <div className='w-full lg:w-11/12'>
                        <h1 className='text-4xl font-bold mb-5'>I'm a Passionate Full Stack Developer</h1>
                        <div className='flex items-start my-4 gap-4'>
                            <span> <AiOutlineThunderbolt className='text-yellow-400 text-3xl mt-2' /></span>
                            <h1 className='text-lg text-gray-400 font-semibold'>Develop highly interactive Front end / User Interfaces for your web and mobile applications</h1>
                        </div>
                        <div className='flex items-start my-4 gap-4'>
                            <span> <AiOutlineThunderbolt className='text-yellow-400 text-3xl mt-2' /></span>
                            <h1 className='text-lg text-gray-400 font-semibold'>Progressive Web Applications ( PWA ) in normal and SPA Stacks</h1>``
                        </div>
                        <div className='flex items-start my-4 gap-4'>
                            <span> <AiOutlineThunderbolt className='text-yellow-400 text-3xl mt-2' /></span>
                            <h1 className='text-lg text-gray-400 font-semibold'>Integration of third party services such as Firebase/ AWS / Digital Ocean</h1>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div className='px-14 mt-10' variants={itemVariants}>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold'>Hobbies & Expertise</h1>
                    <h1 className='text-gray-400 font-semibold px-2 lg:px-64 md:px-10 mt-8'>
                        Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.
                    </h1>
                </div>

                <motion.div variants={itemVariants}>
                    <div className='flex w-full justify-evenly gap-4 mt-10 flex-col sm:flex-col md:flex-col lg:flex-row'>
                        <div className='flex items-center gap-3 border rounded-xl bg-white border-orange-200 w-full p-3'>
                            <h1 className='text-xl text-orange-600 bg-orange-50 rounded-box p-4'>
                                <MdComputer />
                            </h1>
                            <h1 className='font-semibold'>
                                Developing
                            </h1>
                        </div>
                        <div className='flex items-center gap-3 border rounded-xl bg-white border-orange-200 w-full p-3'>
                            <h1 className='text-xl text-orange-600 bg-orange-50 rounded-box p-4'>
                                <FaCode />
                            </h1>
                            <h1 className='font-semibold'>
                                Coding
                            </h1>
                        </div>
                        <div className='flex items-center gap-3 border rounded-xl bg-white border-orange-200 w-full p-3'>
                            <h1 className='text-xl text-orange-600 bg-orange-50 rounded-box p-4'>
                                <BiCameraMovie />
                            </h1>
                            <h1 className='font-semibold'>
                                Cinema
                            </h1>
                        </div>
                        <div className='flex items-center gap-3 border rounded-xl bg-white border-orange-200 w-full p-3'>
                            <h1 className='text-xl text-orange-600 bg-orange-50 rounded-box p-4'>
                                <PiCoffee />
                            </h1>
                            <h1 className='font-semibold'>
                                Coffee
                            </h1>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <div className='flex w-full justify-evenly gap-4 mt-10 flex-col sm:flex-col md:flex-col lg:flex-row'>
                        <div className='flex w-full justify-evenly gap-4 mt-10 flex-col sm:flex-col md:flex-col lg:flex-row'>
                            <div className='flex items-center gap-3 border rounded-xl bg-white border-orange-200 w-full p-3'>
                                <h1 className='text-xl text-orange-600 bg-orange-50 rounded-box p-4'>
                                    <SlPuzzle />
                                </h1>
                                <h1 className='font-semibold'>
                                    Problem Solving
                                </h1>
                            </div>
                            <div className='flex items-center gap-3 border rounded-xl bg-white border-orange-200 w-full p-3'>
                                <h1 className='text-xl text-orange-600 bg-orange-50 rounded-box p-4'>
                                    <PiAirplaneTilt />
                                </h1>
                                <h1 className='font-semibold'>
                                    Traveling
                                </h1>
                            </div>
                            <div className='flex items-center gap-3 border rounded-xl bg-white border-orange-200 w-full p-3'>
                                <h1 className='text-xl text-orange-600 bg-orange-50 rounded-box p-4'>
                                    <IoIosFitness />
                                </h1>
                                <h1 className='font-semibold'>
                                    Fitness and Exercise
                                </h1>
                            </div>
                            <div className='flex items-center gap-3 border rounded-xl bg-white border-orange-200 w-full p-3'>
                                <h1 className='text-xl text-orange-600 bg-orange-50 rounded-box p-4'>
                                    <ImSleepy />
                                </h1>
                                <h1 className='font-semibold'>
                                    Sleeping
                                </h1>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <div className='flex w-full justify-evenly gap-4 mt-10 flex-col sm:flex-col md:flex-col lg:flex-row'>
                        <div className='flex w-full justify-evenly gap-4 mt-10 flex-col sm:flex-col md:flex-col lg:flex-row'>
                            <div className='flex items-center gap-3 border rounded-xl bg-white border-orange-200 w-full p-3'>
                                <h1 className='text-xl text-orange-600 bg-orange-50 rounded-box p-4'>
                                    <SlBookOpen />
                                </h1>
                                <h1 className='font-semibold'>
                                    Learning
                                </h1>
                            </div>
                            <div className='flex items-center gap-3 border rounded-xl bg-white border-orange-200 w-full p-3'>
                                <h1 className='text-xl text-orange-600 bg-orange-50 rounded-box p-4'>
                                    <GrSettingsOption />
                                </h1>
                                <h1 className='font-semibold'>
                                    Tech Exploration
                                </h1>
                            </div>
                            <div className='flex items-center gap-3 border rounded-xl bg-white border-orange-200 w-full p-3'>
                                <h1 className='text-xl text-orange-600 bg-orange-50 rounded-box p-4'>
                                    <IoGameControllerOutline />
                                </h1>
                                <h1 className='font-semibold'>
                                    Gaming
                                </h1>
                            </div>
                            <div className='flex items-center gap-3 border rounded-xl bg-white border-orange-200 w-full p-3'>
                                <h1 className='text-xl text-orange-600 bg-orange-50 rounded-box p-4'>
                                    <RiMusicLine />
                                </h1>
                                <h1 className='font-semibold'>
                                    Music
                                </h1>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default About;
