import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import EduDialect from "../assets/edu-dialect.png";
import Arcurve from "../assets/arcurve.png";
import SolarCar from "../assets/solar-car.png";
import SCRP from "../assets/scrp.png";
import Schulich from "../assets/schulich.jpg";

import { RiReactjsLine } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoGoogleCloud } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { FiFigma } from "react-icons/fi";
import { CgCPlusPlus } from "react-icons/cg";

import { FaMusic, FaGlasses, FaGamepad, FaLightbulb, FaPlane, FaRobot, FaGlobe, FaUniversity, FaBook, FaCalendarAlt } from 'react-icons/fa';
import { SiNintendogamecube } from "react-icons/si";
import { FiCpu } from "react-icons/fi";
import { GiDeathNote } from "react-icons/gi";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";


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
  { label: "Contact", href: "#contact" }
];

export const HERO = {
  name: "ISHA HAIDER",
  greet: "Welcome to My Corner of the Web!",
  description:
    "As a software engineer, I thrive on solving problems and creating impactful solutions. I’m passionate about coding and always eager to learn and improve. Off the laptop, I enjoy mind games, coffee, keeping things tidy, exploring nature, and trying new experiences. Balancing creativity and curiosity drives me both in and out of work.",
  podcast: "https://open.spotify.com/episode/1qazN5UMAiKjGAWDmYIdI1?si=c525489deda24e23",
  book: "https://www.goodreads.com/book/show/176442617-look-again",
  activity: "https://contexto.me/",
  food: "Singaporian Rice",
  languages: ["Java", "C++"],
  };

export const SKILLS = [
  // Web Development
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "Advanced",
    category: "Web Development",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "Intermediate",
    category: "Web Development",
  },
  {
    icon: <FaAngular className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Angular",
    experience: "Intermediate",
    category: "Web Development",
  },
  {
    icon: <IoLogoJavascript className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "JavaScript",
    experience: "Advanced",
    category: "Web Development",
  },
  {
    icon: <SiTypescript className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "TypeScript",
    experience: "Advanced",
    category: "Web Development",
  },
  {
    icon: <FaHtml5 className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "HTML",
    experience: "Advanced",
    category: "Web Development",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "CSS",
    experience: "Advanced",
    category: "Web Development",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "Beginner",
    category: "Web Development",
  },
  {
    icon: <FaServer className="text-4xl text-gray-600 lg:text-5xl" />,
    name: "REST API",
    experience: "Beginner",
    category: "Web Development",
  },

  // Languages & Tools
  {
    icon: <CgCPlusPlus className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "C/C++",
    experience: "Advanced",
    category: "Languages & Tools",
  },
  {
    icon: <FaPython className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Python",
    experience: "Advanced",
    category: "Languages & Tools",
  },
  {
    icon: <FaJava className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Java",
    experience: "Advanced",
    category: "Languages & Tools",
  },
  {
    icon: <SiCsharp className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "C#",
    experience: "Intermediate",
    category: "Languages & Tools",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Unity",
    experience: "Intermediate",
    category: "Languages & Tools",
  },
  {
    icon: <SiRiscv className="text-4xl text-green-600 lg:text-5xl" />,
    name: "RISC-V",
    experience: "Beginner",
    category: "Languages & Tools",
  },
  {
    icon: <SiGnu className="text-4xl text-green-600 lg:text-5xl" />,
    name: "GNU-Make",
    experience: "Beginner",
    category: "Languages & Tools",
  },
  {
    icon: <SiApachemaven className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "Maven",
    experience: "Beginner",
    category: "Languages & Tools",
  },
  {
    icon: <FaJenkins className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "JUnit",
    experience: "Intermediate",
    category: "Languages & Tools",
  },

  // Technologies
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MySQL",
    experience: "Advanced",
    category: "Technologies",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "Advanced",
    category: "Technologies",
  },
  {
    icon: <SiIntel className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Quartus",
    experience: "Beginner",
    category: "Technologies",
  },
  {
    icon: <FaLinux className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Linux",
    experience: "Intermediate",
    category: "Technologies",
  },
  {
    icon: <FaMicrochip className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "MPLAB X",
    experience: "Beginner",
    category: "Technologies",
  },
  {
    icon: <SiArduino className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Arduino",
    experience: "Intermediate",
    category: "Technologies",
  },
  {
    icon: <SiJupyter className="text-4xl text-yellow-600 lg:text-5xl" />,
    name: "Jupyter",
    experience: "Advanced",
    category: "Technologies",
  },
  {
    icon: <FiFigma className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Figma",
    experience: "Intermediate",
    category: "Technologies",
  },

  // Cloud Services
  {
    icon: <BiLogoGoogleCloud className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "GCP",
    experience: "Beginner",
    category: "Cloud Services",
  },
  {
    icon: <SiKubernetes className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Kubernetes",
    experience: "Beginner",
    category: "Cloud Services",
  },
  {
    icon: <SiAnsible className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Ansible",
    experience: "Beginner",
    category: "Cloud Services",
  },
  {
    icon: <FaDocker className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "Docker",
    experience: "Beginner",
    category: "Cloud Services",
  },
  {
    icon: <FaMicrosoft className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "Azure",
    experience: "Advanced",
    category: "Cloud Services",
  },
  {
    icon: <FaAws className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "AWS",
    experience: "Advanced",
    category: "Cloud Services",
  },
  {
    icon: <SiTerraform className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Terraform",
    experience: "Intermediate",
    category: "Cloud Services",
  },
  {
    icon: <FaCloudscale className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "CDK",
    experience: "Beginner",
    category: "Cloud Services",
  },

  // Soft Skills
  {
    icon: "",
    name: "Interpersonal Skills",
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
    name: "Self Advocacy",
    experience: "",
    category: "Soft",
  },
  {
    icon: "",
    name: "Proactive",
    experience: "",
    category: "Soft",
  },
  {
    icon: "",
    name: "Communication",
    experience: "",
    category: "Soft",
  },
  {
    icon: "",
    name: "Teamwork",
    experience: "",
    category: "Soft",
  },
  {
    icon: "",
    name: "Organization",
    experience: "",
    category: "Soft",
  },
  {
    icon: "",
    name: "Problem Solving",
    experience: "",
    category: "Soft",
  },
  
];

export const PROJECTS = [
  {
    id: 0,
    name: "Rycho",
    class: "SENG401",
    description:
      "Rycho is an audio-sharing social media application for music and podcast enthusiasts, designed to create a vibrant community where users can discover, share, and engage with personalized content, leveraging features like customized playlists, song recommendations, and real-time interaction.",
    image: <FaMusic />,
    githubLink: "https://github.com/IshaHaider/Rycho",
    languages: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express", "AWS", "Spotify API", "Google Cloud", "CSS"],
  },
  {
    id: 1,
    name: "VisionSync",
    class: "Personal",
    description:
      "Developing advanced smart glasses that will produce scenic descriptions and real-time navigation through the utilization of computer vision and audio description. They will enhance scene understanding with CNNs (ResNet) and integrate Detectron2 for semantic segmentation and object recognition. This will work with rule-based systems to deliver directional audio cues via text-to-speech, improving accessibility and situational awareness.",
    image: <FaGlasses />,
    githubLink: "",
    languages: ["Embedded", "CNNs (ResNet)", "Detectron2"],
  },
  {
    id: 2,
    name: "Tetris Game",
    class: "Personal",
    description:
      "Developed a Tetris game in C++ using OOP principles, focusing on modularity and maintainability. Implemented core mechanics like piece rotation, collision detection, line clearing, and a scoring system. Utilized SFML for GUI design, rendering game elements, managing user input, and handling real-time game logic.",
    image: <SiNintendogamecube/>,
    githubLink: "https://github.com/IshaHaider/Tetris",
    languages: ["C++", "SFML", "OOP"],
  },
  {
    id: 3,
    name: "Embedded Systems LED Controller",
    class: "ENSF460",
    description:
      "Employed the PIC24F16K101 microcontroller for the precise control of LED brightness or intensity, connected to pin 12, and presented the results using Python in Spyder. The application integrates push buttons linked to input ports RA2, RA4, and RB4, utilizing UART and Timer peripherals within the MPLAB IDE to capture voltages and regulate LED delays.",
    image: <FiCpu/>,
    githubLink: "https://youtu.be/IP5TtW9Qeco",
    languages: ["Python", "MPLAB X", "PIC24F16K101", "UART", "Embedded"],
  },
  {
    id: 4,
    name: "Flight Simulator",
    class: "ENSF480",
    description:
      "A Java-based web application developed with MySQL and Maven for a single airline company. It enables users and agents to browse, select, and manage flights, seats, and insurance. Registered users enjoy perks, and airline agents/admins can handle various management tasks. The project prioritizes systematic design and may see evolving requirements during development.",
    image: <FaPlane />,
    githubLink: "https://github.com/IshaHaider/FlightSimulator",
    languages: ["Java", "MySQL", "Maven", "Databases", "OOP", "MVC"],
  },
  {
    id: 5,
    name: "Obituary-AI Application",
    class: "ENSF381",
    description:
      "A React.js application that utilizes ChatGPT API for profile generation, Amazon Polly for speech synthesis, and Cloudinary API for storage. AWS services such as DynamoDB and Lambda handle backend data management and serverless functions, respectively. Python is employed for scripting, and infrastructure provisioning is managed through Terraform.",
    image: <GiDeathNote />,
    githubLink: "https://github.com/IshaHaider/Obituary-AI",
    languages: ["React", "ChatGPT API", "Amazon Polly", "Cloudinary API", "AWS", "Terraform", "DynamoDB"],
  },
  {
    id: 6,
    name: "Country Stats Terminal App",
    class: "ENDG233",
    description:
      "A terminal-based Python application to process and plot data from CSV files based on user input. Utilized NumPy for data manipulation and Matplotlib for visualizations, enabling efficient data selection, processing, and graphical display.",
    image: <FaGlobe />,
    githubLink: "https://github.com/IshaHaider/Country-Statistics",
    languages: ["Python", "NumPy", "Matplotlib"],
  },
  {
    id: 7,
    name: "Museum Management System",
    class: "ENSF300",
    description:
      "A Python application that connects to a MySQL database for maintenance, data entry, and browsing. It includes an admin interface for executing SQL commands, a data entry interface for managing records with user-friendly prompts, and a browsing interface for guided database exploration. User roles and access levels are determined through login credentials.",
    image: <FaUniversity />,
    githubLink: "https://github.com/IshaHaider/Museum-Project",
    languages: ["Python", "MySQL", "Databases", "OOP", "MVC"],
  },
  {
    id: 8,
    name: "Data Structures Lib",
    class: "ENSF338",
    description:
      "The project involves creating a Java library called 'myLib' for common data structures, organized into a modular package. It includes linear data structures, tree structures, heaps, and graph algorithms, all designed for integers. The library will be tested using a main app or JUnit tests, with an option to support generic data types for extra credit.",
    image: <FaBook />,
    githubLink: "https://github.com/IshaHaider/Common-Data-Structures-Library",
    languages: ["Java", "Data Structures", "Algorithms", "OOP", "MVC", "JUnit"],
  },
  {
    id: 9,
    name: "Schedule Builder",
    class: "ENSF380",
    description:
      "Ever had to manage a centre of pets that require medicine, certain care, and certain foods given a limited amount of staff? This java program uses a clean GUI and an algorithm to sort through a database to create the perfect schedule to account for all pet needs.",
    image: <FaCalendarAlt />,
    githubLink: "https://github.com/IshaHaider/ScheduleBuilder",
    languages: ["Java", "GUI", "Databases", "Algorithms", "OOP", "MVC", "JUnit"],
  },
  {
    id: 10,
    name: "Braille Translator",
    class: "Personal (Shopify)",
    description:
      "A small terminal line program that converts braille to english or english to braille",
    image: <FaAmericanSignLanguageInterpreting/>,
    githubLink: "    - [ ] https://github.com/IshaHaider/braille-translator",
    languages: ["Python", "Data Patterns", "Algorithms", "OOP"],
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
    awards:["Dean's List (x2)", "NSERC USRA", "Jason Lang Scholarship (x2)", "Women in STEM Scholarship", "Digital Citizenship Graduation Award", "Diversity Champions in Engineering Award"],
      // "Dean's List (x2)  |  NSERC USRA  |  Jason Lang Scholarships (x2)  |  Women in STEM Scholarship  |  Digital Citizenship Graduation Award  |  Diversity Champions in Engineering Award",
    experiences:
      "Participated in a transformative trip to Silicon Valley in Feb'24, alongside 15 students, focusing on valuable networking, leadership development, and career advancement. Interacted with seasoned tech leaders and esteemed research professors, gaining insights into excelling in our careers and recognizing the profound impact we, as aspiring software engineers, can make on the future.",
    classes: ["Data Structures & Algorithms", "Full-Stack Web Development", "Web Principles", "Embedded Systems", "Object-Oriented Programming", "Computer Organization", "Linear Algebra", "Digital Circuits", "Digital Logic", "Statistics and Machine Learning", "Databases", "Networks", "Operating Systems", "Software Testing", "Mathematics"],
  },
];

export const CLASSES = [{
  placeholder: "Data Structures & Algorithms  |  Full-Stack Web Development  |  Embedded Systems  |  OOP  |  Computer Organization  |  Linear Algebra  |  Digital Circuits  |  Digital Logic  |  Statistics and Machine Learning  |  Databases  |  Networks  |  OS  |  Software Testing"
}];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/ishahaiderr/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/IshaHaider",
    icon: <FaGithub fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/isha-haider/",
    icon: <FaLinkedin fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "mailto:isha.haider213@gmail.com",
    icon: <MdEmail fontSize={30} className="hover:opacity-80" />,
  },
];
