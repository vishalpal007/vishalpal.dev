// src/component/Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-scroll';
import { FaInstagram, FaGithub, FaLinkedin, FaX, FaSun, FaMoon } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef(null);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleDarkMode = () => setDarkMode(!darkMode);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'project', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    const socialLinks = [
        { icon: <FaInstagram />, url: 'https://www.instagram.com/vishalpal_18' },
        { icon: <FaGithub />, url: 'https://github.com/vishalpal007' },
        { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/vishalpal07' },
    ];

    return (
        <motion.div
            ref={navRef}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-md shadow-xl py-2'
                : 'bg-gradient-to-r from-gray-800/40 to-gray-900/70 backdrop-blur-sm py-3'
                }`}
            style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center"
                >
                    {/* Animated Logo */}
                    <motion.div
                        animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        className="relative"
                    >
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">&lt;/&gt;</span>
                        </div>
                        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 border-2 border-gray-900"></div>
                    </motion.div>

                    {/* Brand Name + Tagline */}
                    <Link to="/" className="flex flex-col leading-tight ml-3">
                        <span className="text-2xl font-bold tracking-wide text-slate-100">
                            Vishal<span className="text-cyan-400">.Dev</span>
                        </span>
                        <span className="text-[12px] text-slate-400 tracking-wider font-medium">
                            Full Stack Developer
                        </span>
                    </Link>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <motion.div
                            key={link.id}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative"
                        >
                            <RouterLink
                                to={link.id}
                                smooth={true}
                                duration={800}
                                spy={true}
                                activeClass="text-cyan-400"
                                className="relative font-medium text-slate-300 hover:text-cyan-300 cursor-pointer transition-colors py-2"
                            >
                                {link.label}
                                <motion.div
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ originX: 0 }}
                                />
                            </RouterLink>
                        </motion.div>
                    ))}
                </div>

                {/* Right Side Controls */}
                <div className="flex items-center space-x-5">
                    {/* Social Icons (Desktop) */}
                    <div className="hidden lg:flex items-center space-x-5">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3, color: '#38bdf8', scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-slate-400 hover:text-cyan-300 transition-colors"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>



                    {/* Mobile Menu Button */}
                    <motion.div className="lg:hidden z-50" whileTap={{ scale: 0.9 }}>
                        <button
                            onClick={toggleMobileMenu}
                            className={`p-2 rounded-md ${isMobileMenuOpen
                                ? 'bg-cyan-600 text-white'
                                : 'bg-gray-700/50 text-slate-300'
                                }`}
                        >
                            {isMobileMenuOpen ? (
                                <FaX className="text-xl" />
                            ) : (
                                <div className="space-y-1">
                                    <span className="block w-6 h-0.5 bg-slate-300"></span>
                                    <span className="block w-6 h-0.5 bg-slate-300"></span>
                                    <span className="block w-4 h-0.5 bg-slate-300"></span>
                                </div>
                            )}
                        </button>
                    </motion.div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden fixed inset-0 bg-gradient-to-br from-gray-800 to-gray-900 z-40 pt-20"
                        >
                            <div className="container mx-auto px-4">
                                <div className="flex flex-col space-y-6 py-6">
                                    {navLinks.map((link) => (
                                        <RouterLink
                                            key={link.id}
                                            to={link.id}
                                            smooth={true}
                                            duration={800}
                                            spy={true}
                                            activeClass="text-cyan-400 font-semibold"
                                            className="block text-xl font-medium text-slate-300 hover:text-cyan-300 py-3 transition-colors border-b border-gray-700"
                                            onClick={toggleMobileMenu}
                                        >
                                            {link.label}
                                        </RouterLink>
                                    ))}
                                </div>

                                {/* Social Icons (Mobile) */}
                                <motion.div
                                    className="flex justify-center space-x-8 py-8 mt-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -3, color: '#38bdf8', scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="text-2xl text-slate-400 hover:text-cyan-300 transition-colors"
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </motion.div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Navbar;