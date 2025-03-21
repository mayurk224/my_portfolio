import { Link } from "react-router-dom";
import { MdOutlineWbSunny } from "react-icons/md";

const Navbar = () => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/contact-me", label: "Contact Me" },
  ];

  return (
    <nav className="fixed left-0 top-0 h-full w-36 bg-gray-950 flex flex-col items-center justify-between py-8 shadow-lg z-50">
      {/* Logo */}
      <div className="flex text-white font-cormorant rounded-full bg-gray-600 w-16 h-16 text-3xl items-center justify-center">
        <h1>MK</h1>
      </div>

      {/* Navigation Links */}
      <ul className="md:flex flex-col space-y-6 text-white text-lg font-sourceCode">
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} className="hover:text-blue-400">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Theme Toggle Button */}
      <button className="text-white flex items-center justify-center h-10 w-10 text-lg font-sourceCode hover:text-blue-400 rounded-full bg-gray-800">
        <MdOutlineWbSunny />
      </button>
    </nav>
  );
};

export default Navbar;
