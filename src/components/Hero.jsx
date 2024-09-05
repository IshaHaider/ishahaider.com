import { HERO } from "../constants";
import ishaImg from "../assets/isha.jpeg";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.4 * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <section id="home" className="flex flex-wrap pt-40 md:-pt-12 px-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 pr-4 mb-8"
      >
        <h2
          className=" p-2 text-5xl font-bold lg:text-[7rem] md:text-left text-center"
          style={{ letterSpacing: "12px" }}
        >
          {HERO.name}
        </h2>
        <p className="p-2 text-xl md:text-2xl md:text-left text-center">
          <motion.span
            className="inline-block"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {HERO.greet.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={child}
                className="inline-block "
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.span>
        </p>
        <p className="p-2 text-lg font-open-sans md:text-left text-center leading-loose">
          {HERO.description}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <div className="flex justify-center items-start">
          <div className="max-h-full w-full sm:w-3/4 lg:w-5/6 p-8 bg-white/10 border border-gray-300/30 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">
              My Current Favorites
            </h2>
            <ul className="space-y-4 text-xl">
              <li className="flex items-center">
                <span role="img" aria-label="music" className="mr-4">🎶</span>
                Song:{" "}
                <a href={HERO.song} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Listen here
                </a>
              </li>
              <li className="flex items-center">
                <span role="img" aria-label="podcast" className="mr-4">🎙️</span>
                Podcast:{" "}
                <a href={HERO.podcast} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Listen here
                </a>
              </li>
              <li className="flex items-center">
                <span role="img" aria-label="book" className="mr-4">📚</span>
                Book:{"  "} 
                <a href={HERO.book} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Learn more
                </a>
              </li>
              <li className="flex items-center">
                <span role="img" aria-label="puzzle" className="mr-4">🧩</span>
                Activity:{" "}
                <a href={HERO.activity} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Puzzles
                </a>
              </li>
              <li className="flex items-center">
                <span role="img" aria-label="food" className="mr-4">🍲</span>
                Food:{" "}
                <a href={HERO.food} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  My favorite dish
                </a>
              </li>
              <li className="flex ">
                <span role="img" aria-label="code" className="mr-4">💻</span>
                Languages: {HERO.languages.join(", ")}
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
