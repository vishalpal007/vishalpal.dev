import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return <>
        <div className='px-10 py-8 bg-blue-950 text-white' >
            <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col items-center justify-between gap-4'>
                <div>
                    <Link to="/admin" className='btn btn-sm bg-orange-400 hover:bg-orange-600 px-10 font-bold text-slate-100'>Admin</Link>
                </div>
                <div className='text-lg'>
                    <h1 className='text-slate-100'>© 2024 Copyright Reserved by Vishal Pal.</h1>
                </div>
                <div className='flex gap-4 text-slate-100'>
                    <a href='https://github.com/vishalpal007' target='_blank' className='hover:bg-orange-400 hover:rounded-full hover:p-2 p-2 '><FaGithub /></a>
                    <a href='https://www.instagram.com/vishu_9x._/' target='_blank' className='hover:bg-orange-400 hover:rounded-full hover:p-2 p-2 '><FaInstagram /></a>
                    <a href='https://www.linkedin.com/in/vishal-pal-913094250/' target='_blank' className='hover:bg-orange-400 hover:rounded-full hover:p-2 p-2 '><FaLinkedin /></a>
                </div>
            </div>
        </div>
    </>
}

export default Footer