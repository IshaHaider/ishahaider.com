import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="py-8" id="projects">
      <motion.div className="flex flex-col items-center justify-center space-x-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20.0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center font-semibold text-3xl lg:text-4xl"
        >
          Projects
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={project.id}
            className="group relative overflow-hidden rounded-3xl"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100"
            >
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="mb-12 p-4 text-center">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-30"
              >
                <div className="flex items-center">
                  <span>View on GitHub</span>
                  <MdArrowOutward />
                </div>
              </a>
              <p className="mt-8 text-base">
                <strong>LANGUAGES:</strong>{" "}
                {project.languages.map((language) => language).join(", ")}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


// import React from "react";
// import { MdArrowOutward } from "react-icons/md";
// import { PROJECTS } from "../constants";
// import { motion } from "framer-motion";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext
// } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css'; // For default styles

// const Projects = () => {
//   return (
//     <section className="py-8 relative max-w-screen w-full max-h-[600px] h-auto" id="projects">
//       <motion.div className="flex flex-col items-center justify-center space-x-4 mb-12">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center font-semibold text-3xl lg:text-4xl"
//         >
//           Projects
//         </motion.h2>
//       </motion.div>

//       <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]"> {/* Adjust height for responsiveness */}
//         <CarouselProvider
//           naturalSlideWidth={100}
//           naturalSlideHeight={125}
//           totalSlides={PROJECTS.length}
//           visibleSlides={1}
//           infinite
//         >
//           <Slider className="relative w-full h-full">
//             {PROJECTS.map((project, index) => (
//               <Slide index={index} key={project.id} className="flex-shrink-0 w-full h-full">
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                   whileHover={{ scale: 1.05 }}
//                   className="group relative overflow-hidden rounded-3xl"
//                 >
//                   <motion.img
//                     whileHover={{ scale: 1.15 }}
//                     src={project.image}
//                     alt={project.name}
//                     className="w-full h-full object-cover transition-transform duration-500"
//                   />
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                     className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100"
//                   >
//                     <h3 className="text-xl font-bold mb-2">{project.name}</h3>
//                     <p className="mb-12 p-4 text-center">{project.description}</p>
//                     <a
//                       href={project.githubLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
//                     >
//                       <div className="flex items-center">
//                         <span>View on GitHub</span>
//                         <MdArrowOutward />
//                       </div>
//                     </a>
//                     <p className="mt-8 text-base">
//                       <strong>LANGUAGES:</strong>{" "}
//                       {project.languages.join(", ")}
//                     </p>
//                   </motion.div>
//                 </motion.div>
//               </Slide>
//             ))}
//           </Slider>
//           <ButtonBack className="absolute left-1/2 transform -translate-x-1/2 bottom-4 bg-white text-black p-2 rounded-full flex items-center justify-center shadow-lg sm:hidden">
//             <IoIosArrowBack size={24} />
//           </ButtonBack>
//           <ButtonNext className="absolute left-1/2 transform -translate-x-1/2 bottom-4 bg-white text-black p-2 rounded-full flex items-center justify-center shadow-lg sm:hidden">
//             <IoIosArrowForward size={24} />
//           </ButtonNext>
//           <div className="hidden sm:flex absolute inset-x-0 -bottom-2 flex justify-between px-4 py-2">
//             <ButtonBack className="bg-white text-black p-2 rounded-full flex items-center justify-center shadow-lg">
//               <IoIosArrowBack size={24} />
//             </ButtonBack>
//             <ButtonNext className="bg-white text-black p-2 rounded-full flex items-center justify-center shadow-lg">
//               <IoIosArrowForward size={24} />
//             </ButtonNext>
//           </div>
//         </CarouselProvider>
//       </div>
//     </section>
//   );
// };

// export default Projects;


