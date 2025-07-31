import React from 'react';
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaNpm,
} from 'react-icons/fa6';
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';
import {
    SiMongodb,
    SiExpress,
    SiRedux,
    SiTailwindcss,
    SiMui,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiPostgresql } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { TbBrandTypescript, TbBrandReactNative } from 'react-icons/tb';

const Skills = () => {
    return (
        <>
            <div id='skills' className='px-10 py-10'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold'>What do I offer?</h1>
                    <h1 className='mt-5 font-semibold text-gray-400 text-balance'>
                        I'M FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
                    </h1>
                </div>

                <div className='flex justify-center mt-14 space-x-4 lg:space-x-16 md:space-x-10'>
                    <span className='text-5xl text-gray-500 hover:text-orange-400'><FaHtml5 /><p className='text-xs text-center font-semibold'>html-5</p></span>
                    <span className='text-5xl text-gray-500 hover:text-orange-400'><FaCss3Alt /><p className='text-xs text-center font-semibold'>css-3</p></span>
                    <span className='text-5xl text-gray-500 hover:text-orange-400'><FaReact /><p className='text-xs text-center font-semibold'>React</p></span>
                    <span className='text-5xl text-gray-500 hover:text-orange-400'><FaNodeJs /><p className='text-xs text-center font-semibold'>Node Js</p></span>
                    <span className='text-5xl text-gray-500 hover:text-orange-400'><FaGitAlt /><p className='text-xs text-center font-semibold'>Git</p></span>
                </div>
                <div className='flex justify-center mt-8 space-x-4 lg:space-x-16 md:space-x-10'>
                    <span className='text-5xl text-gray-500 hover:text-orange-400'><FaNpm /><p className='text-xs text-center font-semibold'>npm</p></span>
                    <span className='text-5xl text-gray-500 hover:text-orange-400'><IoLogoFirebase /><p className='text-xs text-center font-semibold'>Firebase</p></span>
                    <span className='text-5xl text-gray-500 hover:text-orange-400'><IoLogoJavascript /><p className='text-xs text-center font-semibold'>Javascript</p></span>
                    <span className='text-5xl text-gray-500 hover:text-orange-400'><SiMongodb /><p className='text-xs text-center font-semibold'>Mongodb</p></span>
                    <span className='text-5xl text-gray-500 hover:text-orange-400'><SiExpress /><p className='text-xs text-center font-semibold'>express</p></span>
                </div>
                <div className='flex justify-center mt-8 space-x-4 lg:space-x-16 md:space-x-10'>
                    <span className='text-5xl text-gray-500 hover:text-orange-400'><SiRedux /><p className='text-xs text-center font-semibold'>Redux</p></span>
                    <span className='text-5xl text-gray-500 hover:text-orange-400'><SiTailwindcss /><p className='text-xs text-center font-semibold'>tailwindcss</p></span>
                    <span className='text-5xl text-gray-500 hover:text-orange-400'><SiMui /><p className='text-xs text-center font-semibold'>mui</p></span>
                    <span className='text-5xl text-gray-500 hover:text-orange-400'><TbBrandNextjs /><p className='text-xs text-center font-semibold'>Nextjs</p></span>
                    <span className='text-5xl text-gray-500 hover:text-orange-400'><TbBrandTypescript /><p className='text-xs text-center font-semibold'>Typescrpt</p></span>
                </div>
                <div className='flex justify-center mt-8 space-x-4 lg:space-x-16 md:space-x-10'>
                    <span className='text-5xl text-gray-500 hover:text-orange-400'><SiPostgresql /><p className='text-xs text-center font-semibold'>PostgreSql</p></span>
                    <span className='text-5xl text-gray-500 hover:text-orange-400'><TbBrandReactNative /><p className='text-xs font-semibold text-center'>React Native</p></span>
                    <span className='text-5xl text-gray-500 hover:text-orange-400'><FaPython /><p className='text-xs text-center font-semibold'>Python</p></span>
                </div>
            </div>
        </>
    );
};

export default Skills;
