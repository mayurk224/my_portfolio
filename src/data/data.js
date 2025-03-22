import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import docsProjectImage from "../assets/docs-project.png";
import anyonecancook from "../assets/anyonecancook.png";
import ochidesign from "../assets/ochi.png";
import purchaseparadise from "../assets/purchaseParadise.png";

export const userDetails = {
  name: "Mayur Kamble",
  jobTitle: "Full Stack Developer",
  jobSubtitle: "Backend Developer / MERN Stack",
  email: "mayurkamble0250@gmail.com",
  phone: "+91 7262851772",
  location: {
    city: "Nagpur",
    state: "Maharashtra",
    country: "India",
  },
  about: `Hello and welcome to my portfolio! I am a passionate front-end developer with a keen eye for design and a love for crafting seamless user experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in creating visually stunning and responsive websites. My goal is to bring ideas to life by combining creativity with technical expertise, ensuring that each project I work on not only looks great but also functions flawlessly across different devices. I thrive on collaborating with clients and fellow developers to deliver innovative solutions that exceed expectations. Browse through my portfolio to see a showcase of my work and feel free to reach out if you have any exciting projects in mind. Let’s create something amazing together!`,

  skills: [
    { name: "React JS", percentage: "90%" },
    { name: "Responsive Design (Tailwind)", percentage: "85%" },
    { name: "HTML, CSS, JS", percentage: "95%" },
    { name: "Database (MongoDB, SQL)", percentage: "80%" },
    { name: "API Integration", percentage: "85%" },
    { name: "Performance Optimization", percentage: "75%" },
    { name: "Version Control (GitHub)", percentage: "85%" },
    { name: "Node JS", percentage: "85%" },
    { name: "Build & Deployment (Vercel, Netlify, GitHub)", percentage: "90%" },
  ],

  skillsDescription: `I specialize in creating successful responsive websites that are fast, user-friendly, and built with industry best practices. With expertise in front-end development, including HTML, CSS, and JavaScript, I build interactive web applications. I also have experience working with CMS platforms like WordPress and Magento.`,

  socialLinks: [
    {
      name: "Github",
      url: "https://github.com/mayurkamble0250",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mayurkamble0250",
      icon: FaLinkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mayurkamble_02/",
      icon: FaInstagram,
    },
  ],

  projects : [
    {
      title: "Docs-App-Concept",
      image: docsProjectImage,
      description:
        "This repository contains a concept design for a Notes Doc App, built with React. The app showcases drag-and-drop functionality using Framer Motion to provide smooth animations and interactive UI elements.",
      github: "https://github.com/mayurk224/Docs-App-Concept",
      live: "https://docs-app-concept.vercel.app/",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      details: "#",
    },
    {
      title: "Anyone-Can-Cook Recipe Book",
      image: anyonecancook,
      description:
        "This Recipe Book project is a full-featured web application built using React and Firebase. It allows users to explore, add, and manage recipes easily.",
      github: "https://github.com/mayurk224/Anyone-Can-Cook_Recipe-Book",
      live: "https://anyone-can-cook-recipe-book.vercel.app/",
      technologies: ["React", "Firebase", "CSS"],
      details: "#",
    },
    {
      title: "Purchase Paradise",
      image: purchaseparadise,
      description:
        "Purchase Paradise is a frontend-only e-commerce website that offers users a seamless shopping experience.",
      github: "https://github.com/mayurk224/e-com-website",
      live: "https://purchase-paradise-e-com-website.vercel.app/",
      technologies: ["React", "CSS", "JavaScript"],
      details: "#",
    },
    {
      title: "Ochi Design - Clone Website",
      image: ochidesign,
      description:
        "This repository contains a partial clone of the Ochi Design website, created using React. It focuses on the Home page with some animations to capture the interactive elements of the original design.",
      github: "https://github.com/mayurk224/Website-with-Animation-React",
      live: "https://ochi-design-clone-website.vercel.app/",
      technologies: ["React", "CSS", "Framer Motion"],
      details: "#",
    },
  ],

  projectDescription: `Welcome to a curated showcase of some of my recent collaborations! These projects represent just a small glimpse of my work. Explore this collection as a mere glimpse into the vast ocean of my creative endeavors.`,

  testimonials: [
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
  ],

  testimonialsDescription: `What my clients and colleagues have to say about working with me`,

  contactDescription: `I am actively seeking freelance opportunities, particularly those that involve ambitious or large-scale projects. Feel free to reach out if you have any questions or ideas!`,

  navLinks: [
    { section: "home", label: "Home" },
    { section: "about", label: "About" },
    { section: "skills", label: "Skills" },
    { section: "projects", label: "Projects" },
    { section: "testimonials", label: "Testimonials" },
    { section: "contact", label: "Contact Me" },
  ],
};
