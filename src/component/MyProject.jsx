import { useAddProductMutation, useDeleteProductMutation, useGetAllProductQuery, useUpdateProductMutation } from '@/redux/adminApi'
import React, { useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { FaEdit, FaTrash } from 'react-icons/fa';



const MyProject = () => {

    const [projectData, setProjectData] = useState()
    const [selectedProject, setSelectedProject] = useState({})

    const formRef = useRef(null);

    const { data } = useGetAllProductQuery()
    const [addProject] = useAddProductMutation()
    const [deleteProject] = useDeleteProductMutation()
    const [updateProject] = useUpdateProductMutation()

    const controls = useAnimation();

    const handleChange = e => {
        const { name, value, type, files } = e.target
        if (type === "file") {
            setProjectData({
                ...projectData,
                [name]: files[0],
                preview: URL.createObjectURL(files[0])
            })
        } else {
            setProjectData({ ...projectData, [name]: value })
        }
    }





    const handleSubmit = () => {
        const fd = new FormData()
        fd.append("name", projectData.name)
        fd.append("desc", projectData.desc)
        fd.append("hero", projectData.hero)
        fd.append("projectLink", projectData.projectLink)
        addProject(fd)
        formRef.current.reset()
    }



    const handleUpdateChange = (e) => {
        const { name, value, type, files } = e.target
        if (type === "file") {
            setSelectedProject({
                ...selectedProject,
                [name]: files[0],
                preview: URL.createObjectURL(files[0])
            })
        } else {
            setSelectedProject({
                ...selectedProject,
                [name]: value
            })
        }
    }


    const hanldeUpdateSubmit = () => {
        if (selectedProject.newImage) {
            const fd = new FormData()
            fd.append("name", selectedProject.name)
            fd.append("desc", selectedProject.desc)
            fd.append("hero", selectedProject.hero)
            fd.append("projectLink", selectedProject.projectLink)
            updateProject({ _id: selectedProject._id, fd })
        } else {
            updateProject({ _id: selectedProject._id, fd: selectedProject })
        }
    }


    return <div id='admin' className='h-full'>
        <div className='px-10 py-20'>
            <div className='flex justify-between'>

                <button
                    onClick={() => document.getElementById('my_modal_1').showModal()}
                    className="btn btn-primary text-white ">
                    Add Project
                </button>

            </div>

            {/* Add Modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="modal-action">
                        <form ref={formRef} method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <h3 className="font-bold text-lg">Add Project</h3>
                            <input
                                type="text"
                                onChange={handleChange}
                                placeholder="Enter Project Title..."
                                className="input input-bordered w-full my-4"
                                name='name'
                            />
                            <input
                                type="text"
                                onChange={handleChange}
                                placeholder="Enter Project Description..."
                                className="input input-bordered w-full my-4"
                                name='desc'
                            />
                            <input
                                type="file"
                                onChange={handleChange}
                                className="input input-bordered w-full my-4"
                                name='hero'
                            />

                            <div className="text-end">
                                {/* <img src={projectData.preview} height={50} alt="" /> */}
                            </div>

                            <input
                                type="text"
                                onChange={handleChange}
                                placeholder="Paste Project Link..."
                                className="input input-bordered w-full my-4"
                                name='projectLink'
                            />

                            <button
                                onClick={handleSubmit}
                                className="btn btn-primary">
                                Add Project
                            </button>

                        </form>
                    </div>
                </div>
            </dialog>
            {/* Add Modal */}


            {/* Project Data */}
            <motion.div
                animate={controls}
                initial={{ opacity: 100, y: 50 }}
                transition={{ duration: 0.8 }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 my-8">
                    {data && data.map((item, index) => (
                        <motion.div
                            className="w-full rounded-lg bg-white p-2 h-full cursor-pointer"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="overflow-hidden rounded-lg">
                                <img className="w-full h-72 rounded-xl mb-4 shadow-md" src={`${import.meta.env.VITE_BASE_URL}/${item.hero}`} alt={`${item.name} Image`} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2 text-gray-600 flex justify-between">
                                        <h1>{item.name}</h1>
                                        <div className='flex gap-4 items-center'>
                                            <h1
                                                onClick={e => deleteProject(item._id)}
                                                className='text-red-500 text-sm'>
                                                <FaTrash />
                                            </h1>
                                            <h1
                                                onClick={() => { window.my_modal_4.showModal(), setSelectedProject(item) }}
                                                className='text-sky-500'
                                            >
                                                <FaEdit />
                                            </h1>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-sm font-semibold">{item.desc}</p>
                                    <div className='text-end mt-4'>
                                        <a href={item.projectLink} target='_blank' className="btn btn-primary btn-sm">Visit Website</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            {/* Project Data */}

            {/* Edit Modal */}
            <dialog id="my_modal_4" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Update Project</h3>

                    <input
                        value={selectedProject && selectedProject.name}
                        type="text"
                        onChange={handleUpdateChange}
                        className="input input-bordered w-full my-3"
                        name='name'
                    />
                    <input
                        value={selectedProject && selectedProject.desc}
                        type="text"
                        onChange={handleUpdateChange}
                        className="input input-bordered w-full my-3"
                        name='desc'
                    />

                    {
                        selectedProject.newImage
                            ? <>
                                <input
                                    type="file"
                                    onChange={handleUpdateChange}
                                    className="input input-bordered w-full my-3"
                                    name='hero'
                                />
                                <img src={selectedProject.preview} height={50} alt="" />

                                <button onClick={e => setSelectedProject({ ...selectedProject, newImage: false })} className="btn btn-primary">Cancel</button>

                            </>
                            : <>
                                <img src={`http://localhost:5000/${selectedProject.hero}`} height={100} alt="" />
                                <button onClick={e => setSelectedProject({ ...selectedProject, newImage: true })} className="btn btn-primary">Change</button>
                            </>
                    }


                    <input
                        value={selectedProject && selectedProject.projectLink}
                        type="text"
                        onChange={handleUpdateChange}
                        className="input input-bordered w-full my-3"
                        name='projectLink'
                    />


                    <button
                        onClick={hanldeUpdateSubmit}
                        className="btn btn-primary">
                        Update Project
                    </button>

                </form>
            </dialog>
            {/* Edit Modal */}


        </div>

    </div>
}

export default MyProject