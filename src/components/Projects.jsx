import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, EffectCoverflow } from "swiper";

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    const totalSlides = PROJECTS.length;
    const slideIndex = swiper.activeIndex % totalSlides; // Adjust index
    console.log("Total Slides: ", totalSlides);
    console.log("Active Index: ", slideIndex);

    setActiveSlide(slideIndex);
  };

  return (
    <section className="py-8" id="projects">
      <motion.div className="flex flex-col items-center justify-center space-x-4 ">
        <motion.h2
          initial={{ opacity: 0, y: -20.0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center font-semibold text-3xl lg:text-4xl"
        >
          Projects
        </motion.h2>
      </motion.div>
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50, //0
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[Navigation, Pagination, EffectCoverflow]}
          className="swiper_container"
          onSlideChange={handleSlideChange}
        >
          {PROJECTS.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="relative flex flex-col h-full">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeSlide === project.id ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col justify-between p-4 text-white backdrop-blur-lg transition-opacity duration-500"
                >
                  <div className="flex-1 mt-20">
                    <h3 className="text-4xl text-center font-semibold mb-2 tracking-7px">{project.name}</h3>
                    <p className="text-lg text-center font-open-sans">{project.description}</p>
                  </div>
                  <div className="text-center mt-4">
                    {project.githubLink && project.githubLink.trim() !== "" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-30 text-2xl inline-flex items-center"
                      >
                        <span>View on GitHub</span>
                        <MdArrowOutward className="ml-2" />
                      </a>
                    )}
                    <p className="mt-4 px-2 text-2xl font-semibold tracking-7px">LANGUAGES:</p>
                    <p className="mb-8 px-2 text-lg italic font-open-sans">
                      {project.languages.map((language) => language).join(", ")}
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
    </section>
  );
};

export default Projects;


// return (
//   <section className="py-8" id="projects">
//     <motion.div className="flex flex-col items-center justify-center space-x-4 mb-12">
//       <motion.h2
//         initial={{ opacity: 0, y: -20.0 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center font-semibold text-3xl lg:text-4xl"
//       >
//         Projects
//       </motion.h2>
//     </motion.div>
//     <div className="container">
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 50, //0
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//           slideShadows: true,
//         }}
//         pagination={{ el: ".swiper-pagination", clickable: true }}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//           clickable: true,
//         }}
//         modules={[Navigation, Pagination, EffectCoverflow]}
//         className="swiper_container"
//       >
//         {PROJECTS.map((project) => (
//           <SwiperSlide key={project.id}>
//             <motion.img
//               whileHover={{ scale: 1.1 }}
//               src={project.image}
//               alt={project.name}
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileHover={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100"
//             >
//               <h3 className="text-xl font-bold mb-2">{project.name}</h3>
//               <p className="mb-12 p-4 text-center">{project.description}</p>
//               <a
//                 href={project.githubLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-30"
//               >
//                 <div className="flex items-center">
//                   <span>View on GitHub</span>
//                   <MdArrowOutward />
//                 </div>
//               </a>
//               <p className="mt-8 text-base">
//                 <strong>LANGUAGES:</strong>{" "}
//                 {project.languages.map((language) => language).join(", ")}
//               </p>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//         <div className="slider-controler">
//           <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </Swiper>
//     </div>
//   </section>
// );



// const Projects = () => {
//   return (
//     <section className="py-8" id="projects">
//       <motion.div className="flex flex-col items-center justify-center space-x-4 mb-12">
//         <motion.h2
//           initial={{ opacity: 0, y: -20.0 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center font-semibold text-3xl lg:text-4xl"
//         >
//           Projects
//         </motion.h2>
//       </motion.div>

//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {PROJECTS.map((project) => (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             whileHover={{ scale: 1.05 }}
//             key={project.id}
//             className="group relative overflow-hidden rounded-3xl"
//           >
//             <motion.img
//               whileHover={{ scale: 1.1 }}
//               src={project.image}
//               alt={project.name}
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileHover={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100"
//             >
//               <h3 className="text-xl font-bold mb-2">{project.name}</h3>
//               <p className="mb-12 p-4 text-center">{project.description}</p>
//               <a
//                 href={project.githubLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-30"
//               >
//                 <div className="flex items-center">
//                   <span>View on GitHub</span>
//                   <MdArrowOutward />
//                 </div>
//               </a>
//               <p className="mt-8 text-base">
//                 <strong>LANGUAGES:</strong>{" "}
//                 {project.languages.map((language) => language).join(", ")}
//               </p>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// ORIGINAL CODE
// const Projects = () => {
//   return (
//     <section className="py-8" id="projects">
//       <motion.div className="flex flex-col items-center justify-center space-x-4 mb-12">
//         <motion.h2
//           initial={{ opacity: 0, y: -20.0 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center font-semibold text-3xl lg:text-4xl"
//         >
//           Projects
//         </motion.h2>
//       </motion.div>

//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {PROJECTS.map((project) => (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             whileHover={{ scale: 1.05 }}
//             key={project.id}
//             className="group relative overflow-hidden rounded-3xl"
//           >
//             <motion.img
//               whileHover={{ scale: 1.1 }}
//               src={project.image}
//               alt={project.name}
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileHover={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100"
//             >
//               <h3 className="text-xl font-bold mb-2">{project.name}</h3>
//               <p className="mb-12 p-4 text-center">{project.description}</p>
//               <a
//                 href={project.githubLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-30"
//               >
//                 <div className="flex items-center">
//                   <span>View on GitHub</span>
//                   <MdArrowOutward />
//                 </div>
//               </a>
//               <p className="mt-8 text-base">
//                 <strong>LANGUAGES:</strong>{" "}
//                 {project.languages.map((language) => language).join(", ")}
//               </p>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };
// export default Projects;
