import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-scroll';
import { useGetAllProductQuery } from '@/redux/adminApi';



const Project = () => {

    const { data } = useGetAllProductQuery()

    const controls = useAnimation();

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollY > windowHeight / 2) {
            controls.start({ opacity: 1, y: 0 });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="project" className="px-4 lg:px-10 md:px-8 sm:px-4 py-10">
            <div className="text-center">
                <Link to="project" smooth={true} duration={500}>
                    <h1 className="text-3xl font-bold">My Work & Projects</h1>
                </Link>
                <p className="text-gray-400 mt-4 font-semibold px-0 lg:px-48 sm:px-0 md:px-0">
                    A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
                </p>
            </div>

            <div className="py-14">
                <motion.div
                    animate={controls}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 my-8">
                        {data && data.map((project, index) => (
                            <motion.div
                                className="w-full rounded-lg bg-white p-2 h-full cursor-pointer"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                <div className="overflow-hidden rounded-lg">
                                    <img className="w-full h-72 rounded-xl mb-4 shadow-md" src={`${import.meta.env.VITE_BASE_URL}/${project.hero}`} alt={`${project.title} Image`} />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2 text-gray-600">{project.name}</div>
                                        <p className="text-gray-500 text-sm font-semibold">{project.desc}</p>

                                        <div className='text-end mt-4'>
                                            <a href={project.projectLink} target='_blank' className="btn btn-primary btn-sm">Visit Website</a>
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Project;
