import React from "react";
import Profile from "../assets/profile.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-10 py-10 border-t">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Profile Section */}
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <img
              src={Profile}
              alt="Profile"
              className="h-14 w-14 rounded-full object-cover"
            />
            <h1 className="font-sourceCode font-semibold text-xl md:text-2xl">
              Mayur Kamble
            </h1>
          </div>
          <div className="mt-4 space-y-1 font-sourceCode text-gray-300">
            <p>mayurkamble0250@gmail.com</p>
            <p>+91 7262851772</p>
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="text-left md:text-right">
          <h3 className="text-lg font-semibold font-fira text-gray-300">Quick Access</h3>
          <ul className="font-fira space-y-2 mt-3 text-gray-400">
            <li className="hover:text-blue-400 cursor-pointer">About Me</li>
            <li className="hover:text-blue-400 cursor-pointer">Skills</li>
            <li className="hover:text-blue-400 cursor-pointer">Projects</li>
            <li className="hover:text-blue-400 cursor-pointer">Testimonials</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-700" />

      {/* Copyright & Social Links */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <p className="text-gray-400">&copy; 2025 Mayur Kamble. All rights reserved.</p>

        <div className="flex space-x-6 mr-10">
          <a href="https://github.com/mayurk224" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-400 hover:text-white text-2xl transition duration-300" />
          </a>
          <a href="https://linkedin.com/in/mayurkamble" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-400 hover:text-white text-2xl transition duration-300" />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-400 hover:text-white text-2xl transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
