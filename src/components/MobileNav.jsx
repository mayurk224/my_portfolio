import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { userDetails } from "../data/data";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = userDetails?.navLinks || [];

  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach(({ section }) => {
      const element = document.getElementById(section);
      if (element) observerRef.current.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, [navItems]);

  const handleNavClick = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
    setIsOpen(false); // Close dropdown after clicking
  };

  return (
    <div className="fixed right-6 bottom-20 md:hidden z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 rounded-lg shadow-lg mb-4 overflow-hidden"
          >
            <ul className="font-fira flex flex-col w-full text-white">
              {navItems.map(({ section, label,id }, index) => (
                <motion.li
                  key={id}
                  className="border-b border-gray-700 last:border-b-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(section)}
                >
                  <a
                    className={`block w-full py-3 px-6 text-lg font-medium text-end transition ${
                      activeSection === section
                        ? "text-blue-400"
                        : "text-gray-400 hover:text-blue-400"
                    }`}
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu Button */}
      <motion.button
        className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center border-2 border-black"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative flex flex-col gap-1">
          <span
            className={`block w-6 h-1 bg-white rounded-full transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-1 bg-white rounded-full transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-1 bg-white rounded-full transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </motion.button>
    </div>
  );
};

export default MobileNav;
