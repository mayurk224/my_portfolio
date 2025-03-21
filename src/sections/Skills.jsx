import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="py-16 px-10 md:px-20 bg-gray-900 text-white relative overflow-hidden">
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
        Skills
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
        I specialize in creating successful responsive websites that are fast,
        user-friendly, and built with industry best practices. With expertise in
        front-end development, including HTML, CSS, and JavaScript, I build
        interactive web applications. I also have experience working with CMS
        platforms like WordPress and Magento.
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

      <motion.div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "React JS", percentage: "90%" },
          { name: "Responsive Design (Tailwind)", percentage: "85%" },
          { name: "HTML, CSS, JS", percentage: "95%" },
          { name: "Database (MongoDB,SQL)", percentage: "80%" },
          { name: "API Integration", percentage: "85%" },
          { name: "Performance Optimization", percentage: "75%" },
          { name: "Version Control (GitHub)", percentage: "85%" },
          { name: "Node Js", percentage: "85%" },
          {
            name: "Build & Deployment (Vercel, Netlify, GitHub)",
            percentage: "90%",
          },
        ].map((skill, index) => (
          <div key={index} className="w-64">
            <span className="text-lg font-semibold">{skill.name}</span>
            <div className="w-full bg-gray-700 h-2 rounded-md mt-1">
              <motion.div
                className="h-2 bg-blue-400 rounded-md"
                initial={{ width: 0 }}
                animate={{ width: skill.percentage }}
                transition={{ duration: 1.5 }}
              />
            </div>
          </div>
        ))}
      </motion.div>

      <motion.h1
        className="text-5xl md:text-7xl font-bold font-sourceCode relative z-10 mt-2 "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-base text-gray-500 font-sans font-normal">
          {"</div>"}
        </h1>
      </motion.h1>

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

export default Skills;
