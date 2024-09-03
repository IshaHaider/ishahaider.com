import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";


const linkify = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, index) =>
    urlRegex.test(part) ? (
      <a
        key={index}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {part}
      </a>
    ) : (
      part
    )
  );
};

const WorkExperience = () => {
  const [visibleDescriptions, setVisibleDescriptions] = useState(
    Array(EXPERIENCES.length).fill(false)
  );

  const toggleDescriptionVisibility = (index) => {
    setVisibleDescriptions((prev) =>
      prev.map((isVisible, i) => (i === index ? !isVisible : isVisible))
    );
  };

  return (
    <section className="py-8" id="work">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center space-x-4 mb-4"
      >
        <h2 className="text-center font-semibold text-3xl lg:text-4xl">
          Work Experience
        </h2>
      </motion.div>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-0 left-28 w-1 bg-gray-400 h-full"></div>{" "}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8 p-10 pl-16" // Added padding-left to make room for the timeline
        >
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="flex items-start mb-8 relative">
              {/* Timeline circle and label */}
              <div className="absolute left-4 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-white z-10 flex items-center justify-center overflow-hidden">
                  {experience.icon}
                </div>
              </div>

              {/* Experience details */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="ml-24 rounded-xl border border-stone-50/30 bg-white/10 p-4 w-full max-w-5xl"
              >
                <div className="relative flex flex-col">
                  {/* Small dash arrow */}
                  <div className="absolute left-[-26px] transform translate-y-1/4">
                    <div className="w-4 h-4 border-t-2 border-r-2 border-white/30 rotate-[225deg]"></div>
                  </div>
                  <h3 className="text-2xl font-semibold">{experience.title}</h3>
                  <p className="text-xl">{experience.company}</p>
                  <p className="text-sm text-stone-300">
                    {experience.duration}
                  </p>
                  <p className="text-sm text-stone-300 italic">
                    {experience.location}
                  </p>
                  <div className="experience-item">
                    <button
                      onClick={() => toggleDescriptionVisibility(index)}
                      className="text-blue-600 hover:text-blue-800 text-xl flex items-center justify-center"
                    >
                      {visibleDescriptions[index] ? (
                        <>
                          <span>Hide Description</span>
                          <FaArrowAltCircleUp className="ml-2" />
                        </>
                      ) : (
                        <>
                          <span>Show Description</span>
                          <FaArrowAltCircleDown className="ml-2" />
                        </>
                      )}
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        visibleDescriptions[index] ? "max-h-screen" : "max-h-0"
                      }`}
                    >
                      <ul className="mt-2 text-base list-disc pl-5">
                        {experience.description.map((desc, i) => (
                          <li key={i} className="mb-1">
                            {linkify(desc)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4 text-base">
                    <strong>TECHNOLOGIES:</strong>{" "}
                    {experience.languages
                      .map((language) => language)
                      .join(", ")}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
