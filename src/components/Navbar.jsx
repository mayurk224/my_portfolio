import { MdOutlineWbSunny } from "react-icons/md";
import { motion } from "framer-motion";
import { userDetails } from "../data/data";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navLinks = userDetails.navLinks;

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navLinks.forEach(({ section }) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-0 top-0 h-full w-36 bg-gray-950 flex flex-col items-center justify-between py-8 shadow-lg z-50"
    >
      {/* Logo */}
      <motion.div
        className="flex text-white font-cormorant rounded-full bg-gray-600 w-16 h-16 text-3xl items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1>
          {(() => {
            const name = userDetails.name;
            const nameParts = name.split(" ");
            return `${nameParts[0][0]}${nameParts[1][0]}`;
          })()}
        </h1>
      </motion.div>

      {/* Navigation Links */}
      <ul className="md:flex flex-col space-y-6 text-white text-lg font-sourceCode">
        {navLinks.map(({ section, label, id }, index) => (
          <motion.li
            key={id}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById(section)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer"
          >
            <a
              className={
                activeSection === section
                  ? "text-blue-400"
                  : "text-gray-400 hover:text-blue-400"
              }
            >
              {label}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Theme Toggle Button */}
      <motion.button
        className="text-white flex items-center justify-center h-10 w-10 text-lg font-sourceCode hover:text-blue-400 rounded-full bg-gray-950"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* <MdOutlineWbSunny /> */}
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
