import React, { useState, useEffect } from "react";
import { SKILLS, EXPERIENCES, PROJECTS } from "../constants";
import { MdClear } from "react-icons/md";

const MultiFilters = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const handleFilterButtonClick = (skill) => {
    setSelectedFilters((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleClearAllFilters = () => {
    setSelectedFilters([]);
  };

  const categories = [
    "Cloud Services",
    "Languages & Tools",
    "Technologies",
    "Web Development",
  ];
  
  const groupedSkills = categories.reduce((acc, category) => {
    acc[category] = SKILLS.filter((skill) => skill.category === category).sort();
    return acc;
  }, {});

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredItems([...EXPERIENCES, ...PROJECTS]);
    } else {
      const filteredExperiences = EXPERIENCES.filter((experience) =>
        selectedFilters.some((filter) => experience.languages.includes(filter))
      );

      const filteredProjects = PROJECTS.filter((project) =>
        selectedFilters.some((filter) => project.languages.includes(filter))
      );

      setFilteredItems([...filteredExperiences, ...filteredProjects]);
    }
  }, [selectedFilters]);

  return (
    <div id="filtered-skills" className="lg:pt-16 pt-28">
      <div className="mb-4 mx-2">
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div key={category} className="mb-4 flex justify-center">
            <h3 className="text-lg font-semibold pr-2">{category}:</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <button
                  onClick={() => handleFilterButtonClick(skill.name)}
                  className={`px-2 py-1 rounded-lg text-white ${
                    selectedFilters.includes(skill.name)
                      ? "bg-blue-600"
                      : "bg-gray-600 hover:bg-gray-700"
                  }`}
                  key={`${category}-skill-${index}`}
                >
                  {skill.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedFilters.length > 0 && (
        <div className="flex justify-center mb-4">
          <button
            onClick={handleClearAllFilters}
            className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
          >
            <MdClear className="mr-2" />
            Clear All
          </button>
        </div>
      )}
      <div className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div
              key={index}
              className={`py-6 flex items-center justify-between 
              ${
                index !== filteredItems.length - 1
                  ? "border-b border-stone-50/30"
                  : ""
              }`}
            >
              <div className="text-base text-justify">
                <h3 className="px-6">{item.description}</h3>
                <span className="text-gray-500">
                  {item.languages.join(", ")}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-6">
            No evidence of those skills yet, but stay tuned for updates!
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiFilters;
