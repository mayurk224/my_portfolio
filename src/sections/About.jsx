import { motion } from "framer-motion";
import { userDetails } from "../data/data";

const About = () => {
  const aboutMe = userDetails.about;
  return (
    <section className="py-16 bg-gray-900 text-white px-6 md:px-20" id="about">
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
        About Me
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
        {aboutMe}
        <span className="text-gray-500 text-base font-sans font-normal">
          {"</p>"}
        </span>
      </motion.p>

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

export default About;
