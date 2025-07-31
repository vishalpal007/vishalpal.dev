import React, { useEffect, useState } from 'react'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { useEmailSendByUserMutation } from "@/redux/userApi";
import { useFormik } from 'formik';
import * as yup from 'yup'
import classNames from 'classnames';
import { toast } from 'react-toastify';


const Contact = () => {

    const [sendMail, { isSuccess, isError, error, isLoading }] = useEmailSendByUserMutation({})

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: yup.object({
            name: yup.string().required("Name Is Required"),
            email: yup.string().email("Provide Valid Email").required("Email Is Required"),
            subject: yup.string().required("Subject Is Required"),
            message: yup.string().required("Message Is Required "),
        }),
        onSubmit: (values, { resetForm }) => {
            sendMail(values)
            resetForm()
        }
    })


    const handleClasses = (arg, isTextarea) => classNames({
        "input my-4 border-gray-400 focus:outline-none  w-full bg-white": true,
        "border-green-400 border-2": !formik.errors[arg] && formik.touched[arg],
        "border-red-600 border-2": formik.errors[arg] && formik.touched[arg],
        "h-36 p-2": isTextarea,
    });


    useEffect(() => {
        if (isSuccess) {
            toast.success("Email Send Success")
        } else {
            toast.error(JSON.stringify(error))
        }
    }, [isSuccess, isError])




    return <>
        <div id="contact" className='px-10 py-10 h-100%'>
            <div className="text-center text-3xl font-bold mb-10">
                Get In Touch !
            </div>
            <div class="flex flex-col lg:flex-row gap-4 md:flex-col sm:flex-col">
                <div class='bg-white p-10 rounded-xl lg:w-2/3'>

                    <form onSubmit={formik.handleSubmit}>
                        <div class='flex flex-col lg:flex-row lg:gap-4 gap-0'>
                            <input
                                {...formik.getFieldProps("name")}
                                className={handleClasses("name", false)}
                                type="text"
                                placeholder="Name :"
                                required
                            />
                            <input
                                {...formik.getFieldProps("email")}
                                className={handleClasses("email", false)}
                                type="text"
                                placeholder="Email :"
                                required
                            />
                        </div>
                        <input
                            {...formik.getFieldProps("subject")}
                            className={handleClasses("subject", false)}
                            type="text"
                            placeholder="Subject :"
                            required
                            class="input input-bordered my-4 border-gray-400 bg-white focus:outline-none focus:border-orange-400 w-full"
                        />
                        <textarea
                            {...formik.getFieldProps("message")}
                            className={handleClasses("message", true)}
                            placeholder="Message :"
                            required
                        />
                        <button
                            type='submit'
                            class="bg-warning text-white py-2 px-4 rounded-md font-semibold"
                            disabled={isLoading}
                        >
                            {isLoading ? "Please wait, sending email..." : "Send Message"}
                        </button>

                    </form>

                </div>

                <div class="lg:pl-4 mt-4 lg:mt-0 h-96 flex items-center">
                    <div className="px-10">
                        <div className="flex items-center gap-4 my-4">
                            <span className="text-xl text-orange-400"><FaPhone /></span>
                            <h1 className="text-xl font-semibold">
                                Phone
                                <p className="text-sm text-gray-400 my-2">+91 8080038540</p>
                            </h1>
                        </div>
                        <div className="flex items-center gap-4 my-4">
                            <span className="text-2xl text-orange-400"><IoIosMail /></span>
                            <h1 className="text-xl font-semibold">
                                Email
                                <p className="text-sm text-gray-400 my-2">vp461365@gmail.com</p>
                            </h1>
                        </div>
                        <div className="flex items-center gap-4 my-4">
                            <span className="text-2xl text-orange-400"><FaLocationDot /></span>
                            <h1 className="text-xl font-semibold">
                                Location
                                <p className="text-sm text-gray-400 my-2">
                                    Naregaon , Chhatrapati SambhajiNagar Maharashtra - 431001
                                </p>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}

export default Contact