import { HERO } from "../constants";
import ishaImg from "../assets/isha.jpeg";

import resume from "../assets/Resume.pdf";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="flex min-h-screen flex-wrap items-center pt-8"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 pr-4"
      >
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="p-2 text-xl text-justify">{HERO.description}</p>
        <a
          href="/filtered-skills"
          rel="noopener noreferrer"
          className="inline-block pl-2 pb-4"
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
