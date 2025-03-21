import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPlay,
  FaArrowRight,
} from "react-icons/fa";

const projects = [
  {
    title: "Weather App",
    image: "/weather-app.png",
    description:
      "A simple weather application that fetches real-time weather data based on user input. Built with React and OpenWeather API.",
    github: "#",
    live: "#",
    details: "#",
  },
  {
    title: "Tic Tac Toe",
    image: "/tic-tac-toe.png",
    description:
      "A two-player Tic Tac Toe game built using React with state management for real-time game updates.",
    github: "#",
    live: "#",
    details: "#",
  },
  {
    title: "Drum Kit",
    image: "/drum-kit.png",
    description:
      "A virtual drum kit where users can play drum sounds by clicking or using keyboard keys. Developed using JavaScript.",
    github: "#",
    live: "#",
    details: "#",
  },
  {
    title: "Guess the Word",
    image: "/guess-word.png",
    description:
      "An interactive word guessing game that challenges players to guess a hidden word within a limited number of tries.",
    github: "#",
    live: "#",
    details: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-16 text-white bg-gray-900 px-10 md:px-20">
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
      {/* Section Title */}
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

      {/* Description */}
      <motion.p
        className="mt-4 text-lg flex flex-col text-gray-400 font-fira "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <span className="text-gray-500 text-base font-sans font-normal">
          {"<p>"}
        </span>
        Welcome to a curated showcase of some of my recent collaborations! These
        projects represent just a small glimpse of my work. Explore this
        collection as a mere glimpse into the vast ocean of my creative
        endeavors
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
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-5 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Project Title */}
            <h3 className="mt-4 text-xl font-semibold text-blue-400">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-gray-400 mt-2 text-sm">{project.description}</p>

            {/* Technologies Used (new) */}
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies?.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-4 flex justify-between">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href={project.details}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaPlay />
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
