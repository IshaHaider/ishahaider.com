import {
  Globe,
  Database,
  Cloud,
  Code,
  Braces,
  FileJson,
  FileType,
  Hash,
  Coffee,
  Cpu,
  Terminal,
  Github,
  Server,
  Table2,
  Webhook,
  CloudCog,
  Flame,
  UploadCloud,
  Share2,
  Container,
  Apple,
  BrainCircuit,
  Cuboid,
  CloudLightning,
  SquareStack,
  Figma,
  Microchip,
  Wrench,
  BookMarked,
  Waves,
  Leaf,
  Workflow,
  Bot,
  Dna,
  ChartColumnBig,
  Hexagon,
  Gamepad2,
  Headphones,
  Book,
  Puzzle,
  Utensils,
  Laptop,
  Plane,
} from "lucide-react"
import EduDialect from "../public/edu-dialect.png";
import Arcurve from "../public/arcurve.png";
import IBM from "../public/ibm.png";
import MorganStanley from "../public/morgan-stanley.jpg";
import SolarCar from "../public/solar-car.png";
import SCRP from "../public/scrp.png";
import Schulich from "../public/schulich.jpg";
import Image from "next/image";

// *-------------- HERO --------------* //
export const HERO = [
  {
    name: "ISHA HAIDER",
    greet: "Welcome to My Corner of the Web!",
    description:
      "As a software engineer, I thrive on solving problems and creating impactful solutions. I am passionate about coding and always eager to learn and improve. Off the laptop, I enjoy mind games, coffee, keeping things tidy, exploring nature, and trying new experiences. Balancing creativity and curiosity drives me both in and out of work.",
  },
];


export const FAVOURITES = [
  {
    icon: <Headphones className="h-6 w-6" />,
    title: "Podcast",
    content: "Can you be too self-aware?",
    link: "https://podcasts.example.com/self-aware",
    delay: 1
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: "Book",
    content: "Look Again: The Power of Noticing What Was Always There",
    link: "https://books.example.com/look-again",
    delay: 2
  },
  {
    icon: <Puzzle className="h-6 w-6" />,
    title: "Activity",
    content: "Contexto Game",
    link: "https://contexto.me",
    delay: 3
  },
  {
    icon: <Utensils className="h-6 w-6" />,
    title: "Food",
    content: "Singaporian Rice",
    link: "#",
    delay: 4
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "Languages",
    content: "Java",
    link: "#",
    delay: 5
  },
  {
    icon: <Plane className="h-6 w-6" />,
    title: "Travel",
    content: "Turkey",
    link: "https://hollowknight.com",
    delay: 6
  }
];


// *-------------- NAVIGATION --------------* //

export const NAVIGATION_LINKS = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ]
  

// *-------------- SKILLS --------------* //

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"

interface Skill {
  name: string
  level: SkillLevel
  icon: React.ReactNode
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
}

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "Java", level: "Expert", icon: <Coffee className="h-4 w-4" /> },
      { name: "C/C++", level: "Expert", icon: <Cpu className="h-4 w-4" /> },
      { name: "C#", level: "Advanced", icon: <Code className="h-4 w-4" /> },
      { name: "Python", level: "Expert", icon: <Terminal className="h-4 w-4" /> },
      { name: "JavaScript", level: "Expert", icon: <FileJson className="h-4 w-4" /> },
      { name: "TypeScript", level: "Advanced", icon: <Hash className="h-4 w-4" /> },
      { name: "HTML/CSS", level: "Expert", icon: <FileType className="h-4 w-4" /> },
      { name: "SQL", level: "Expert", icon: <Table2 className="h-4 w-4" /> },
      { name: "RISC-V", level: "Advanced", icon: <Cpu className="h-4 w-4" /> },
      { name: "React", level: "Expert", icon: <Braces className="h-4 w-4" /> },
      { name: "Angular", level: "Advanced", icon: <Code className="h-4 w-4" /> },
      { name: "Swift", level: "Intermediate", icon: <Apple className="h-4 w-4" /> },
    ],
  },
  {
    title: "Databases & Tools",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "MySQL", level: "Expert", icon: <Waves className="h-4 w-4" /> },
      { name: "PostgreSQL", level: "Expert", icon: <Database className="h-4 w-4" /> },
      { name: "MongoDB", level: "Advanced", icon: <Leaf className="h-4 w-4" /> },
      { name: "PowerBI", level: "Advanced", icon: <ChartColumnBig className="h-4 w-4" /> },
      { name: "Jupyter", level: "Advanced", icon: <BookMarked className="h-4 w-4" /> },
      { name: "Maven", level: "Expert", icon: <Wrench className="h-4 w-4" /> },
      { name: "Gradle", level: "Expert", icon: <FileJson className="h-4 w-4" /> },
      { name: "GNU-Make", level: "Intermediate", icon: <Server className="h-4 w-4" /> },
      { name: "Next.js", level: "Advanced", icon: <Webhook className="h-4 w-4" /> },
      { name: "Node.js", level: "Advanced", icon: <Hexagon className="h-4 w-4" /> },
      { name: "Unity", level: "Advanced", icon: <Gamepad2 className="h-4 w-4" /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    skills: [
      { name: "Git", level: "Expert", icon: <Github className="h-4 w-4" /> },
      { name: "AWS", level: "Expert", icon: <BrainCircuit className="h-4 w-4" /> },
      { name: "Azure", level: "Expert", icon: <CloudLightning className="h-4 w-4" /> },
      { name: "GCP", level: "Intermediate", icon: <CloudCog className="h-4 w-4" /> },
      { name: "Firebase", level: "Intermediate", icon: <Flame className="h-4 w-4" /> },
      { name: "Vercel", level: "Advanced", icon: <UploadCloud className="h-4 w-4" /> },
      { name: "Netlify", level: "Advanced", icon: <Share2 className="h-4 w-4" /> },
      { name: "Docker", level: "Advanced", icon: <Cuboid className="h-4 w-4" /> },
      { name: "Kubernetes", level: "Advanced", icon: <Container className="h-4 w-4" /> },
      { name: "Ansible", level: "Intermediate", icon: <Terminal className="h-4 w-4" /> },
      { name: "Terraform", level: "Intermediate", icon: <SquareStack className="h-4 w-4" /> },
      { name: "CDK", level: "Intermediate", icon: <CloudCog className="h-4 w-4" /> },
    ],
  },
  {
    title: "AI, Hardware, & Design",
    icon: <Globe className="h-6 w-6" />,
    skills: [
      { name: "REST APIs", level: "Advanced", icon: <Webhook className="h-4 w-4" /> },
      { name: "Arduino", level: "Advanced", icon: <Cpu className="h-4 w-4" /> },
      { name: "MPLAB X", level: "Advanced", icon: <Microchip className="h-4 w-4" /> },
      { name: "Quartus", level: "Advanced", icon: <Cpu className="h-4 w-4" /> },
      { name: "LLMs", level: "Advanced", icon: <Globe className="h-4 w-4" /> },
      { name: "AI Agents", level: "Expert", icon: <Bot className="h-4 w-4" /> },
      { name: "AutoGen", level: "Expert", icon: <Dna className="h-4 w-4" /> },
      { name: "Flowise", level: "Intermediate", icon: <Workflow className="h-4 w-4" /> },
      { name: "Figma", level: "Expert", icon: <Figma className="h-4 w-4" /> },
    ],
  },
]

// *-------------- EXPERIENCES --------------* //

export const EXPERIENCES = [
  {
    id: 1,
    icon: (
    <Image
        src={MorganStanley}
        alt="Morgan Stanley logo"
        className="w-full h-full object-cover"
      />
    ),
    title: "Technology Analyst",
    company: "Morgan Stanley",
    location: "Calgary, Canada",
    startDate: "May 2025",
    endDate: "August 2025",
    period: "May 2025 - August 2025",
    description: "Wealth Management - UPE Platform 💸",
    skills: ["Java", "SQL", "GWT"],
    achievements: [
      "Updated legacy Java and SQL systems as part of the conversion of 2 large enterprise platforms, contributing to the successful transition of 9M+ user accounts.",
      "Developed an account activation tool connecting companies and participants, reducing manual onboarding time by 40% through automated Java and SQL workflows.",
      "Collaborated with 5+ cross-functional teams across engineering, product, and QA, supporting weekly release planning and accelerating delivery timelines.",
    ],
  },
  {
    id: 2,
    icon: (
    <Image
        src={IBM}
        alt="IBM logo"
        className="w-full h-full object-cover"
      />
    ),
    title: "Software Developer Intern",
    company: "IBM Consulting",
    location: "Toronto, Canada",
    startDate: "Jan 2025",
    endDate: "May 2025",
    period: "Jan 2025 - May 2025",
    description: "Agentic AI in SDLC 🤖",
    skills: ["GenAI", "Python", "AI Agents", "Microsoft Autogen", "Flowise", "LLMs"],
    achievements: [
      "Led the end-to-end integration of AI agents into the SDLC for a U.S. bank's mobile application, reducing human intervention by 80%. Designed, developed, and deployed 5 AI agents to automate code generation, bug detection, and deployment processes.",
      "Used Autogen, OpenAI models, & Microsoft Azure to build scalable AI-driven solutions, optimizing efficiency by 3x. Implemented containerized deployments using Azure Containers, ensuring seamless integration within the bank's development pipeline.",
      "Optimized system performance and scalability by implementing asynchronous processing, caching mechanisms, and modularized AI workflows. Reduced execution time by 40% and improved resource utilization across distributed cloud environments.",
    ],
  },
  {
    id: 3,
    icon: (
      <Image
        src={Arcurve}
        alt="Arcurve logo"
        unoptimized
        className="w-full h-full object-cover bg-transparent"
      />
    ),
    title: "Software Developer Intern",
    company: "Arcurve Inc.",
    location: "Calgary, Canada",
    startDate: "May 2024",
    endDate: "Dec 2024",
    period: "May 2024 - Dec 2024",
    description: "Manage and visualize pipeline data 📊",
    skills: ["CDK", "AWS", "PostgreSQL", "Python", "PowerBI", "Azure"],
    achievements: [
      "Developed a tool that can compare data between 2 or more environments coming from over 10 schemas and 1,000 tuples, ensuring it is identical and reporting all discrepancies. This tool automated 40% of the QAs testing methods.",
      "Designed and implemented software for TC Energy to manage and visualize pipeline data, leveraging PostgreSQL for data management and Python for backend processing. The deployment was orchestrated using AWS Cloud Development Kit (CDK) and integrated with Power BI for advanced data analytics and reporting.",
      "Hosted and led a 24-hour hackathon of over 80 participants, labelled as one of the most well-led and intricate Corporate Social Responsibility projects at Arcurve.",
    ],
  },
  {
    id: 4,
    icon: (
    <Image
        src={EduDialect}
        alt="EduDialect logo"
        className="w-full h-full object-cover"
      />
    ),
    title: "Co-President and General Manager",
    company: "Edu Dialect English Language Program [Student-Lead]",
    location: "Remote",
    startDate: "Sep 2021",
    endDate: "May 2024",
    period: "Sep 2021 - May 2024",
    description: "International Education Initiative 📚",
    skills: ["React", "JavaScript", "Tailwind CSS", "CSS", "Node.js", "HTML", "Supabase", "PostgreSQL"],
    achievements: [
      "Publicized the global organization from scratch and registered over 200 students and volunteers from 5 countries by recruiting and leading effective marketing, internal/external affairs, volunteer/student coordinating, country ambassadors, and finance teams",
      "Enhanced members' intercultural awareness and successfully raised funds for children's charities in 3 countries by providing leadership and learning opportunities for volunteers and students",
      "Demonstrated project management skills by overseeing, scheduling, and executing tasks to ensure smooth operation",
      "Developed a dynamic Web Application (https://github.com/Sabayara82/edu-dialect-app) using React, HTML, and Tailwind, featuring a user login system and intuitive interface to provide global connectivity and streamline course objective management.",
    ],
  },
  {
    id: 5,
    icon: (
    <Image
        src={SolarCar}
        alt="SolarCar logo"
        className="w-full h-full object-cover"
      />
    ),
    title: "Telemetry Software Developer",
    company: "Solar Car Team, University of Calgary",
    location: "Calgary, Canada",
    startDate: "Dec 2022",
    endDate: "May 2024",
    period: "Dec 2022 - May 2024",
    description: "Telemetry Data Management 📡",
    skills: ["React", "TypeScript", "Figma", "Node.js", "Tailwind CSS", "Angular", "JIRA", "Agile/Scrum", "JavaScript", "HTML", "CSS"],
    achievements: [
      "Enhanced the existing data analysis algorithm to be more modular, repeatable, and adaptable to changes.",
      "Improved team performance by designing and implementing a rigorous recruitment process and conducting interviews, resulting in improved leadership and overall efficiency among the new recruits of the Software Team",
      "Facilitated seamless communication between the vehicle's hardware and software by transmitting, analyzing, and presenting data to the Telemetry Server: https://github.com/UCSolarCarTeam/Helios-Telemetry",
      "Managed the Public Facing Website (https://github.com/UCSolarCarTeam/Solar-Car-Website) and the business portal, utilizing Angular.js to ensure an engaging and user-friendly online presence",
      "Implemented Agile/Scrum development practices by using JIRA for planning, tasks, and progress reporting",
    ],
  },
  {
    id: 6,
    icon: (
    <Image
        src={Schulich}
        alt="Schulich logo"
        className="w-full h-full object-cover"
      />
    ),
    title: "Undergraduate Research Assistant",
    company: "Schulich School of Engineering, University of Calgary ",
    location: "Calgary, Canada",
    startDate: "May 2023",
    endDate: "Aug 2023",
    period: "May 2023 - Aug 2023",
    description: "Haptic Feedback Research 🔬",
    skills: ["Unity","C#","Haptic Feedback","ArUco Markers","OpenCV"],
    achievements: [
      "Formulated a strategy to enhance mandibular reconstruction by overseeing a collaborative robot device using haptic and visual guidance",
      "Implemented camera detection through ArUco Markers, head tracking with OpenCV, and application rendering with Unity.",
      "Conducted research under the supervision of Dr. Jay Carriere for Mechatronics Engineering in Surgery, funded by NSERC USRA",
    ],
  },
  {
    id: 7,
    icon: (
      <Image
        src={SCRP}
        alt="SCRP logo"
        className="w-35 h-35 object-cover"
      />
    ),
    title: "Mentor for Unity 2D Game Creation",
    company: "Schulich Community Robotics Program, University of Calgary ",
    location: "Calgary, Canada",
    startDate: "Feb 2022",
    endDate: "Apr 2022",
    period: "Feb 2022 - Apr 2022",
    description: "Mentored in Unity game creation 🎮",
    skills: ["Unity", "C#"],
    achievements: [
      "Mentored 20 kids, ages 9-11, in creating their own 2D games using Unity through an engaging series of in-person workshops.",
      "Conducted training and mentorship sessions creating a dynamic and supportive environment for young developers.",
    ],
  },
]


// *-------------- PROJECTS --------------* //

export const PROJECTS = [
  {
    id: 0,
    title: "Rycho",
    class: "SENG401",
    description:
      "Rycho is an audio-sharing social media application for music and podcast enthusiasts, designed to create a vibrant community where users can discover, share, and engage with personalized content, leveraging features like customized playlists, song recommendations, and real-time interaction.",
    githubUrl: "https://github.com/IshaHaider/Rycho",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express", "AWS", "Spotify API", "Google Cloud", "CSS"],
  },
  {
    id: 1,
    title: "VisionSync",
    class: "Personal",
    description:
      "Developing advanced smart glasses that will produce scenic descriptions and real-time navigation through the utilization of computer vision and audio description. They will enhance scene understanding with CNNs (ResNet) and integrate Detectron2 for semantic segmentation and object recognition. This will work with rule-based systems to deliver directional audio cues via text-to-speech, improving accessibility and situational awareness.",
    githubUrl: "",
    tags: ["Embedded", "CNNs (ResNet)", "Detectron2"],
  },
  {
    id: 2,
    title: "Tetris Game",
    class: "Personal",
    description:
      "Developed a Tetris game in C++ using OOP principles, focusing on modularity and maintainability. Implemented core mechanics like piece rotation, collision detection, line clearing, and a scoring system. Utilized SFML for GUI design, rendering game elements, managing user input, and handling real-time game logic.",
    githubUrl: "https://github.com/IshaHaider/Tetris",
    tags: ["C++", "SFML", "OOP"],
  },
  {
    id: 3,
    title: "Embedded Systems LED Controller",
    class: "ENSF460",
    description:
      "Employed the PIC24F16K101 microcontroller for the precise control of LED brightness or intensity, connected to pin 12, and presented the results using Python in Spyder. The application integrates push buttons linked to input ports RA2, RA4, and RB4, utilizing UART and Timer peripherals within the MPLAB IDE to capture voltages and regulate LED delays.",
    githubUrl: "https://youtu.be/IP5TtW9Qeco",
    tags: ["Python", "MPLAB X", "PIC24F16K101", "UART", "Embedded"],
  },
  {
    id: 4,
    title: "Flight Simulator",
    class: "ENSF480",
    description:
      "A Java-based web application developed with MySQL and Maven for a single airline company. It enables users and agents to browse, select, and manage flights, seats, and insurance. Registered users enjoy perks, and airline agents/admins can handle various management tasks. The project prioritizes systematic design and may see evolving requirements during development.",
    githubUrl: "https://github.com/IshaHaider/FlightSimulator",
    tags: ["Java", "MySQL", "Maven", "Databases", "OOP", "MVC"],
  },
  {
    id: 5,
    title: "Obituary-AI Application",
    class: "ENSF381",
    description:
      "A React.js application that utilizes ChatGPT API for profile generation, Amazon Polly for speech synthesis, and Cloudinary API for storage. AWS services such as DynamoDB and Lambda handle backend data management and serverless functions, respectively. Python is employed for scripting, and infrastructure provisioning is managed through Terraform.",
    githubUrl: "https://github.com/IshaHaider/Obituary-AI",
    tags: ["React", "ChatGPT API", "Amazon Polly", "Cloudinary API", "AWS", "Terraform", "DynamoDB"],
  },
  {
    id: 6,
    title: "Country Stats Terminal App",
    class: "ENDG233",
    description:
      "A terminal-based Python application to process and plot data from CSV files based on user input. Utilized NumPy for data manipulation and Matplotlib for visualizations, enabling efficient data selection, processing, and graphical display.",
    githubUrl: "https://github.com/IshaHaider/Country-Statistics",
    tags: ["Python", "NumPy", "Matplotlib"],
  },
  {
    id: 7,
    title: "Museum Management System",
    class: "ENSF300",
    description:
      "A Python application that connects to a MySQL database for maintenance, data entry, and browsing. It includes an admin interface for executing SQL commands, a data entry interface for managing records with user-friendly prompts, and a browsing interface for guided database exploration. User roles and access levels are determined through login credentials.",
    githubUrl: "https://github.com/IshaHaider/Museum-Project",
    tags: ["Python", "MySQL", "Databases", "OOP", "MVC"],
  },
  {
    id: 8,
    title: "Data Structures Lib",
    class: "ENSF338",
    description:
      "The project involves creating a Java library called 'myLib' for common data structures, organized into a modular package. It includes linear data structures, tree structures, heaps, and graph algorithms, all designed for integers. The library will be tested using a main app or JUnit tests, with an option to support generic data types for extra credit.",
    githubUrl: "https://github.com/IshaHaider/Common-Data-Structures-Library",
    tags: ["Java", "Data Structures", "Algorithms", "OOP", "MVC", "JUnit"],
  },
  {
    id: 9,
    title: "Schedule Builder",
    class: "ENSF380",
    description:
      "Ever had to manage a centre of pets that require medicine, certain care, and certain foods given a limited amount of staff? This java program uses a clean GUI and an algorithm to sort through a database to create the perfect schedule to account for all pet needs.",
    githubUrl: "https://github.com/IshaHaider/ScheduleBuilder",
    tags: ["Java", "GUI", "Databases", "Algorithms", "OOP", "MVC", "JUnit"],
  },
  {
    id: 10,
    title: "Braille Translator",
    class: "Personal (Shopify)",
    description:
      "A small terminal line program that converts braille to english or english to braille",
    githubUrl: "https://github.com/IshaHaider/braille-translator",
    tags: ["Python", "Data Patterns", "Algorithms", "OOP"],
  },
];


// *-------------- EDUCATION --------------* //
export const EDUCATIONS = [
  {
    id: 1,
    degree:
      "Bachelor of Science - Software Engineering Major, Mechatronics Minor",
    institution: "University of Calgary",
    location: "Calgary, Canada",
    period: "August 2021 - June 2026",
    description: "Graduated with honors. Focused on software engineering, algorithms, and data structures.",
    courses: [
        "Data Structures & Algorithms", 
        "Full-Stack Web Development", 
        "Web Principles", 
        "Embedded Systems", 
        "Object-Oriented Programming", 
        "Computer Organization", 
        "Linear Algebra", 
        "Digital Circuits", 
        "Digital Logic", 
        "Statistics and Machine Learning", 
        "Databases", 
        "Networks", 
        "Operating Systems", 
        "Software Testing", 
        "Mathematics"
    ],
    awards:[
        "Dean's List (x2)", 
        "NSERC USRA", 
        "Jason Lang Scholarship (x2)", 
        "Women in STEM Scholarship", 
        "Digital Citizenship Graduation Award", 
        "Diversity Champions in Engineering Award"
    ],
    experiences: [
      {
        program: "Global Experience: Silicon Valley Trip",
        location: "Silicon Valley, California, USA",
        period: "February 2024",
        description: "Participated in a transformative trip to Silicon Valley in Feb'24, alongside 15 students, focusing on valuable networking, leadership development, and career advancement. Interacted with seasoned tech leaders and esteemed research professors, gaining insights into excelling in our careers and recognizing the profound impact we, as aspiring software engineers, can make on the future.",
      },
    ],
  }
];
