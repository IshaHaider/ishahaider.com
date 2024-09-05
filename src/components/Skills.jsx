import React from "react";
import { SKILLS } from "../constants";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// Utility function to map experience levels to numeric values
const experienceLevelToNumber = (level) => {
  switch (level) {
    case "Advanced":
      return 3;
    case "Intermediate":
      return 2;
    case "Beginner":
      return 1;
    default:
      return 0; // For any unrecognized level
  }
};

// Group and sort SKILLS by category and experience level
const groupedSkills = {
  "Web Development": SKILLS.filter(
    (skill) => skill.category === "Web Development"
  ).sort(
    (a, b) => experienceLevelToNumber(b.experience) - experienceLevelToNumber(a.experience)
  ),
  "Languages & Tools": SKILLS.filter(
    (skill) => skill.category === "Languages & Tools"
  ).sort(
    (a, b) => experienceLevelToNumber(b.experience) - experienceLevelToNumber(a.experience)
  ),
  Technologies: SKILLS.filter(
    (skill) => skill.category === "Technologies"
  ).sort(
    (a, b) => experienceLevelToNumber(b.experience) - experienceLevelToNumber(a.experience)
  ),
  "Cloud Services": SKILLS.filter(
    (skill) => skill.category === "Cloud Services"
  ).sort(
    (a, b) => experienceLevelToNumber(b.experience) - experienceLevelToNumber(a.experience)
  ),
};

// Separate Soft skills
const softSkills = SKILLS.filter(
  (skill) => skill.category === "Soft"
);

const Skills = () => (
  <div className="container py-8" id="skills">
    <div className="flex flex-col items-center justify-center space-x-4 mb-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-4 text-center font-semibold text-3xl lg:text-4xl"
      >
        Technical Skills
      </motion.h2>
    </div>
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
      className="mx-2 grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30"
    >
      {Object.keys(groupedSkills).map((category, colIndex) => (
        
        <div key={colIndex} className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold my-4 text-center">{category}</h2>
          {groupedSkills[category].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1 }} // Icon+name are visible before hover
              whileHover={{ opacity: 1 }} // Keep the icon+name visible during hover
              transition={{ duration: 0.5 }}
              className="relative group w-full py-2 flex flex-col justify-between items-center border border-stone-50/30 rounded-lg"
            >
              {/* Icon and name container */}
              <div className="flex items-center justify-between group-hover:blur-md transition-blur duration-500">
                {skill.icon}
                <h3 className="px-4 text-lg lg:text-2xl">{skill.name}</h3>
              </div>

              {/* Experience text that shows up on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-md font-semibold lg:text-xl p-1">
                  <span>{skill.experience}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </motion.div>
    
    {/* Soft Skills Section */}
    <div className="container py-8" id="soft-skills">
      <div className="flex flex-col col-3 items-center justify-center space-x-4 mb-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4 text-center font-semibold text-3xl lg:text-4xl"
        >
          Soft Skills
        </motion.h2>
        <p className="text-lg italic">what do I bring to the workplace?</p>
      </div>
      <div className="grid grid-cols-3 gap-4 px-4 py-2 lg:px-20 text-center">
        {softSkills.map((skill, index) => (
          <div
            key={index}
            className="p-4 border border-stone-50/30 rounded-lg flex items-center justify-center font-semibold md:text-base text-sm font-open-sans"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
