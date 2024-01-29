import React from "react";
import Project from "./Project";
import projectData from "../asstes/data";

function ProjectsSection() {
  const projects = projectData.map((item) => {
    return (
      <Project
        id={item.id}
        name={item.name}
        description={item.description}
        image={item.image}
        bg={item.bg}
        key={item.id}
      />
    );
  });

  return (
    <div className="w-full" id="projectsSection">
      <div className="text-center text-4xl font-bold p-10 pt-24 bg-gray-200">
        <h2>Projects</h2>
      </div>
      {projects}
    </div>
  );
}

export default ProjectsSection;
