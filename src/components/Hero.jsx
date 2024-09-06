import { HERO } from "../constants";
import { motion } from "framer-motion";
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
        className="w-full md:w-1/2 md:pr-4 mb-8"
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
            <ul className="space-y-4 text-xl text-center">
              <li className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-4">
                <span role="img" aria-label="podcast" className="mr-4 text-2xl">
                  🎙️
                </span>
                <span className="font-semibold sm:hidden">Podcast:</span>
                <span className="hidden sm:inline font-semibold">Podcast:</span>
                <a
                  href={HERO.podcast}
                  className="text-blue-500 text-center sm:text-left"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Can you be too self-aware?
                </a>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-4">
                <span role="img" aria-label="book" className="mr-4 text-2xl">
                  📚
                </span>
                <span className="font-semibold sm:hidden">Book:</span>
                <span className="hidden sm:inline font-semibold">Book:</span>
                <a
                  href={HERO.book}
                  className="text-blue-500 text-center sm:text-left"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Look Again: The Power of Noticing What Was Always There
                </a>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-4">
                <span role="img" aria-label="puzzle" className="mr-4 text-2xl">
                  🧩
                </span>
                <span className="font-semibold sm:hidden">Activity:</span>
                <span className="hidden sm:inline font-semibold">
                  Activity:
                </span>
                <a
                  href={HERO.activity}
                  className="text-blue-500 text-center sm:text-left"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contexto Game
                </a>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-4">
                <span role="img" aria-label="food" className="mr-4 text-2xl">
                  🍲
                </span>
                <span className="font-semibold sm:hidden">Food:</span>
                <span className="hidden sm:inline font-semibold">Food:</span>
                <span className="text-center sm:text-left">{HERO.food}</span>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-4">
                <span role="img" aria-label="code" className="mr-4 text-2xl">
                  💻
                </span>
                <span className="font-semibold sm:hidden">Languages:</span>
                <span className="hidden sm:inline font-semibold">
                  Languages:
                </span>
                <p className="text-center sm:text-left">{HERO.languages.join(", ")}</p>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
