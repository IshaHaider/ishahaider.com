import { EDUCATION, CLASSES } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="py-8" id="education">
      <motion.div className="flex flex-col items-center justify-center space-x-4 mb-4">
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
          className="mb-6 pt-10 pl-10 pr-10"
        >
          <h3 className="text-xl font-semibold">{education.degree}</h3>
          <p className="text-lg">{education.institution}</p>
          <p className="text-sm text-stone-300">{education.duration}</p>
          <p className="mt-2">
            <strong>Honors & Awards: </strong>
            {education.awards}
          </p>
          <p className="mt-2">
            <strong>Global Experience: </strong>
            {education.experiences}
          </p>
        </motion.div>
      ))}
    </section>
  );
};

export default Education;
