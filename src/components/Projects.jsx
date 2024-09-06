import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "react-responsive"; // Import the hook

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import {
  FaCalendarAlt,
  FaAmericanSignLanguageInterpreting,
} from "react-icons/fa";

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const handleSlideChange = (swiper) => {
    const totalSlides = PROJECTS.length;
    const slideIndex = swiper.activeIndex % totalSlides; // Adjust index
    console.log("Total Slides: ", totalSlides);
    console.log("Active Index: ", slideIndex);

    setActiveSlide(slideIndex);
  };

  return (
    <section className="py-8" id="projects">
      <motion.div className="flex flex-col items-center justify-center space-x-4">
        <motion.h2
          initial={{ opacity: 0, y: -20.0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center font-semibold text-3xl lg:text-4xl"
        >
          Projects
        </motion.h2>
      </motion.div>
      <div className="container max-h-screen relative">
        {" "}
        {/* Added outline here */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={isSmallScreen ? 1 : "auto"} // Set slidesPerView based on screen size
          coverflowEffect={{
            rotate: isSmallScreen ? 0 : 50,
            stretch: 0,
            depth: isSmallScreen ? 50 : 100,
            modifier: isSmallScreen ? 1 : 2.5,
            slideShadows: true,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[Navigation, Pagination, EffectCoverflow]}
          className={`swiper_container ${isSmallScreen ? "max-w-xl" : ""}`}
          onSlideChange={handleSlideChange}
        >
          {PROJECTS.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="relative flex flex-col h-full items-center border-2 border-gray-300 rounded-3xl">
                {" "}
                {/* Added border to flex container */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute inset-0 flex items-center justify-center text-[300px] text-cyan-900 z-0 "
                  style={{ zIndex: 0 }} // Ensures icon is behind the text
                >
                  {project.image}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity:
                      activeSlide === project.id || isSmallScreen ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative flex flex-col justify-between text-white transition-opacity duration-500 overflow-auto"
                  style={{ minHeight: "100%", zIndex: 1 }} // Ensures text is above the icon
                >
                  <div className="flex-1 mt-12 max-w-md overflow-hidden mx-auto">
                    <h3 className="text-4xl text-center font-semibold mb-2 tracking-7px">
                      {project.name}
                    </h3>
                    {/* <p className="text-xs md:text-sm text-center font-open-sans px-1">
                      {project.description}
                    </p> */}
                    <p className="text-xs font-bold md:text-sm text-center font-open-sans px-1 text-outline">
                      {project.description}
                    </p>
                  </div>
                  <div className="text-center mt-4 max-w-md mx-auto">
                    {project.githubLink && project.githubLink.trim() !== "" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-30 text-lg inline-flex items-center"
                      >
                        <span>View on GitHub</span>
                        <MdArrowOutward className="ml-2" />
                      </a>
                    )}
                    <p className="mt-4 px-2 md:text-lg text-base font-semibold tracking-7px">
                      LANGUAGES:
                    </p>
                    <p className="text-xs md:text-sm mb-8 px-2 italic font-open-sans text-outline">
                      {project.languages.join(", ")}
                    </p>
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
      <div style={{ height: "8rem" }}></div>
    </section>
  );
};

export default Projects;
