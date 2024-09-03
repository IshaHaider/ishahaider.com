import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

import EduDialect from "../assets/edu-dialect.png";
import Arcurve from "../assets/arcurve.png";
import SolarCar from "../assets/solar-car.png";
import SCRP from "../assets/scrp.png";
import Schulich from "../assets/schulich.jpg";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoGoogleCloud } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { FiFigma } from "react-icons/fi";
import { CgCPlusPlus } from "react-icons/cg";

import {
  FaNodeJs,
  FaLinux,
  FaMicrochip,
  FaDocker,
  FaAngular,
  FaJava,
  FaCss3Alt,
  FaHtml5,
  FaAws,
  FaMicrosoft,
  FaJenkins,
  FaCloudscale,
  FaPython,
  FaServer,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiAnsible,
  SiMongodb,
  SiJupyter,
  SiTypescript,
  SiApachemaven,
  SiCsharp,
  SiTerraform,
  SiRiscv,
  SiGnu,
  SiIntel,
  SiArduino,
} from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "ISHA HAIDER",
  greet: "Hello there! 👋🏻",
  description:
    "I'm a passionate software engineering student with hands-on experience in C#, C/C++, Python, and web technologies like React and Node.js. I’ve had the pleasure of leading and collaborating on exciting projects, whether it was as a Software Development Intern at Arcurve, a Telemetry Software Developer, or as the Co-President of Edu Dialect. I'm enthusiastic about bringing my technical skills and creative problem-solving to a dynamic internship, and I'm eager to continue growing in the fields of software development, DevOps, and leadership.",
};

export const SKILLS = [
  // Web Development
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
    category: "Web Development",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
    category: "Web Development",
  },
  {
    icon: <FaAngular className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Angular",
    experience: "2+ years",
    category: "Web Development",
  },
  {
    icon: <IoLogoJavascript className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "JavaScript",
    experience: "2+ years",
    category: "Web Development",
  },
  {
    icon: <SiTypescript className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "TypeScript",
    experience: "2+ years",
    category: "Web Development",
  },
  {
    icon: <FaHtml5 className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "HTML",
    experience: "2+ years",
    category: "Web Development",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "CSS",
    experience: "2+ years",
    category: "Web Development",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
    category: "Web Development",
  },
  {
    icon: <FaServer className="text-4xl text-gray-600 lg:text-5xl" />,
    name: "REST API",
    experience: "2+ years",
    category: "Web Development",
  },

  // Languages & Tools
  {
    icon: <CgCPlusPlus className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "C/C++",
    experience: "2+ years",
    category: "Languages & Tools",
  },
  {
    icon: <FaPython className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Python",
    experience: "2+ years",
    category: "Languages & Tools",
  },
  {
    icon: <FaJava className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Java",
    experience: "2+ years",
    category: "Languages & Tools",
  },
  {
    icon: <SiCsharp className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "C#",
    experience: "2+ years",
    category: "Languages & Tools",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Unity",
    experience: "2+ years",
    category: "Languages & Tools",
  },
  {
    icon: <SiRiscv className="text-4xl text-green-600 lg:text-5xl" />,
    name: "RISC-V",
    experience: "2+ years",
    category: "Languages & Tools",
  },
  {
    icon: <SiGnu className="text-4xl text-green-600 lg:text-5xl" />,
    name: "GNU-Make",
    experience: "2+ years",
    category: "Languages & Tools",
  },
  {
    icon: <SiApachemaven className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "Maven",
    experience: "2+ years",
    category: "Languages & Tools",
  },
  {
    icon: <FaJenkins className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "JUnit",
    experience: "1+ year",
    category: "Languages & Tools",
  },

  // Technologies
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MySQL",
    experience: "2+ years",
    category: "Technologies",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
    category: "Technologies",
  },
  {
    icon: <SiIntel className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Quartus",
    experience: "1+ year",
    category: "Technologies",
  },
  {
    icon: <FaLinux className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Linux",
    experience: "1+ year",
    category: "Technologies",
  },
  {
    icon: <FaMicrochip className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "MPLAB X",
    experience: "1+ year",
    category: "Technologies",
  },
  {
    icon: <SiArduino className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Arduino",
    experience: "1+ year",
    category: "Technologies",
  },
  {
    icon: <SiJupyter className="text-4xl text-yellow-600 lg:text-5xl" />,
    name: "Jupyter",
    experience: "1+ year",
    category: "Technologies",
  },
  {
    icon: <FiFigma className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Figma",
    experience: "2+ years",
    category: "Technologies",
  },

  // Cloud Services
  {
    icon: <BiLogoGoogleCloud className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "GCP",
    experience: "2+ years",
    category: "Cloud Services",
  },
  {
    icon: <SiKubernetes className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Kubernetes",
    experience: "2+ years",
    category: "Cloud Services",
  },
  {
    icon: <SiAnsible className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Ansible",
    experience: "2+ years",
    category: "Cloud Services",
  },
  {
    icon: <FaDocker className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "Docker",
    experience: "2+ years",
    category: "Cloud Services",
  },
  {
    icon: <FaMicrosoft className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "Azure",
    experience: "2+ years",
    category: "Cloud Services",
  },
  {
    icon: <FaAws className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "AWS",
    experience: "2+ years",
    category: "Cloud Services",
  },
  {
    icon: <SiTerraform className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Terraform",
    experience: "2+ years",
    category: "Cloud Services",
  },
  {
    icon: <FaCloudscale className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "CDK",
    experience: "2+ years",
    category: "Cloud Services",
  },

  // Soft Skills
  {
    icon: "",
    name: "Public Speaking",
    experience: "",
    category: "Soft",
  },
  {
    icon: "",
    name: "Multitasking",
    experience: "",
    category: "Soft",
  },
  {
    icon: "",
    name: "Project Managment",
    experience: "",
    category: "Soft",
  },
  {
    icon: "",
    name: "Taking Initiative",
    experience: "",
    category: "Soft",
  },
  {
    icon: "",
    name: "Fast Learner",
    experience: "",
    category: "Soft",
  },
  {
    icon: "",
    name: "Meeting Deadlines",
    experience: "",
    category: "Soft",
  },
  {
    icon: "",
    name: "Accountability",
    experience: "",
    category: "Soft",
  },
  {
    icon: "",
    name: "Self Advocacy",
    experience: "",
    category: "Soft",
  },
  
];

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
    languages: ["React", "Tailwind CSS"],
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
    languages: ["Node.js", "Tailwind CSS"],
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
    languages: ["PostgreSQL", "Tailwind CSS"],
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
    languages: ["React", "Tailwind CSS"],
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
    languages: ["React", "Tailwind CSS"],
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
    languages: ["React", "Tailwind CSS"],
  },
];

export const EXPERIENCES = [
  {
    icon: <img src={Arcurve} alt="Arcurve logo" className="w-20 h-20 object-cover" />,
    title: "Software Developer Intern",
    company: "Arcurve Inc.",
    startDate: "May 2024",
    endDate: "Present",
    duration: "May 2024 - Present",
    location: "Calgary, Canada",
    description: [
      "Developed a tool that can compare data between 2 or more environments coming from over 10 schemas and 1,000 tuples, ensuring it is identical and reporting all discrepancies. This tool automated 40% of the QAs testing methods.",
      "Designed and implemented software for TC Energy to manage and visualize pipeline data, leveraging PostgreSQL for data management and Python for backend processing. The deployment was orchestrated using AWS Cloud Development Kit (CDK) and integrated with Power BI for advanced data analytics and reporting.",
      "Hosted and led a 24-hour hackathon of over 80 participants, labelled as one of the most well-led and intricate Corporate Social Responsibility projects at Arcurve.",
    ],
    languages: ["CDK", "AWS", "PostgreSQL", "Python", "PowerBI", "Azure"],
  },
  {
    icon: <img src={EduDialect} alt="EduDialect logo" className="w-20 h-20 object-cover" />,
    title: "Co-President and General Manager",
    company: "Edu Dialect English Language Program [Student-Lead]",
    startDate: "Sep 2021",
    endDate: "Present",
    duration: "Sep 2021 - Present",
    location: "Remote",
    description: [
      "Publicized the global organization from scratch and registered over 200 students and volunteers from 5 countries by recruiting and leading effective marketing, internal/external affairs, volunteer/student coordinating, country ambassadors, and finance teams",
      "Enhanced members' intercultural awareness and successfully raised funds for children's charities in 3 countries by providing leadership and learning opportunities for volunteers and students",
      "Demonstrated project management skills by overseeing, scheduling, and executing tasks to ensure smooth operation",
      "Developed a dynamic Web Application (https://github.com/Sabayara82/edu-dialect-app) using React, HTML, and Tailwind, featuring a user login system and intuitive interface to provide global connectivity and streamline course objective management.",
    ],
    languages: ["React", "JavaScript", "Tailwind CSS", "CSS", "Node.js", "HTML", "Supabase", "PostgreSQL"]
  },
  {
    icon: <img src={SolarCar} alt="SolarCar logo" className="w-35 h-35 object-cover" />,
    title: "Telemetry Software Developer",
    company: "Solar Car Team, University of Calgary",
    startDate: "Dec 2022",
    endDate: "May 2024",
    duration: "Dec 2022 - May 2024",
    location: "Calgary, Canada",
    description: [
      "Enhanced the existing data analysis algorithm to be more modular, repeatable, and adaptable to changes.",
      "Improved team performance by designing and implementing a rigorous recruitment process and conducting interviews, resulting in improved leadership and overall efficiency among the new recruits of the Software Team",
      "Facilitated seamless communication between the vehicle's hardware and software by transmitting, analyzing, and presenting data to the Telemetry Server: https://github.com/UCSolarCarTeam/Helios-Telemetry",
      "Managed the Public Facing Website (https://github.com/UCSolarCarTeam/Solar-Car-Website) and the business portal, utilizing Angular.js to ensure an engaging and user-friendly online presence",
      "Implemented Agile/Scrum development practices by using JIRA for planning, tasks, and progress reporting",
    ],
    languages: ["React", "TypeScript", "Figma", "Node.js", "Tailwind CSS", "Angular", "JIRA", "Agile/Scrum", "JavaScript", "HTML", "CSS"]
  },
  {
    icon: <img src={Schulich} alt="Schulich logo" className="w-35 h-35 object-cover" />,
    title: "Undergraduate Research Assistant",
    company: "Schulich School of Engineering, University of Calgary ",
    startDate: "May 2023",
    endDate: "Aug 2023",
    duration: "May 2023 - Aug 2023",
    location: "Calgary, Canada",
    description: [
      "Formulated a strategy to enhance mandibular reconstruction by overseeing a collaborative robot device using haptic and visual guidance",
      "Implemented camera detection through ArUco Markers, head tracking with OpenCV, and application rendering with Unity.",
      "Conducted research under the supervision of Dr. Jay Carriere for Mechatronics Engineering in Surgery, funded by NSERC USRA",
    ],
    languages: ["Unity","C#","Haptic Feedback","ArUco Markers","OpenCV"],
  },
  {
    icon: <img src={SCRP} alt="SCRP logo" className="w-35 h-35 object-cover" />,
    title: "Mentor for Unity 2D Game Creation",
    company: "Schulich Community Robotics Program, University of Calgary ",
    duration: "Feb 2022 - Apr 2022",
    location: "Calgary, Canada",
    description: [
      "Mentored 20 kids, ages 9-11, in creating their own 2D games using Unity through an engaging series of in-person workshops.",
      "Conducted training and mentorship sessions creating a dynamic and supportive environment for young developers.",
    ],
    languages: ["Unity", "C#"],
  },
];

export const EDUCATION = [
  {
    degree:
      "Bachelor of Science - Software Engineering Major, Mechatronics Minor",
    institution: "University of Calgary, Canada",
    duration: "August 2021 - June 2026",
    awards:
      "Dean's List (x2)  |  NSERC USRA  |  Jason Lang Scholarships (x2)  |  Women in STEM Scholarship  |  Digital Citizenship Graduation Award  |  Diversity Champions in Engineering Award",
    experiences:
      "Participated in a transformative trip to Silicon Valley in Feb'24, alongside 15 students, focusing on valuable networking, leadership development, and career advancement. Interacted with seasoned tech leaders and esteemed research professors, gaining insights into excelling in our careers and recognizing the profound impact we, as aspiring software engineers, can make on the future.",
  },
];

export const CLASSES = [{}];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/ishahaiderr/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/IshaHaider",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/isha-haider/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
