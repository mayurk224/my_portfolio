import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { userDetails } from "../data/data";

const Testimonial = () => {
  const testimonials = userDetails.testimonials;

  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollSpeed = 0.5;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let isHovering = false;

    const scroll = () => {
      if (!isHovering) {
        setScrollPosition((prev) => {
          const newPosition = prev + scrollSpeed;

          const firstSetWidth = scrollContainer.scrollWidth / 3;

          if (newPosition >= firstSetWidth) {
            return 0;
          }

          return newPosition;
        });
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <section
      className="py-16 text-white bg-gray-900 px-10 md:px-20 overflow-hidden"
      id="testimonials"
    >
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
        Testimonials
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
        {userDetails.testimonialsDescription}
        <span className="text-gray-500 text-base font-sans font-normal">
          {"</p>"}
        </span>
      </motion.p>

      <div
        ref={scrollRef}
        className="flex overflow-x-hidden rounded-4xl mt-5 w-[1150px]"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex space-x-6 py-2 ">
          {duplicatedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative flex-shrink-0"
              style={{ width: "350px" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: Math.min(index * 0.1, 2) }}
              whileHover={{ scale: 1.02 }}
            >
              <FaQuoteLeft className="absolute top-4 left-4 text-blue-400 text-2xl opacity-50" />
              <FaQuoteRight className="absolute bottom-4 right-4 text-blue-400 text-2xl opacity-50" />

              {/* Testimonial Content */}
              <p className="text-gray-300 italic text-sm leading-relaxed mt-6 mb-6 min-h-32">
                "{testimonial.feedback}"
              </p>

              {/* User Info */}
              <div className="flex items-center mt-auto space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-400 object-cover"
                />
                <div>
                  <h3 className="text-blue-400 font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm italic">
          Hover over a testimonial to pause scrolling
        </p>
      </div>

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

export default Testimonial;
