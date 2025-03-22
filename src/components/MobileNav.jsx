import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { userDetails } from "../data/data";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = userDetails.navLinks;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="fixed right-6 bottom-20 md:hidden z-50 justify-end items-end flex flex-col ">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg mb-4 overflow-hidden"
          >
            <ul className=" bg-gray-800 font-fira flex flex-col w-full text-white ">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  className="border-b border-gray-200 last:border-b-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(item.id)}
                >
                  <a className="block w-full py-3 px-6 text-lg font-medium hover:bg-gray-100 text-end">
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center border-2 border-black"
        onClick={toggleDropdown}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex flex-col items-center justify-center gap-1">
          <div
            className={`w-6 h-1 bg-white rounded-full transition-all ${
              isOpen ? "transform rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-white rounded-full transition-all ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-white rounded-full transition-all ${
              isOpen ? "transform -rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
      </motion.button>
    </div>
  );
};

export default MobileNav;
