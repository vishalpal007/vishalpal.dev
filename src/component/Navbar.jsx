import React, { useEffect, useState } from 'react';
import { Link as RouterLink, animateScroll } from 'react-scroll';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { PiListBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={`py-4 fixed top-0 w-full z-10 ${isScrolled ? 'bg-slate-100 shadow-md' : 'p-4'}`}>
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/" className="text-2xl font-serif font-bold text-black">Vishal.</Link>
                </div>

                <div className="hidden lg:flex space-x-4 gap-8">
                    <RouterLink
                        to="home"
                        smooth={true}
                        duration={800}
                        className="font-semibold hover:text-orange-400 cursor-pointer"
                    >
                        Home
                    </RouterLink>
                    <RouterLink
                        to="about"
                        smooth={true}
                        duration={800}
                        className="font-semibold hover:text-orange-400 cursor-pointer"
                    >
                        About
                    </RouterLink>
                    <RouterLink
                        to="skills"
                        smooth={true}
                        duration={800}
                        className="font-semibold hover:text-orange-400 cursor-pointer"
                    >
                        Skills
                    </RouterLink>
                    <RouterLink
                        to="project"
                        smooth={true}
                        duration={800}
                        className="font-semibold hover:text-orange-400 cursor-pointer"
                    >
                        Project
                    </RouterLink>
                    <RouterLink
                        to="contact"
                        smooth={true}
                        duration={800}
                        className="font-semibold hover:text-orange-400 cursor-pointer"
                    >
                        Contact
                    </RouterLink>
                </div>


                <div className='flex space-x-4'>
                    <div className="flex lg:flex space-x-4 items-center">
                        <a href='https://www.instagram.com/vishu_9x._/' target='_blank' className={`social-link ${isScrolled ? 'text-orange-400' : 'bg-opacity-5'}`}>
                            <FaInstagram />
                        </a>
                        <a href='https://github.com/vishalpal007' target='_blank' className={`social-link ${isScrolled ? 'text-orange-400' : 'bg-opacity-5'}`}>
                            <FaGithub />
                        </a>
                        <a href='https://www.linkedin.com/in/vishal-pal-913094250/' target='_blank' className={`social-link ${isScrolled ? 'text-orange-400' : 'bg-opacity-5'}`}>
                            <FaLinkedin />
                        </a>
                    </div>

                    <div className="lg:hidden flex items-center">
                        <div className="text-xl cursor-pointer" onClick={toggleMobileMenu}>
                            <PiListBold />
                        </div>
                    </div>

                    {isMobileMenuOpen && (
                        <div className="lg:hidden fixed top-16 left-0 w-full bg-white shadow-md p-4">
                            <div className="flex flex-col items-center space-y-4">
                                <RouterLink
                                    to="home"
                                    smooth={true}
                                    duration={800}
                                    className="font-semibold hover:text-orange-400 cursor-pointer"
                                    onClick={toggleMobileMenu}
                                >
                                    Home
                                </RouterLink>
                                <RouterLink
                                    to="about"
                                    smooth={true}
                                    duration={800}
                                    className="font-semibold hover:text-orange-400 cursor-pointer"
                                    onClick={toggleMobileMenu}
                                >
                                    About
                                </RouterLink>
                                <RouterLink
                                    to="skills"
                                    smooth={true}
                                    duration={800}
                                    className="font-semibold hover:text-orange-400 cursor-pointer"
                                    onClick={toggleMobileMenu}
                                >
                                    Skills
                                </RouterLink>
                                <RouterLink
                                    to="project"
                                    smooth={true}
                                    duration={800}
                                    className="font-semibold hover:text-orange-400 cursor-pointer"
                                    onClick={toggleMobileMenu}
                                >
                                    Project
                                </RouterLink>
                                <RouterLink
                                    to="contact"
                                    smooth={true}
                                    duration={800}
                                    className="font-semibold hover:text-orange-400 cursor-pointer"
                                    onClick={toggleMobileMenu}
                                >
                                    Contact
                                </RouterLink>
                            </div>
                        </div>
                    )}
                </div>


            </div>
        </div>
    );
};

export default Navbar;
