import React, { useState } from "react";

const ProjectCard = ({ title, description, image, techStack, github, liveDemo, bgColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`flex flex-col 2xl:flex-row ${bgColor} rounded-2xl p-5 gap-5 shadow-md`}>
        {/* Thumbnail Image with click to enlarge */}
        <img
          src={image}
          alt={title}
          onClick={() => setIsOpen(true)}
          className="w-full 2xl:w-1/2 h-auto rounded-xl cursor-pointer hover:opacity-90 transition"
        />

        <div className="flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-700 mb-3">{description}</p>
            <p className="text-xs font-medium text-gray-600 mb-3">🔧 Tech Stack: {techStack}</p>
          </div>
          <div className="flex gap-3 mt-2">
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-black text-white rounded-full font-medium hover:opacity-80"
              >
                Live Demo
              </a>
            )}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm border border-black text-black rounded-full font-medium hover:bg-black hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* 🔍 Modal to view full image */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="max-w-3xl max-h-[90vh] p-4 bg-white rounded-xl relative">
            <img src={image} alt={title} className="rounded-xl max-h-[80vh] object-contain" />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-black font-bold text-xl hover:text-red-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
