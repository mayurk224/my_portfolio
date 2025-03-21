import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Jane Smith",
      role: "Frontend Developer",
      feedback:
        "Working with you was an absolute pleasure. Your attention to detail and creative problem-solving skills made our project a success. I was particularly impressed by your ability to translate complex requirements into elegant code.",
      image: "/testimonials/jane.jpg",
    },
    {
      name: "John Doe",
      role: "Project Manager",
      feedback:
        "Your contributions to our team were invaluable. You consistently delivered high-quality work ahead of deadlines and were always willing to help others. Your technical expertise and communication skills are truly exceptional.",
      image: "/testimonials/john.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "UX Designer",
      feedback:
        "I've rarely worked with developers who understand design principles as well as you do. You didn't just implement my designs - you enhanced them with thoughtful suggestions. It was a true collaboration.",
      image: "/testimonials/sarah.jpg",
    },
    {
      name: "Michael Chen",
      role: "Tech Lead",
      feedback:
        "Your code is not only functional but also clean and maintainable. You have a talent for finding simple solutions to complex problems. Any team would be lucky to have someone with your skills and positive attitude.",
      image: "/testimonials/michael.jpg",
    },
    {
      name: "Emily Wilson",
      role: "Startup Founder",
      feedback:
        "You took my vague idea and turned it into a beautiful, functional product. Your insights during the development process helped shape the entire direction of our business. I couldn't be more grateful.",
      image: "/testimonials/emily.jpg",
    },
  ];

  // Duplicate testimonials to create the illusion of infinite scrolling
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollSpeed = 0.5; // pixels per frame

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let isHovering = false;

    const scroll = () => {
      if (!isHovering) {
        setScrollPosition((prev) => {
          // Calculate new position
          const newPosition = prev + scrollSpeed;

          // Check if we need to reset the scroll position
          // When we've scrolled the width of one set of testimonials
          const firstSetWidth = scrollContainer.scrollWidth / 3;

          if (newPosition >= firstSetWidth) {
            // Reset to beginning of the second set
            return 0;
          }

          return newPosition;
        });
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(scroll);

    // Add event listeners for hover
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

  // Apply the scrolling
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <section className="py-16 text-white bg-gray-900 px-10 md:px-20 overflow-hidden">
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
        What my clients and colleagues have to say about working with me
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
              {/* Quote Icons */}
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
