import React, { useEffect, useState } from "react";
import {
  useAddProjectMutation,
  useDeleteProjectMutation,
  useGetAllProjectsQuery,
  useUpdateProjectMutation,
} from "@/redux/apis/projectApi";
import { FiPlus, FiEdit, FiTrash2, FiSearch } from "react-icons/fi";
import { toast } from "react-toastify";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // RTK Query Hooks
  const {
    data: projectsData,
    isLoading: isProjectsLoading,
    isError: isProjectsError,
    refetch,
  } = useGetAllProjectsQuery();

  const [addProject, { isLoading: isAdding, isSuccess: isAddSuccess, isError: isAddError, error: addError }] =
    useAddProjectMutation();
  const [
    updateProject,
    { isLoading: isUpdating, isSuccess: isUpdateSuccess, isError: isUpdateError, error: updateError },
  ] = useUpdateProjectMutation();
  const [
    deleteProject,
    { isLoading: isDeleting, isSuccess: isDeleteSuccess, isError: isDeleteError, error: deleteError },
  ] = useDeleteProjectMutation();

  // Form state for modal
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    technologies: "",
    link: "",
    github: "",
    hero: null,
  });

  // Filtered Projects
  const projects = projectsData?.projects || [];
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "hero") {
      setFormData((prev) => ({ ...prev, hero: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.category || !formData.description) {
      toast.error("Please fill all required fields");
      return;
    }

    const fd = new FormData();
    fd.append("title", formData.title);
    fd.append("category", formData.category);
    fd.append("description", formData.description);
    formData.technologies
      .split(",")
      .map((tech) => tech.trim())
      .forEach((tech) => fd.append("technologies", tech));

    if (formData.hero) fd.append("hero", formData.hero);
    if (formData.link) fd.append("link", formData.link);
    if (formData.github) fd.append("github", formData.github);

    if (currentProject) {
      await updateProject({ id: currentProject._id, body: fd });
    } else {
      await addProject(fd);
    }
  };

  // Edit handler
  const handleEdit = (project) => {
    setCurrentProject(project);
    setFormData({
      title: project.title,
      category: project.category,
      description: project.description || "",
      technologies: project.technologies?.join(", ") || "",
      link: project.link || "",
      github: project.github || "",
      hero: null,
    });
    setShowModal(true);
  };

  // Delete handler
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      await deleteProject(id);
    }
  };

  // Create new project handler
  const handleCreateNew = () => {
    setCurrentProject(null);
    setFormData({
      title: "",
      category: "",
      description: "",
      technologies: "",
      link: "",
      github: "",
      hero: null,
    });
    setShowModal(true);
  };

  // Handle success/error side effects
  useEffect(() => {
    if (isAddSuccess) {
      toast.success("Project added successfully");
      setShowModal(false);
      refetch();
    }
    if (isUpdateSuccess) {
      toast.success("Project updated successfully");
      setShowModal(false);
      refetch();
    }
    if (isDeleteSuccess) {
      toast.success("Project deleted successfully");
      refetch();
    }

    if (isAddError) toast.error(addError?.data?.message || "Failed to add project");
    if (isUpdateError) toast.error(updateError?.data?.message || "Failed to update project");
    if (isDeleteError) toast.error(deleteError?.data?.message || "Failed to delete project");
    if (isProjectsError) toast.error("Failed to fetch projects");
  }, [
    isAddSuccess,
    isUpdateSuccess,
    isDeleteSuccess,
    isAddError,
    isUpdateError,
    isDeleteError,
    isProjectsError,
  ]);

  return (
    <>
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
            <p className="mt-1 text-sm text-gray-500">Manage all your projects in one place</p>
          </div>
          <button
            onClick={handleCreateNew}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <FiPlus className="mr-2 h-4 w-4" />
            New Project
          </button>
        </div>

        <div className="mt-4 flex">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none sm:text-sm"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          {isProjectsLoading ? (
            <p className="p-4 text-center">Loading projects...</p>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <tr key={project._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {project.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(project.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleEdit(project)}
                          className="text-indigo-600 hover:text-indigo-900 mr-3"
                        >
                          <FiEdit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(project._id)}
                          disabled={isDeleting}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FiTrash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                      No projects found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-1/2 lg:w-1/3 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center pb-3">
              <h3 className="text-lg font-bold">{currentProject ? "Edit Project" : "Create New Project"}</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              {/* Title */}
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Project Title *
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
                  required
                />
              </div>

              {/* Category */}
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category *
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
                  required
                />
              </div>

              {/* Description */}
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description *
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows="3"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
                  required
                ></textarea>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">
                  Technologies (comma separated)
                </label>
                <input
                  type="text"
                  name="technologies"
                  id="technologies"
                  value={formData.technologies}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
                />
              </div>

              {/* Hero Image */}
              <div className="mb-4">
                <label htmlFor="hero" className="block text-sm font-medium text-gray-700">
                  Hero Image
                </label>
                <input
                  type="file"
                  name="hero"
                  id="hero"
                  accept="image/*"
                  onChange={handleInputChange}
                  className="mt-1 block w-full text-sm"
                />
              </div>

              {/* Links */}
              <div className="mb-4">
                <label htmlFor="link" className="block text-sm font-medium text-gray-700">
                  Live Link
                </label>
                <input
                  type="url"
                  name="link"
                  id="link"
                  value={formData.link}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="github" className="block text-sm font-medium text-gray-700">
                  Github Link
                </label>
                <input
                  type="url"
                  name="github"
                  id="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
                />
              </div>

              {/* Actions */}
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isAdding || isUpdating}
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  {isAdding || isUpdating ? "Saving..." : currentProject ? "Update Project" : "Create Project"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
