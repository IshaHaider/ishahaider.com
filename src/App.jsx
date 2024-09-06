import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MultiFilters from "./components/MultiFilters";

const App = () => {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
};

const MainApp = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Navbar />
        <Routes>
          {/* Route for "/filtered-skills" */}
          <Route path="/filtered-skills" element={<MultiFilters />} />

          {/* Default route for all other paths */}
          <Route
            path="/*"
            element={
              <>
                <Hero />
                <Skills />
                <Projects />
                <WorkExperience />
                <Education />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
