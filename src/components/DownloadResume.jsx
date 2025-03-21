import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const DownloadResume = () => {
  const resumeLink = "/resume.pdf"; 

  return (
    <motion.a
      href={resumeLink}
      download="my-resume.pdf" 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
      className="font-fira inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-lg font-semibold shadow-lg transition-all hover:bg-blue-600 cursor-pointer"
    >
      <FaDownload aria-hidden="true" />
      <span className="cursor-pointer">Download Resume</span>
    </motion.a>
  );
};

export default DownloadResume;
