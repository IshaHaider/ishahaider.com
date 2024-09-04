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
    <section id="home" className="flex max-h-screen flex-wrap pt-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 pr-4"
      >
        <h2
          className="my-8 p-2 pt-8 text-5xl font-bold lg:text-[7rem]"
          style={{ letterSpacing: "12px" }}
        >
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl lg:text-4xl">
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
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.span>
        </p>
        <p className="p-2 text-lg font-open-sans text-justify leading-loose">
          {HERO.description}
        </p>
        <a
          href="/filtered-skills"
          rel="noopener noreferrer"
          className="inline-block pl-2 pb-4 pt-2"
        >
          <button className="flex items-center p-2.5 lg:text-xl text-base border-2 rounded-full bg-transparent text-white hover:bg-purple-500">
            <span>
              <strong>Check out the Skills Filter!</strong>
            </span>
            <MdArrowOutward className="ml-2" />
          </button>
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={ishaImg}
            alt="Isha Haider"
            className="rounded-3xl"
            style={{ width: "550px", height: "550px", objectFit: "cover" }} // Set width and height here
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
