import React from "react";
import Title from "../Components/Title";
import { TechSkills, SoftSkills } from "../assets/assets";
import TechStackBadge from "../Components/TechStackBadge";

const Skills = () => {
  return (
    <div className="page lg:h-full lg:overflow-y-auto font-[Poppins]">
      <Title text="Tech And Traits" />

      {/* Technical Skills */}
      <div className="mb-10 mt-5">
        <h2 className="text-2xl font-semibold mb-4">⚙️ Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {TechSkills.map((skill, idx) => (
            <TechStackBadge key={idx} name={skill.skill} icon={skill.icon} />
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">🌸 Why Work With Me</h2>
        <div className="grid xl:grid-cols-1 gap-4">
          {SoftSkills.map((skill, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-4 p-5 rounded-2xl ${skill.bgColor} shadow-md`}
            >
              <img
                src={skill.icon}
                alt={skill.title}
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">{skill.title}</h3>
                <p className="text-sm text-gray-700">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
