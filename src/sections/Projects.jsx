import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPlay,
  FaArrowRight,
} from "react-icons/fa";
import { userDetails } from "../data/data";

const Projects = () => {
  return (
    <section
      className="py-16 text-white bg-gray-900 px-10 md:px-20"
      id="projects"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold font-sourceCode relative z-10 mt-2 left-[-1%]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-base text-gray-500 font-sans font-normal">
          {"<section>"}
        </h1>
      </motion.h1>
      <motion.h2
        className="text-4xl flex flex-col md:text-5xl font-bold font-sourceCode text-blue-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-gray-500 text-base font-sans font-normal">
          {"<h2>"}
        </span>
        Projects
        <span className="text-gray-500 text-base font-sans font-normal">
          {"</h2>"}
        </span>
      </motion.h2>

      <motion.p
        className="mt-4 text-lg flex flex-col text-gray-400 font-fira "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <span className="text-gray-500 text-base font-sans font-normal">
          {"<p>"}
        </span>
        {userDetails.projectDescription}
        <span className="text-gray-500 text-base font-sans font-normal">
          {"<p>"}
        </span>
      </motion.p>

      <motion.h1
        className="text-5xl md:text-7xl font-bold font-sourceCode relative z-10 mt-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-base text-gray-500 font-sans font-normal">
          {"<div>"}
        </h1>
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-3">
        {userDetails.projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="relative overflow-hidden rounded-md mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              {project.title}
            </h3>

            <div className="mb-4">
              <p className="text-gray-400 text-sm line-clamp-3 ">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies?.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between mt-auto pt-3 border-t border-gray-700">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="GitHub Repository"
                tooltip="GitHub Repository"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={project.details}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Project Details"
                tooltip="Project Details"
              >
                <FaExternalLinkAlt size={16} />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Live Demo"
                tooltip="Live Demo"
              >
                <FaPlay size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.h1
        className="text-5xl md:text-7xl font-bold font-sourceCode relative z-10 mt-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-base text-gray-500 font-sans font-normal">
          {"</div>"}
        </h1>
      </motion.h1>

      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="/projects"
          className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 font-fira"
        >
          View All Projects <FaArrowRight />
        </a>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-7xl font-bold font-sourceCode relative z-10 mt-2 left-[-1%]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-base text-gray-500 font-sans font-normal">
          {"</section>"}
        </h1>
      </motion.h1>
    </section>
  );
};

export default Projects;
