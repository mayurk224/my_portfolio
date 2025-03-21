import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 h-full w-24 bg-gray-950 flex flex-col items-center justify-between py-8 shadow-lg z-50">
      

      <div className="flex text-white font-cormorant rounded-full bg-gray-600 w-16 h-16 text-3xl items-center justify-center">
        <h1 className="">MK</h1>
      </div>

      {/* Navigation Links */}
      <ul className=" md:flex flex-col space-y-6 text-white text-lg font-sourceCode ">
        <li>
          <Link to="/about" className="hover:text-blue-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-400">
            About
          </Link>
        </li>
        <li>
          <Link to="/skills" className="hover:text-blue-400">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/work" className="hover:text-blue-400">
            Work
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex items-center justify-center h-16 w-16">
        <button className="text-white flex items-center justify-center h-10 w-10 text-lg font-sourceCode hover:text-blue-400 rounded-full bg-gray-800">
          <MdOutlineWbSunny />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
