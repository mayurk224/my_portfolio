import { motion } from "framer-motion";
import Illustration from "../assets/illustration.png";
import { useState } from "react";
import emailjs from "emailjs-com"; // Ensure emailjs is imported
import { userDetails } from "../data/data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_ID
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setLoading(false);
        setError("Failed to send message. Please try again.");
        console.error("EmailJS Error:", err);
      });
  };

  return (
    <section
      className="py-16 bg-gray-900 text-white px-10 md:px-20"
      id="contact"
    >
      {/* Section Title */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold font-sourceCode relative z-10 mt-2 left-[-1%]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-base text-gray-500 font-sans font-normal">
          {"<section>"}
        </span>
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
        Contact Me
        <span className="text-gray-500 text-base font-sans font-normal">
          {"</h2>"}
        </span>
      </motion.h2>

      <motion.p
        className="mt-4 text-lg flex flex-col text-gray-400 font-fira"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <span className="text-gray-500 text-base font-sans font-normal">
          {"<p>"}
        </span>
        {userDetails.contactDescription}
        <span className="text-gray-500 text-base font-sans font-normal">
          {"</p>"}
        </span>
      </motion.p>

      {/* Call to Action */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl md:text-5xl font-bold font-fira">
          Got a <span className="text-blue-400">Project?</span>
          <br /> Let’s talk
        </h3>
      </motion.div>

      {/* Contact Form */}
      <div className="flex flex-col md:flex-row justify-between mx-auto max-w-6xl px-4">
        <div className="h-96 w-96 scale-150 hidden md:block">
          <img src={Illustration} alt="Contact illustration" />
        </div>

        <motion.form
          onSubmit={handleSubmit} // Add onSubmit handler
          className="mt-8 max-w-lg mx-auto space-y-6 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            aria-label="Your Name"
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            aria-label="Your Email"
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            aria-label="Your Message"
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>

      {/* Success/Error Messages */}
      {success && (
        <p className="text-green-500 text-center mt-4">
          Message sent successfully!
        </p>
      )}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      <motion.h1
        className="text-5xl md:text-7xl font-bold font-sourceCode relative z-10 mt-2 left-[-1%]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-base text-gray-500 font-sans font-normal">
          {"</section>"}
        </span>
      </motion.h1>
    </section>
  );
};

export default Contact;
