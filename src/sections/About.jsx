import { motion } from "framer-motion";

const About = () => {
  return (
    
    <section className="py-16 bg-gray-900 text-white px-6 md:px-20">
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
        <span className="text-gray-500 text-base font-sans font-normal">{"<h2>"}</span>
        About Me
        <span className="text-gray-500 text-base font-sans font-normal">{"</h2>"}</span>
      </motion.h2>

      <motion.p
        className="mt-4 text-lg flex flex-col text-gray-400 font-fira "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <span className="text-gray-500 text-base font-sans font-normal">{"<p>"}</span>
        Hello and welcome to my portfolio! I am a passionate front-end developer with a keen eye for design and a love for crafting seamless user experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in creating visually stunning and responsive websites. My goal is to bring ideas to life by combining creativity with technical expertise, ensuring that each project I work on not only looks great but also functions flawlessly across different devices. I thrive on collaborating with clients and fellow developers to deliver innovative solutions that exceed expectations. Browse through my portfolio to see a showcase of my work and feel free to reach out if you have any exciting projects in mind. Let’s create something amazing together!
        <span className="text-gray-500 text-base font-sans font-normal">{"</p>"}</span>
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