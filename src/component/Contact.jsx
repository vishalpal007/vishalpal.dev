import React, { useState, useEffect } from 'react';
import { FaPhone, FaPaperPlane, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion } from 'framer-motion';
import { FaLocationDot } from "react-icons/fa6";
import { useSubmitContactFormMutation } from '@/redux/apis/contactApi';
import { toast } from 'react-toastify';

const Contact = () => {

    const [submitContactForm, { isSuccess, isError, isLoading, error }] = useSubmitContactFormMutation()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (isSuccess) {
            toast.success(
                <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800">Message Sent!</h3>
                        <p className="text-gray-600">I'll get back to you soon</p>
                    </div>
                </div>,
                {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeButton: false,
                    className: 'bg-white shadow-xl rounded-xl border border-green-200',
                    bodyClassName: "p-0",
                }
            );
        }

        if (isError) {
            toast.error(
                <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800">Failed to send</h3>
                        <p className="text-gray-600">{error?.data?.message || 'Please try again later'}</p>
                    </div>
                </div>,
                {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeButton: false,
                    className: 'bg-white shadow-xl rounded-xl border border-red-200',
                    bodyClassName: "p-0",
                }
            );
        }
    }, [isSuccess, isError, error]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                await submitContactForm(formData).unwrap();
                setFormData({ name: '', email: '', subject: '', message: '' });
            } catch (err) {
                // Error handled by useEffect toast
            }
        }
    };

    // Floating animation for decorative elements
    useEffect(() => {
        const handleMouseMove = (e) => {
            const cards = document.querySelectorAll('.parallax-card');
            cards.forEach(card => {
                const speed = parseFloat(card.getAttribute('data-speed'));
                const x = (window.innerWidth - e.pageX * speed) / 100;
                const y = (window.innerHeight - e.pageY * speed) / 100;
                card.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            id="contact"
            className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4 md:px-10"
        >
            {/* Decorative floating elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="parallax-card absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-800/20 to-indigo-800/20 blur-[80px]"
                    data-speed="0.1"
                ></div>
                <div
                    className="parallax-card absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 blur-[60px]"
                    data-speed="0.15"
                ></div>
                <div
                    className="parallax-card absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-rose-700/20 to-pink-700/20 blur-[90px]"
                    data-speed="0.2"
                ></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMzMzMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiIG9wYWNpdHk9IjAuMDciLz48L3N2Zz4=')]"></div>

            {/* Content container */}
            <div className="relative max-w-6xl mx-auto z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block mb-3">
                        <span className="text-amber-400 font-semibold tracking-wider">CONTACT ME</span>
                        <div className="h-1 w-16 bg-amber-400 mx-auto mt-1"></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss potential opportunities? Feel free to reach out. I'm always open to new ideas and collaborations.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Contact form */}
                    <motion.div
                        className="lg:w-2/3"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/70 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-xl">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <FaPaperPlane className="text-amber-400" /> Send a Message
                            </h2>

                            {isSuccess && (
                                <div className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg">
                                    <p className="text-green-400 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Your message has been sent successfully! I'll get back to you soon.
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300`}
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300`}
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.subject ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300`}
                                        placeholder="Project Inquiry"
                                    />
                                    {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                                </div>

                                <div className="mt-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300`}
                                        placeholder="Your message here..."
                                    ></textarea>
                                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                                </div>

                                <motion.button
                                    type="submit"
                                    className={`mt-8 w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/20 transition-all duration-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'}`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane /> Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact info */}
                    <motion.div
                        className="lg:w-1/3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="h-full bg-gradient-to-br from-gray-800/40 to-gray-900/70 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-xl">
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                            <div className="space-y-6">
                                <motion.div
                                    className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors duration-300"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="p-3 bg-amber-500/10 rounded-lg">
                                        <FaPhone className="text-amber-400 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-300">Phone</h3>
                                        <p className="mt-1 text-gray-300">+91 80800 38540</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors duration-300"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="p-3 bg-amber-500/10 rounded-lg">
                                        <IoIosMail className="text-amber-400 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-300">Email</h3>
                                        <p className="mt-1 text-gray-300">vishalpal.dev@gmail.com</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors duration-300"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="p-3 bg-amber-500/10 rounded-lg">
                                        <FaLocationDot className="text-amber-400 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-300">Location</h3>
                                        <p className="mt-1 text-gray-300">
                                            Naregaon, Chhatrapati SambhajiNagar<br />
                                            Maharashtra - 431001
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="mt-10">
                                <h3 className="font-semibold text-gray-300 mb-4">Connect with me</h3>
                                <div className="flex gap-4">
                                    <motion.a
                                        href="#"
                                        className="p-3 bg-gray-800/50 rounded-full hover:bg-amber-500 transition-colors duration-300"
                                        whileHover={{ y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <FaLinkedin className="text-xl" />
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        className="p-3 bg-gray-800/50 rounded-full hover:bg-amber-500 transition-colors duration-300"
                                        whileHover={{ y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <FaGithub className="text-xl" />
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        className="p-3 bg-gray-800/50 rounded-full hover:bg-amber-500 transition-colors duration-300"
                                        whileHover={{ y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <IoIosMail className="text-xl" />
                                    </motion.a>
                                </div>
                            </div>

                            <div className="mt-10 p-4 bg-gray-800/30 rounded-xl">
                                <h3 className="font-semibold text-gray-300 mb-2">Availability</h3>
                                <p className="text-gray-300 text-sm">
                                    I'm currently available for freelance work and open to full-time opportunities.
                                    Feel free to reach out anytime!
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* 3D effect decoration */}
                <motion.div
                    className="absolute -right-10 -bottom-20 w-96 h-96 rounded-full bg-gradient-to-r from-amber-500/10 to-purple-500/10 blur-[100px] z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
            </div>
        </div>
    );
};

export default Contact;