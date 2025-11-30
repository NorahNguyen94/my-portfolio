import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Heading from "./components/Heading";
import SubHeading from "./components/SubHeading";
import Card from "./components/Card";
import SkillCard from "./components/SkillCard";
import { SiTicktick } from "react-icons/si";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";

function App() {
  const projects = [
    {
      title: "Chat Video System",
      desc: "A full-stack web application that enables users to communicate through video calls and text messaging. It features user authentication, real-time video conferencing, and instant messaging capabilities, providing a seamless communication experience.",
      image: "/chat-system.jpg",
      github: "https://github.com/NorahNguyen94",
      techs: ["Angular", "Express.js", "Node.js", "PeerJS", "Socket.io", "MongDB"],
      isPrivate: true,
    },
    {
      title: "Tetris Game",
      desc: "Interactive desktop puzzle game with adjustable grid size and scoring system. Players rotate and position falling tetrominoes to complete lines and increase their score. The game also supports a two-player mode with both AI and external multiplayer options for a more competitive experience.",
      image: "/tetris-game.png",
      github: "https://github.com/NorahNguyen94/game-javafx",
      techs: ["Java", "JavaFX", "Maven", "CSS"],
      isPrivate: true,
    },
    {
      title: "Shoes Review Website",
      desc: "A web application built using Laravel that allows users to review and rate different shoes. Users can submit reviews, view details of item and its ratings, and filter shoes based on ratings and review count.",
      image: "/review-website.png",
      github: "https://github.com/NorahNguyen94/review-website",
      techs: ["Laravel", "PHP", "JavaScript", "Bootstrap"],
      isPrivate: false,
    },
    {
      title: "Study With Me",
      desc: "The mobile app aims to assist students in organising their study schedules more effectively. It provides a platform where students can manage courses, assessments, class schedules and study tasks, therefore, enabling students to keep track and take control of their learning journey.",
      image: "/study-with-me.jpg",
      github: "https://github.com/NorahNguyen94/study-with-me",
      techs: ["Angular", "Ionic", "Web Storage", "Git"],
      isPrivate: false,
    },
    {
      title: "Restaurant Website",
      desc: "A responsive web application that showcases various Vietnamese cuisines and allows users to explore our restaurant's menu, make reservations, place orders online and more. It offers a eye-catching and user-friendly interfaces for customers to engage with the restaurant.",
      image: "/restaurant-website.png",
      github: "https://github.com/NorahNguyen94/Restaurant-website",
      techs: ["HTML5", "PHP", "CSS3", "JavScript"],
      isPrivate: false,
    },
    {
      title: "Fake Store",
      desc: "A mobile application that allows users to browse and purchase products from a fake online store. It features product listings, detailed product views, a shopping cart, and a checkout process, providing a seamless shopping experience for users. It interacts with a public API to fetch product data and manage user orders.",
      image: "/fake-store.png",
      github: "https://github.com/NorahNguyen94",
      techs: ["React Native", "CSS", "ResfulAPIs", "Git"],
      isPrivate: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 font-sans">
      {/* Navbar */}
      <section className="flex flex-row justify-between items-center p-6 shadow-md bg-gray-900/80">
        <a href="#"><img src="NN.png" alt="My logo" className="w-12 h-8" /></a>
        <nav className="flex space-x-7 text-teal-300 font-medium tracking-wide">
          <a href="#home" className="border-b">Home</a>
          <a href="#about" className="hover:border-b">About</a>
          <a href="#experience" className="hover:border-b">Experience</a>
          <a href="#contact" className="hover:border-b">Contact</a>
        </nav>
      </section>

      {/* Introduction */}
      <section className="flex flex-col md:flex-row justify-around items-center text-center min-h-[90vh]">
        <div className="flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-3"
          >
            Hi, I'm <span className="text-blue-400">Norah Nguyen</span>
          </motion.h1>
          <p className="text-lg text-gray-400">
            Junior Full-Stack Developer | Passionate about Web Development & Software Design
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 mt-6"
          >
            <a href="https://github.com/NorahNguyen94" target="_blank" rel="noreferrer"
              className="hover:-translate-y-1 transition text-blue-300"
            >
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/norah-nguyen-222a44283" target="_blank" rel="noreferrer"
              className="hover:-translate-y-1 transition text-blue-300"
            >
              <FaLinkedin size={28} />
            </a>
            <a href="mailto:thingocnhu.nguyen94@gmail.com"
              className="hover:-translate-y-1 transition text-blue-300"
            >
              <FaEnvelope size={28} />
            </a>
          </motion.div>
          <div className="mt-10 relative inline-block p-0.5 rounded-full overflow-hidden hover:scale-105 transition duration-400 active:scale-100 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#00F5FF,_#00F5FF30,_#00F5FF)] button-wrapper">
            <a href="#experience">
              <button className="relative z-10 bg-black text-white rounded-full px-8 py-4 font-medium cursor-pointer">Browse My Projects</button>
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-72 h-72 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl overflow-visible mt-10 md:mt-0 relative"
        >
          <img
            src="./Norah.png"
            alt="Profile"
            className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 scale-[1.25] object-contain z-10"
          />
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto py-16 px-6 md:w-3/4">
        <Heading title="About Me" />

        <div className="relative px-10 py-8 text-gray-300 leading-relaxed tracking-wide font-medium border-l-3 border-blue-400 bg-gray-800/50 rounded-lg mt-6">
          <span className="absolute top-0 left-4 text-7xl text-blue-500/20 font-serif select-none">
            “
          </span>
          <p className="mt-6">
            I’m an IT graduate from Griffith University, majoring in Software Development.
            I love creating end-to-end web applications using modern frameworks.
            My passion lies in learning, building meaningful products, and growing into a versatile full-stack developer.
          </p>
          <span className="absolute -bottom-6 right-6 text-7xl text-blue-500/20 font-serif select-none">
            ”
          </span>
        </div>

        {/* Skills */}
        <SubHeading title="Skills" />

        <p className="text-gray-300 leading-7 tracking-wide px-6 mt-6 text-[15px]">
          I’ve built a solid foundation in full-stack development through hands-on projects and real-world application.
          These skills allow me to create scalable, user-focused solutions while collaborating effectively in team environments.
          I’m always exploring new technologies and sharpening my problem-solving approach to deliver meaningful digital products.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-4">
          <SkillCard name="Programming Languages" color="text-blue-300" />
          <SkillCard name="Frameworks" color="text-indigo-300" />
          <SkillCard name="Tools" color="text-green-300" />
          <SkillCard name="Soft Skills" color="text-pink-300" />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto py-12 px-6 md:w-3/4">
        <Heading title="Experience" />
        {/* Internship */}
        <SubHeading title="Internship" />
        <div className="flex flex-col md:flex-row items-center justify-between p-8 mt-5 mb-12 gap-5
                bg-gradient-to-br from-gray-800/80 to-gray-900/80 
                border border-gray-700 rounded-2xl shadow-xl 
                hover:shadow-2xl transition-all duration-300 group">
          <div className="md:w-2/3 space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1.5 h-15 bg-teal-400 rounded-md"></span>
              <div>
                <p className="text-3xl text-blue-300 font-bold tracking-wide">
                  Web Developer Intern
                </p>
                <h3 className="text-xl text-teal-300 mt-2 font-semibold tracking-wide">- Medical Imaging Data Management System</h3>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-gray-200 text-sm font-semibold tracking-wide">
                InsightRSA • Southport, Gold Coast, QLD
              </p>
              <p className="text-gray-400 text-sm">July 2025 — October 2025</p>
            </div>
            <h4 className="text-lg font-semibold text-teal-300 mt-6 tracking-wide">
              Key Contributions
            </h4>
            <ul className="mt-3 space-y-4 text-gray-300 text-[15px] leading-relaxed">
              <li className="flex items-start gap-3">
                <SiTicktick className="text-blue-300 w-6 h-6 mt-1" />
                Designed modern, user-centered UI/UX using Figma, creating
                responsive wireframes, interactive prototypes, and clean, intuitive layouts.
              </li>

              <li className="flex items-start gap-3">
                <SiTicktick className="text-blue-300 w-6 h-6 mt-1" />
                Developed responsive, interactive web pages with React and Tailwind CSS,
                ensuring a consistent visual system and smooth user experience.
              </li>

              <li className="flex items-start gap-3">
                <SiTicktick className="text-blue-300 w-6 h-6 mt-1" />
                Implemented features such as secure 2-factor authentication,
                project & patient management, and medical data workflows.
              </li>

              <li className="flex items-start gap-3">
                <SiTicktick className="text-blue-300 w-6 h-6 mt-1" />
                Integrated and communicated with backend services using RESTful APIs,
                ensuring efficient, reliable, and scalable data flow.
              </li>

              <li className="flex items-start gap-3">
                <SiTicktick className="text-blue-300 w-7 h-7 mt-1" />
                Expanded backend capabilities by building new FastAPI endpoints,
                improving data processing, and supporting new features for frontend.
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-teal-300 tracking-wide mb-3">
                Technologies Used
              </h4>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">React</span>
                <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">Vite</span>
                <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">Tailwind CSS</span>
                <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">FastAPI</span>
                <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">Python</span>
                <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">PostgreSQL</span>
                <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">Figma</span>
                <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">Docker</span>
                <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">Orthanc Server</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <img
              src="/medical_system_image.PNG"
              alt="Internship Project"
              className="mt-4 md:mt-0 rounded-xl shadow-lg w-full md:w-full 
                 group-hover:scale-[1.01] group-hover:shadow-2xl 
                 transition-all duration-300"
            />
          </div>
        </div>

        {/* Projects */}
        <SubHeading title="Projects" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition overflow-hidden duration-200 cursor-pointer"
            >
              <Card
                image={p.image}
                title={p.title}
                desc={p.desc}
                techs={p.techs}
                github={p.github}
                isPrivate={p.isPrivate}
              />
            </div>
          ))}
        </div>
      </section >

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto py-12 px-6 md:w-3/4"
      >
        <Heading title="Contact Me" />

        <p className="text-gray-300 mb-8 leading-relaxed">
          I'm currently open to new opportunities! Feel free to reach out via email or LinkedIn.
          Let's connect and create something amazing together!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="https://www.linkedin.com/in/norah-nguyen-222a44283"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-xl shadow-lg transform transition hover:-translate-y-1"
          >
            <LiaLinkedin size={28} />
            <span className="font-medium text-lg">LinkedIn</span>
          </a>

          <a
            href="mailto:thingocnhu.nguyen94@gmail.com"
            className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-6 py-4 rounded-xl shadow-lg transform transition hover:-translate-y-1"
          >
            <MdEmail size={28} />
            <span className="font-medium text-lg">Email Me</span>
          </a>
        </div>
      </section>

      <footer className="text-center py-10 border-t border-gray-700">
        <p className="text-gray-400">© 2025 Norah Nguyen — Built with React, Vite and Tailwind</p>
      </footer>
    </div >
  );
}

export default App
