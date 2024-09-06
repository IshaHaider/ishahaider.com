import { EDUCATION, CLASSES } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa"; // Import the trophy icon

const Education = () => {
  return (
    <section className="py-8" id="education">
      <motion.div className="flex flex-col space-x-4 mb-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4 text-center font-semibold text-3xl lg:text-4xl"
        >
          Education
        </motion.h2>
      </motion.div>

      {EDUCATION.map((education, index) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: index * 0.5 }}
          key={index}
          className="mb-6 pt-10 pl-10 pr-10 text-center"
        >
          <h3 className="text-2xl font-semibold items-center">
            {education.degree}
          </h3>
          <p className="text-xl">{education.institution}</p>
          <p className="text-base text-stone-300 italic">
            {education.duration}
          </p>

          <div className="mt-6 flex flex-col items-center">
            <p className="text-base font-semibold">
              <strong>Honors & Awards:</strong>
            </p>
            <ul className="text-base list-none">
              {education.awards.map((award, index) => (
                <li
                  key={index}
                  className="flex break-all justify-center text-center space-x-2 mt-2">
                  <FaTrophy className="text-yellow-500 pt-1 text-lg flex-shrink-0" />{" "}
                  {/* Trophy icon */}
                  <span>{award}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-base">
            <strong>Global Experience: </strong>
            <p>{education.experiences}</p>
          </p>
          <div className="flex justify-center mt-8">
            <div className="bg-cyan-950 max-w-4xl rounded-lg p-8">
              <p className="text-xl font-open-sans pb-2 text-center">
                <strong>Significant Classes:</strong>
              </p>
              <div className="flex flex-col text-lg pl-4 font-open-sans text-left">
                {education.classes.map((className, index) => (
                  <div key={index} className="flex space-x-2">
                    <MdArrowOutward className="text-stone-300 mt-2 flex-shrink-0" />
                    <span className="pl-2">{className}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Education;
