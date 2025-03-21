import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/profile.jpg";
import DownloadResume from "../components/DownloadResume";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-start text-left bg-gray-900 text-white px-10 md:px-20 relative overflow-hidden">
      <div className="absolute top-10 right-10">
        <DownloadResume />
      </div>
      <motion.h1
        className="text-5xl md:text-7xl font-bold font-sourceCode relative z-10 left-[-4%]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-base text-gray-500 font-sans font-normal">
          {"<html>"}
        </h1>
      </motion.h1>
      <motion.h1
        className="text-5xl md:text-7xl font-bold font-sourceCode relative z-10 left-[-2%] mt-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-base text-gray-500 font-sans font-normal">
          {"<body>"}
        </h1>
      </motion.h1>

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
      {/* Background Code-like Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('/path-to-your-code-background-image.jpg')] bg-cover bg-center" />

      {/* Animated Heading */}
      <div className="flex flex-col sm:flex-row sm:items-start relative">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-sourceCode relative z-10 mt-2 sm:text-left"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-base text-gray-500 font-sans font-normal">
            {"<h1>"}
          </h1>
          Hi, <br /> I'm <span className="text-blue-400">Mayur</span> <br />
          Front-End Developer
          <h1 className="text-base text-gray-500 font-sans font-normal">
            {"</h1>"}
          </h1>
        </motion.h1>
        <motion.div
          className="w-36 h-36 sm:w-40 sm:h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-400 mt-6 sm:mt-0 sm:ml-4 md:ml-6 mx-auto sm:mx-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <img
            src={profilePic}
            alt="Profile Picture"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-400 font-fira relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="text-base text-gray-500 font-sans font-normal">
          {"<p>"}
        </h1>
        Frontend Developer / Full Stack Enthusiast
        <h1 className="text-base text-gray-500 font-sans font-normal">
          {"</p>"}
        </h1>
      </motion.p>

      {/* Contact Button */}
      <motion.h1
        className="relative z-10 mt-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-base text-gray-500 font-sans font-normal">
          {"<button>"}
        </h1>
      </motion.h1>

      <div className="flex flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-4 mt-3 relative z-10">
        <motion.a
          href="#contact"
          className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Contact Me
        </motion.a>

        <div className="flex space-x-3">
          <motion.a
            href="#contact"
            className="p-3 border border-blue-400 text-blue-400 rounded-full text-2xl hover:bg-blue-400 hover:text-black transition"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            href="#contact"
            className="p-3 border border-blue-400 text-blue-400 rounded-full text-2xl hover:bg-blue-400 hover:text-black transition"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="#contact"
            className="p-3 border border-blue-400 text-blue-400 rounded-full text-2xl hover:bg-blue-400 hover:text-black transition"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>

      <motion.h1
        className="relative z-10 mt-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-base text-gray-500 font-sans font-normal">
          {"</button>"}
        </h1>
      </motion.h1>

      <motion.h1
        className="relative z-10 mt-2 left-[-1%]"
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

export default Hero;
