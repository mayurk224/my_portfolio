import React from "react";
import Profile from "../assets/profile.jpg";
import { userDetails } from "../data/data";

const Footer = () => {
  const name = userDetails.name;
  const email = userDetails.email;
  const phone = userDetails.phone;
  const navLinks = userDetails.navLinks;
  const socialLinks = userDetails.socialLinks;

  return (
    <footer className="bg-gray-900 text-white px-6 md:px-10 py-10 border-t">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <img
              src={Profile}
              alt="Profile"
              className="h-14 w-14 rounded-full object-cover"
            />
            <h1 className="font-sourceCode font-semibold text-xl md:text-2xl">
              {name}
            </h1>
          </div>
          <div className="mt-4 space-y-1 font-sourceCode text-gray-300">
            <p>{email}</p>
            <p>{phone}</p>
          </div>
        </div>

        <div className="text-left md:text-right">
          <h3 className="text-lg font-semibold font-fira text-gray-300">
            Quick Access
          </h3>
          <ul className="font-fira space-y-2 mt-3 text-gray-400">
            {navLinks.map((link) => (
              <li key={link.id} className="hover:text-blue-400 cursor-pointer">
                {link.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>

        <div className="flex space-x-6 sm:mr-10">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <link.icon className="text-gray-400 hover:text-white text-2xl transition duration-300" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
