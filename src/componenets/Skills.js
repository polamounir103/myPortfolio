import React from "react";
import SkillsCircle from "./SkillsCircle";
import SkillItem from "./SkillItem";

function Skills() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center ">
      <div className="w-full h-full bg-emerald-600 flex flex-col items-center md:items-start pt-20 pb-4 md:p-0  ">
        <h2 className="bg-red-500 font-extrabold text-3xl"> My Skills</h2>
        <div className="h-full bg-black flex justify-center gap-5 flex-wrap px-5">
          <SkillItem name="HTML" />
          <SkillItem name="CSS" />
          <SkillItem name="Bootstrap" />
          <SkillItem name="Tailwind CSS" />
          <SkillItem name="Java Script" />
          <SkillItem name="React" />
        </div>
      </div>
      <div className="w-full h-96 bg-red-600 flex justify-center items-center relative">
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <SkillsCircle />
        </div>
      </div>
    </div>
  );
}

export default Skills;
