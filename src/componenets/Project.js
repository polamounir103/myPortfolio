import React from "react";
import ProjectBack from "../asstes/images/ProjectBack.png";
import style from "../asstes/styles/project.css";

function Project(probs) {
  // <img src={probs.image} className='project-image' />

  return (
    <div
      className={
        "flex flex-col items-center justify-evenly sm:flex-row pb-12  " +
        probs.bg
      }
      id={probs.id}
    >
      <div className="project-image-container w-full md:w-4/5 lg:w-1/3">
        <img src={ProjectBack} className="project-image-back" />
        <div className="project-image">
          <img src={probs.image} className=" bg-slate-500 w-full h-full" />
        </div>
      </div>
      <div className="w-full  md:w-3/5 lg:w-1/3 flex flex-col gap-4 items-center md:items-start text-center md:text-left px-10  md:pe-8">
        <h2 className="text-2xl  font-bold">{probs.name}</h2>
        <p className=" text-xl font-medium">{probs.description}</p>
        <button className="btn px-5 py-3 bg-yellow-400 rounded-xl m-2 hover:bg-yellow-300 shadow-black shadow-sm ">
          Take A Look
        </button>
      </div>
    </div>
  );
}

export default Project;
