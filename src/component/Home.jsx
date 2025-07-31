import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import Hero from '/gif.gif';
import { Button } from '@/components/ui/button';

const Home = () => {
    const cvUrl = '/resume/vishal.pdf';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
    };

    const buttonVariants = {
        hover: { scale: 1.1 },
    };

    return (
        <motion.div
            id='home'
            className='flex items-center justify-center min-h-[800px] md:min-h-screen'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
        >
            <div className='sm:mt-24 md:mt-24 lg:mt-2 mt-20 h-full flex flex-col lg:flex-row md:flex-col sm:flex-col justify-between items-center px-4 md:px-8 lg:px-12'>
                <motion.div variants={itemVariants} className='text-left'>
                    <h1 className='font-bold text-2xl sm:text-2xl md:text-4xl lg:text-5xl mb-3'>Hey I'm</h1>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-orange-400 font-bold mb-3'>
                        <div>
                            <ReactTyped
                                strings={[
                                    "Vishal Pal.",
                                    "Full-Stack Developer.",
                                    "Mobile App Development.",
                                    "Backend Developer.",
                                ]}
                                typeSpeed={60}
                                loop={true}
                            ></ReactTyped>
                        </div>
                    </h1>
                    <p className='text-gray-400 w-full md:w-10/12 lg:w-8/12 mt-4 font-semibold'>
                        A passionate Full Stack Software Developer 🚀 having experience building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and other cool libraries and frameworks.
                    </p>
                    <motion.div
                    >
                        <a href={cvUrl} className='btn bg-slate-100 hover:bg-orange-400 text-black mt-5'>Download CV</a>
                    </motion.div>
                </motion.div>

                <motion.div className='relative mt-10 w-full lg:w-1/2 md:w-full sm:w-full' variants={itemVariants}>
                    <motion.div
                        className='h-full  justify-center flex overflow-hidden transition-transform transform  xl:hover:scale-110'
                    // whileHover={{ scale: 1.1 }}
                    >
                        <img
                            className='h-full border-blue-100 border-2 sm:h-64 xl:h-80 object-cover   p-2'
                            src={Hero}
                        // src='https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg?auto=compress&cs=tinysrgb&w=600'
                        // alt='hero'
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Home;
